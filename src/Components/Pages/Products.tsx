import React from 'react';

import Data from "../../Data/data.json";

import SecondaryBanner from '../SecondaryBanner';
import ShopProducts from '../ShopProducts';
import ProductCardFour from '../ProductCardFour';
import ProductCard from '../ProductCard'

interface productsProps{
  type: string
}

function Products({type}:productsProps) {
  let filteredData = Data.filter(product=> product.category === type)
  return (
    <>
    <section className="homePageHeader">
      <SecondaryBanner type={type}/>
    </section>
    <section className="pageContent">
      <div className="pageWrapper">
        <div className="productsPageCards productCards">
            <ProductCard products={filteredData}/>
          </div>
        <ShopProducts/>
        <ProductCardFour/>
      </div>
    </section>
  </>
  )
}

export default Products