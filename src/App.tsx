import React from "react";
import "./CSS/App.css";
import "./CSS/Variables.css";
import "./CSS/NavBar.css";
import "./CSS/Banners.css";
import "./CSS/ShopProducts.css";
import "./CSS/ProductCards.css";
import "./CSS/Footer.css";

import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Footer from "./Components/Footer";
import ScrollToTop from "./Utilities/ScrollToTop";

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <ScrollToTop/>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Speakers" element={<Products type="speakers"/>}/>
       <Route path="/Headphones" element={<Products type="headphones"/>}/>
       <Route path="/Earphones" element={<Products type="earphones"/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
