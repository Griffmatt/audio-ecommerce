import React from 'react'

import ShopProducts from '../ShopProducts';
import ProductCardFour from '../ProductCardFour';
import ProductCard from '../ProductCard';
import ImageGrid from '../ImageGrid';
import ProductFeatures from '../ProductFeatures';

import Data from "../../Data/data.json";
import OtherProducts from '../OtherProducts';

interface ProductId{
  slug: any
}


function Product({slug}:ProductId) {

  let selectedProduct = Data.filter(product=> product.slug === slug)[0]
  console.log(selectedProduct)
  return (
    <>
      <section className="productHeader"/>
      <section className="pageContent">
        <div className="pageWrapper">
          <div className="productsPageCards productCards">
              <ProductCard products={[selectedProduct]} addToCart={true}/>
          </div>
          <ProductFeatures product={selectedProduct} />
          <ImageGrid images={selectedProduct.gallery}/>
          <OtherProducts otherProducts={selectedProduct.others}/>
          <ShopProducts/>
          <ProductCardFour/>
        </div>
      </section>
    </>
  )
}

export default Product