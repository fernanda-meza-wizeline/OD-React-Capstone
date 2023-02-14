import React,{useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {Card} from "./cardComponent";
import "../../assets/carousel.css";


const Carousel = (props) => {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(props.elements);
    
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
      let lastcard = copy.pop();
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
          {carouselItems.map((t, index) => 
            <Card key={index} cardType={props.cardType} imageUrl={t.data.main_image.url} title={t.data.name}/>
          )}
        </ul>
      </div>
    )
  }
  
  export default Carousel;