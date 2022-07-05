import React from 'react'

import BackButton from '../BackButton'
import CheckoutInfo from '../CheckoutInfo'
import CheckoutSummary from '../CheckoutSummary'

function Checkout() {
  return (
    <>
        <section className="noBanner"/>
        <section className="pageContent">
          <div className="pageWrapper">
            <BackButton/>
            <div className="checkoutWrapper">
              <CheckoutInfo/>
              <CheckoutSummary/>
            </div>
          </div>
        </section>
    </>
  )
}

export default Checkout