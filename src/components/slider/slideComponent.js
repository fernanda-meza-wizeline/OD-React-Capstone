import React from 'react';
import '../../assets/slide.css';
class Slide extends React.Component{
     changeSlideState(slideState){
        this.props.className=slideState;
      }
    render(){
        
        return(
            <div className={this.props.class} >
                <img className={this.props.class+"SlideImage"} src={this.props.imageUrl} alt={this.props.altText}  />           
               <div className={this.props.class+"Block"}>
                    <span className={this.props.class+"SlideTitle"}>{this.props.title}</span>
                    <p className={this.props.class+"SlideDescription"}>{this.props.description} </p>
                </div>
            </div>
        )
    };
}

export default Slide;