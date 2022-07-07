import React from 'react'
import { useModal } from '../context/ModalContext'
import convertCurrency from "../Utilities/CurrencyConvertor"

import { useSelector } from 'react-redux'
import {  selectCart } from './../redux/shoppingCartSlice'

interface MessageState{
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  message: string
}

interface ItemType{
  amount: number,
  price: number,
  name: string
}

function CheckoutSummary({message, setMessage}: MessageState) {

  const { handleModalClick } = useModal()

  const cart = useSelector(selectCart)
  console.log(cart)

  const handleClick = () => {
    setMessage("CONFIRMING PAYMENT")
    setTimeout(()=>{handleModalClick("confirm"); setMessage("CONFIRMED")}, 1000)
  }

  return (
    <div className="checkoutSummaryWrapper">
        <div className="checkoutSummary">
            <h6>SUMMARY</h6>
            <div className="checkoutItems">
              {cart.map((item: ItemType)=>{
                return(
                  <div className="checkoutItem">
                      <div className="checkoutItemInfo">
                        <img src="\assets\cart\image-xx59-headphones.jpg"/>
                        <div>
                          <p className="boldP">{item.name}</p>
                          <p className="underLine">{convertCurrency((item.price * item.amount))}</p>
                        </div>
                    </div>
                    <p className="itemAmount">{`x${item.amount}`}</p>
                </div>
                )
              })}
            </div>
            <div className="checkoutInfo">
              <div>
                <p>TOTAL</p>
                <h6>$50</h6>
              </div>
              <div>
                <p>SHIPPING</p>
                <h6>{cart.length?"$50": "$0"}</h6>
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