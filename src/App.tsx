import React from "react";
import "./CSS/App.css";
import "./CSS/Variables.css";
import "./CSS/NavBar.css";
import "./CSS/Banner.css";
import "./CSS/ShopProducts.css";
import "./CSS/ProductCards.css";
import "./CSS/Footer.css";

import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
