import React from "react";
import "./sass/styles.scss";


import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Product from "./Components/Pages/Product";
import Footer from "./Components/Footer";
import ScrollToTop from "./Utilities/ScrollToTop";
import Checkout from "./Components/Pages/Checkout";
import {Routes, Route, useParams} from 'react-router-dom'
import CheckoutModal from "./Components/CheckoutModal";
import { ModalContextProvider } from "./context/ModalContext";



function App() {

    const FilterProduct = () => {
      const {slug} = useParams()
        return(
          <Product slug={slug}/>
        )
    }

  return (
    <ModalContextProvider>
    <ScrollToTop/>
      <NavBar/>
      <CheckoutModal/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/speakers" element={<Products type="speakers"/>}/>
       <Route path="/headphones" element={<Products type="headphones"/>}/>
       <Route path="/earphones" element={<Products type="earphones"/>}/>
       <Route path="/:slug" element={<FilterProduct/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </ModalContextProvider>
  );
}

export default App;
