import React, {useState} from 'react'

import BackButton from '../BackButton'
import CheckoutInfo from '../CheckoutInfo'
import CheckoutSummary from '../CheckoutSummary'
import ConfirmedOrderModal from '../ConfirmedOrderModal'


function Checkout() {

  const [message, setMessage] = useState("CONTINUE & PAY")


  return (
    <>
        <section className="pageContent">
          <div className="pageWrapper">
            <BackButton/>
            <div className="checkoutWrapper">
              <CheckoutInfo setMessage={setMessage} />
              <CheckoutSummary message={message}/>
            </div>
          </div>
          <ConfirmedOrderModal/>
        </section>
    </>
  )
}

export default Checkout