import React, {useState} from "react";
import Header from "./components/ui/Layout/Header";
import Footer from "./components/ui/Layout/Footer";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Button from "./components/ui/Button/Button";
import "./App.css";
import Logo from "./assets/logo.svg";


function App() {

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };
  
  const [toggle, setToggle] = useToggle();
  return (
    <div className="App">
      <Header className="header" logo={Logo} onClickBtn={setToggle}/>
      {!toggle&& <Home />}
      {!toggle&&<Button text="View All Products" style="text" onClickBtn={setToggle}/>}
      {toggle&&<ProductList />}
      <Footer />
    </div>
  );
}

export default App;
