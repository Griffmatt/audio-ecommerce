import React from 'react';

import Data from "../../Data/data.json";

import SecondaryBanner from '../SecondaryBanner';
import ShopProducts from '../ShopProducts';
import ProductCardFour from '../ProductCardFour';
import PreviewCards from '../PreviewCards';

interface ProductsProps{
  type: string
}

function Products({type}:ProductsProps) {
  let filteredData = Data.filter(product=> product.category === type)
  return (
    <>
    <section className="homePageHeader">
      <SecondaryBanner type={type}/>
    </section>
    <section className="pageContent">
      <div className="pageWrapper">
        <PreviewCards products={filteredData}/>
        <ShopProducts/>
        <ProductCardFour/>
      </div>
    </section>
  </>
  )
}

export default Products