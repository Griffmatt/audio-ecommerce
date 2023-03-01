import React from 'react'

import Banner from '../Banner';
import ShopProducts from '../ShopProducts';
import ProductCardOne from '../ProductCardOne';
import ProductCardTwo from '../ProductCardTwo';
import ProductCardThree from '../ProductCardThree';
import ProductCardFour from '../ProductCardFour';

function Home() {
  return (
    <>
      <section className="homePageHeader">
        <Banner/>
      </section>
      <section className="pageContent">
        <div className="pageWrapper">
          <ShopProducts/>
          <div className="productCards">
            <ProductCardOne/>
            <ProductCardTwo/>
            <ProductCardThree/>
          </div>
          <ProductCardFour/>
        </div>
      </section>
    </>
  )
}

export default Home;