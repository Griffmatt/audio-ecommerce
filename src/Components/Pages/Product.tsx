import React from 'react'

import ShopProducts from '../ShopProducts';
import ProductCardFour from '../ProductCardFour';
import ProductCard from '../ProductCard';
import ImageGrid from '../ImageGrid';

import Data from "../../Data/data.json";

interface ProductId{
  slug: any
}


function Product({slug}:ProductId) {

  let selectedProduct = Data.filter(product=> product.slug === slug)
  return (
    <>
      <section className="productHeader"/>
      <section className="pageContent">
        <div className="pageWrapper">
          <div className="productsPageCards productCards">
              <ProductCard products={selectedProduct} addToCart={true}/>
            </div>
            <ImageGrid images={selectedProduct[0].gallery}/>
          <ShopProducts/>
          <ProductCardFour/>
        </div>
      </section>
    </>
  )
}

export default Product