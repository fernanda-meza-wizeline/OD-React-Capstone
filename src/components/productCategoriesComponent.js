import React from 'react';
import Carousel from '../components/ui/cardCarouselComponent';

const ProductCategories = (props) => {

    return(
        <div className="productCategories">
            <Carousel cardType="category" elements={props.featured.results}/>
        </div>
    )
}
export default ProductCategories;