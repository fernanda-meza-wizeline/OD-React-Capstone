import React from "react";
import './buttonComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class Button extends React.Component{
   
    render(){
        if(this.props.text){
            return (
                <button className={this.props.className} onClick={this.props.clickFunction}>
                    {this.props.text}
                </button>
            );
        }
        else if(this.props.icon){
            return (
                <button className={this.props.className} onClick={this.props.clickFunction}>
                     <FontAwesomeIcon icon={this.props.icon} />
                     </button>
            );
        }
        else if(this.props.image){
            return (
                <button className={this.props.className} onClick={this.props.clickFunction}>
                        <img src={this.props.image} alt="logo"></img>
                    </button>
            );
        }
 
    }
}