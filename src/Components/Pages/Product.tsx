import React from 'react'

import ShopProducts from '../ShopProducts';
import ProductCardFour from '../ProductCardFour';
import ProductCard from '../ProductCard';
import ImageGrid from '../ImageGrid';
import ProductFeatures from '../ProductFeatures';

import Data from "../../Data/data.json";
import OtherProducts from '../OtherProducts';
import BackButton from '../BackButton';

interface ProductId{
  slug: string | undefined
}


function Product({slug}:ProductId) {

  let selectedProduct = Data.filter(product=> product.slug === slug)[0]


  return (
    <>
      <section className="noBanner"/>
      <section className="pageContent">
        <div className="pageWrapper">
          <BackButton/>
          <ProductCard product={selectedProduct}/>
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