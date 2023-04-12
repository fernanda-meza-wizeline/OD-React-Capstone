import React, {useState} from "react";
import "../assets/productListComponent.css";
import FeaturedProducts from "../components/featuredProductsComponent";
import Pagination from "../components/ui/Pagination/Pagination"
import productsMock from "../mocks/en-us/products.json";
import categoriesMock from "../mocks/en-us/product-categories.json";

function ProductList(){

  let [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (click, newProduct) => {
    if(click.target.checked){
      click.target.parentElement.style.backgroundColor="bisque";
      return setFilteredProducts([filteredProducts,newProduct]);
    }else{
      click.target.parentElement.style.backgroundColor="white";
      return setFilteredProducts([filteredProducts,newProduct]);
    }
  }
    return (
        <div className="productList">
         <div className="sidebar">
            {categoriesMock.results.map((category) => {
              return(
                <div key={category.id}>
                  <label>
                    <input type="checkbox" onClick={(click) => 
                      filterProducts(click, category.data.name.toLowerCase())}>
                    </input>
                    {category.data.name}
                  </label>
                  </div>          
              );
            })}
             </div>
             <div className="productGrid">
              <FeaturedProducts category={filteredProducts?.[1]} products={productsMock} />
              <Pagination postsPerPage={5} totalPosts={productsMock.results.length} paginate={true}/>
             </div>
         </div>
  );
}
export default ProductList;

