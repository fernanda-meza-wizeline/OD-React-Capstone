import React from 'react';
import './slide.css';
class Slide extends React.Component{
     changeSlideState(slideState){
        this.props.className=slideState;
      }
    render(){
        
        return(
            <div className="slide">
                <img className="slideImage" src={this.props.imageUrl} alt={this.props.altText} />           
               <div className="block">
                    <span className="slideTitle">{this.props.title}</span>
                    <p className="slideDescription">{this.props.description} </p>
                </div>
            </div>
        )
    };
}

export default Slide;