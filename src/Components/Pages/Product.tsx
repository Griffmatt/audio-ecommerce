import React from 'react'

import ShopProducts from '../ShopProducts';
import ProductCardFour from '../ProductCardFour';
import ProductCard from '../ProductCard';

import Data from "../../Data/data.json";

interface ProductId{
  id: any
}


function Product({id}:ProductId) {

  console.log(id)
  let selectedProduct = Data.filter(product=> product.slug == id)
  return (
    <>
      <section className="productHeader"/>
      <section className="pageContent">
        <div className="pageWrapper">
          <div className="productsPageCards productCards">
              <ProductCard products={selectedProduct} addToCart={true}/>
            </div>
          <ShopProducts/>
          <ProductCardFour/>
        </div>
      </section>
    </>
  )
}

export default Product