import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Slide from './slideComponent.js';
import './slide.css';

const Slider=(props)=>{ 
    const[activeIndex,setActiveIndex]=useState(0);
    
    var featured=props.featured.results;
    var results=[];
    var dots=[];
    
    featured.forEach((banner,index)=>{
        results.push(<Slide key ={index+banner.id}  title={banner.data.title} description={banner.data.description[0].text} imageUrl={banner.data.main_image.url} />);
        dots.push(
            <button key ={index} className={`${index===activeIndex?"active":"inactive"}`} onClick={()=>{updateIndex(index);}}><FontAwesomeIcon icon={faCircle} /></button>
        );
      })
      const updateIndex=(newIndex) =>{
        if(newIndex<0){
            newIndex=results.length-1;
        }else if(newIndex>=results.length){
            newIndex=0;
        }
        setActiveIndex(newIndex);
    }

    
   return(    <>
            <div className="slider">
                <div className="inner" style={{transform:`translateX(-${activeIndex*100}%)`}}>
                    {results}
                </div>
            </div>
    <div className="arrows">
        <button onClick={()=>{updateIndex(activeIndex-1);}}><FontAwesomeIcon icon={faChevronLeft} /></button>
        {dots}
        <button onClick={()=>{updateIndex(activeIndex+1);}}><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
    </>
   );
}

export default Slider;