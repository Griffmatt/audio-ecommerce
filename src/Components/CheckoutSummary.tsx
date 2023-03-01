import React, { useState } from 'react'
import convertCurrency from "../Utilities/CurrencyConvertor"

import { useSelector } from 'react-redux'
import {  selectCart } from './../redux/shoppingCartSlice'
import { setUserInfo} from './../redux/userInfoSlice';

import { useDispatch } from 'react-redux';

import calculateTotal, { calculateGrandTotal, calculateTax } from '../Utilities/CalculateTotal'

interface MessageState{
  message: string
}

interface ItemType{
  amount: number,
  price: number,
  name: string,
  cartName: string,
  cartImage: string,
  id: number
}

function CheckoutSummary({message}: MessageState) {


  const cart = useSelector(selectCart)

  const [currentItems] = useState(cart)

  const dispatch = useDispatch()

  const handleCheckout = (key: string, value: any) => {
    dispatch(setUserInfo({key, value}))
  }


  return (
    <div className="checkoutSummaryWrapper">
        <div className="checkoutSummary">
            <h6>SUMMARY</h6>
            <div className="checkoutItems">
              {currentItems.map((item: ItemType)=>{
                return(
                  <div className="checkoutItem" key={item.id}>
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
                <h6>{currentItems.length >0?convertCurrency(calculateTotal(currentItems)): "$0"}</h6>
              </div>
              <div>
                <p>SHIPPING</p>
                <h6>{currentItems.length?"$50": "$0"}</h6>
              </div>
              <div>
                <p>TAX</p>
                <h6>{currentItems.length >0?convertCurrency(calculateTax(currentItems)): "$0"}</h6>
              </div>
            </div>
            <div className="checkoutGrandTotal">
              <p>Grand Total</p>
              <h6>{currentItems.length >0?convertCurrency(calculateGrandTotal(currentItems)): "$0"}</h6>
            </div>
            <button className="buttonOne" type="submit" form="checkout-form" onClick={() =>handleCheckout("itemsOrdered", currentItems.map((item: 
            ItemType)=>{return({
              "id": item.id,
              "name": item.name,
              "amount": item.amount,
              "image": item.cartImage
            })}))}>{message}</button>
        </div>
    </div>
  )
}

export default CheckoutSummary