import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../components/ui/cardCarouselComponent';

const ProductCategories = ({featured}) => {

    return(
        <div className="productCategories">
            <Carousel cardType="category" elements={featured.results}/>
        </div>
    )
}

ProductCategories.propTypes = {
    featured: PropTypes.object,
  };

export default ProductCategories;