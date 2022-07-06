import React, {useState} from 'react'
import { useModal } from '../context/ModalContext'

function CheckoutSummary() {

  const { handleModalClick } = useModal()

  const [message, setMessage] = useState("CONTINUE & PAY")

  const handleClick = () => {
    setMessage("CONFIRMING PAYMENT")
    setTimeout(()=>{handleModalClick("confirm"); setMessage("CONFIRMED")}, 1000)
  }

  return (
    <div className="checkoutSummaryWrapper">
        <div className="checkoutSummary">
            <h6>SUMMARY</h6>
            <div className="checkoutItems">
                <div className="checkoutItem">
                  <div className="checkoutItemInfo">
                    <img src="\assets\cart\image-xx59-headphones.jpg"/>
                    <div>
                      <p className="boldP">XX99</p>
                      <p className="underLine">$599</p>
                    </div>
                </div>
                <p className="itemAmount">x1</p>
              </div>
            </div>
            <div className="checkoutItems">
                <div className="checkoutItem">
                  <div className="checkoutItemInfo">
                    <img src="\assets\cart\image-xx59-headphones.jpg"/>
                    <div>
                      <p className="boldP">XX99</p>
                      <p className="underLine">$599</p>
                    </div>
                </div>
                <p className="itemAmount">x1</p>
              </div>
            </div>
            <div className="checkoutItems">
                <div className="checkoutItem">
                  <div className="checkoutItemInfo">
                    <img src="\assets\cart\image-xx59-headphones.jpg"/>
                    <div>
                      <p className="boldP">XX99</p>
                      <p className="underLine">$599</p>
                    </div>
                </div>
                <p className="itemAmount">x1</p>
              </div>
            </div>
            <div className="checkoutInfo">
              <div>
                <p>TOTAL</p>
                <h6>$50</h6>
              </div>
              <div>
                <p>SHIPPING</p>
                <h6>$50</h6>
              </div>
              <div>
                <p>TAX</p>
                <h6>$50</h6>
              </div>
            </div>
            <div className="checkoutGrandTotal">
              <p>Grand Total</p>
              <h6>$50</h6>
            </div>
            <button className="buttonOne" onClick={handleClick}>{message}</button>
        </div>
    </div>
  )
}

export default CheckoutSummary