import './App.css';
import logo from './logo.svg';
import Header from './components/headerComponent';
import Footer from './components/footerComponent';
import Slider from './components/slider/sliderComponent';
import ProductCategories from './components/productCategoriesComponent';
import FeaturedBanners from './mocks/en-us/featured-banners.json';
import FeaturedProducts from './components/featuredProductsComponent';
import Categories from './mocks/en-us/product-categories.json';
import Products from './mocks/en-us/featured-products.json';
//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <Header className="header" logo={logo}/>
      <Slider featured={FeaturedBanners} />
      <Slider categories={Categories} />
      <FeaturedProducts products={Products} />
      <Footer />
    </div>
  );
}

export default App;
