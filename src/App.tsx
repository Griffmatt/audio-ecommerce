import React from "react";
import "./CSS/App.css";
import "./CSS/Variables.css";
import "./CSS/NavBar.css";
import "./CSS/Banners.css";
import "./CSS/ShopProducts.css";
import "./CSS/ProductCards.css";
import "./CSS/Footer.css";
import "./CSS/Buttons.css"

import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Product from "./Components/Pages/Product";
import Footer from "./Components/Footer";
import ScrollToTop from "./Utilities/ScrollToTop";

import {Routes, Route, useParams} from 'react-router-dom'

function App() {

    const FilterProduct = () => {
      const {id} = useParams()
        return(
          <Product id={id}/>
        )
    }
 

  return (
    <>
    <ScrollToTop/>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Speakers" element={<Products type="speakers"/>}/>
       <Route path="/Headphones" element={<Products type="headphones"/>}/>
       <Route path="/Earphones" element={<Products type="earphones"/>}/>
       <Route path={`/:id`} element={<FilterProduct/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
