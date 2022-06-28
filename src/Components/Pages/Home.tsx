import React from 'react'

import Banner from '../Banner';
import ShopProducts from '../ShopProducts';
import ProductCardOne from '../ProductCardOne';
import ProductCardTwo from '../ProductCardTwo';

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
          </div>
        </div>
      </section>
      <section className="pageFooter">

      </section>
    </>
  )
}

export default Home;