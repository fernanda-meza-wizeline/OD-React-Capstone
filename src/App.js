import './App.css';
import Header from './UI/headerComponent';
import Footer from './UI/footerComponent';
import Slider from './UI/slider/sliderComponent';
import ProductCategories from './UI/productCategoriesComponent';
import FeaturedBanners from './mocks/en-us/featured-banners.json';
import FeaturedProducts from './UI/featuredProductsComponent';
import Categories from './mocks/en-us/product-categories.json';
import Products from './mocks/en-us/featured-products.json';
//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <Header className="header" logo="./logo.svg"/>
      <Slider featured={FeaturedBanners} />
      <ProductCategories featured={Categories} />
      <FeaturedProducts products={Products} />
      <Footer />
    </div>
  );
}

export default App;
