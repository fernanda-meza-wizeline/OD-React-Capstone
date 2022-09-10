import React from "react";
import "./cardComponent.css";
export class Card extends React.Component{
    render(){
        var card=(<></>);
        if(this.props.cardType==="category"){
            card=( 
            <>
            <img src={this.props.imageUrl} alt={this.props.altText} className="categoryImage"/>
            <div className="categoryNameBox">
            <h2>{this.props.title}</h2>
            </div>
            </>);
        }else{
            card=(
                <>
                 <img src={this.props.imageUrl} alt={this.props.altText} className="productImage"/>
                <div className="quickDescription">
                <span className="productName">{this.props.productName}</span>
                <span className="productPrice">{this.props.productPrice}</span>
                <span className="productCategory">{this.props.productCategory}</span>
            </div>
                </>
            );
        }
        return(
            <div className="card">
                {card}
            </div>            
        )
    }
}