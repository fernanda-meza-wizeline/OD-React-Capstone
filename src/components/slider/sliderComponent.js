import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Slide from "./slideComponent.js";
import "../../assets/slide.css";

const Slider = ({ elements }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  var results = [];
  var dots = [];

  elements.forEach((banner, index) => {
    const title = banner.data.title ? banner.data.title : banner.data.name;
    const description = banner.data.description
      ? banner.data.description[0].text
      : "";

    const className = `${index === activeIndex ? "active" : "inactive"}`;

    results.push(
      <Slide
        class={banner.type}
        key={index}
        title={title}
        description={description}
        imageUrl={banner.data.main_image.url}
      />
    );

    dots.push(
      <button
        key={index}
        className={className}
        onClick={() => {
          updateIndex(index);
        }}
      >
        <FontAwesomeIcon icon={faCircle} />
      </button>
    );
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = results.length - 1;
    } else if (newIndex >= results.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="slider">
        <div
          className="inner"
          style={{
            transform: `translateX(-${
              activeIndex * (elements[0].type==='banner' ? 100 : 30)
            }%)`,
          }}
        >
          {results}
        </div>
      </div>

      <div className="arrows">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {dots}

        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};
Slider.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      href: PropTypes.string,
      data: PropTypes.object,
    })
  ),
};

export default Slider;
