import React,{useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from "./cardComponent";
import "../../assets/carousel.css";


const Carousel = ({elements, cardType}) => {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(elements);
    
    useEffect(() => {
      document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])
    
    const handleAnimationEnd = () => {
      if(moveClass === 'prev'){
        shiftNext([...carouselItems]);
      }else if(moveClass === 'next'){
        shiftPrev([...carouselItems]);
      }
      setMoveClass('')
    }
    
    const shiftPrev = (copy) => {
      const lastcard = copy.pop();
      copy.splice(0, 0, lastcard);
      setCarouselItems(copy);
    }
    
    const shiftNext = (copy) => {
      let firstcard = copy.shift();
      copy.splice(copy.length, 0, firstcard);
      setCarouselItems(copy);
    }
    
    return (
      <div className="carouselwrapper module-wrapper">
        <div className="ui">
          <button onClick={() => setMoveClass('next')} className="prev"><FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={() => setMoveClass('prev')} className="next">
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
          {carouselItems.map((card, index) => 
            <Card key={index} cardType={cardType} imageUrl={card.data.main_image.url} title={card.data.name}/>
          )}
        </ul>
      </div>
    )
  }
  
  Carousel.propTypes = {
    elements:PropTypes.object,
    cardType: PropTypes.string
  };


  export default Carousel;
