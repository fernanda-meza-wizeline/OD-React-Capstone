import React from "react";
import "../../assets/cardComponent.css";
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
                 <img src={this.props.imageUrl} alt={this.props.altText} className="productImage" width={this.props.width} height={this.props.height}/>
                <div className="quickDescription">
                <div className="productName">{this.props.productName}</div>
                <div className="productPrice">$ {this.props.productPrice}</div>
                <div className="productCategory">{this.props.productCategory}</div>
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