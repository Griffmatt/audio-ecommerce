import React from 'react'
import { useModal } from '../context/ModalContext'
import convertCurrency from "../Utilities/CurrencyConvertor"

import { useSelector } from 'react-redux'
import {  selectCart } from './../redux/shoppingCartSlice'
import calculateTotal, { calculateGrandTotal, calculateTax } from '../Utilities/CalculateTotal'

interface MessageState{
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  message: string
}

interface ItemType{
  amount: number,
  price: number,
  name: string,
  cartName: string,
  cartImage: string
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
                        <img src={item.cartImage}/>
                        <div>
                          <p>{item.cartName}</p>
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
                <h6>{cart.length >0?convertCurrency(calculateTotal(cart)): "$0"}</h6>
              </div>
              <div>
                <p>SHIPPING</p>
                <h6>{cart.length?"$50": "$0"}</h6>
              </div>
              <div>
                <p>TAX</p>
                <h6>{cart.length >0?convertCurrency(calculateTax(cart)): "$0"}</h6>
              </div>
            </div>
            <div className="checkoutGrandTotal">
              <p>Grand Total</p>
              <h6>{cart.length >0?convertCurrency(calculateGrandTotal(cart)): "$0"}</h6>
            </div>
            <button className="buttonOne" onClick={handleClick}>{message}</button>
        </div>
    </div>
  )
}

export default CheckoutSummary