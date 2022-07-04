import React from "react";
import "./sass/Styles.scss";


import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Product from "./Components/Pages/Product";
import Footer from "./Components/Footer";
import ScrollToTop from "./Utilities/ScrollToTop";

import {Routes, Route, useParams} from 'react-router-dom'

function App() {

    const FilterProduct = () => {
      const {slug} = useParams()
        return(
          <Product slug={slug}/>
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
       <Route path={`/:slug`} element={<FilterProduct/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
