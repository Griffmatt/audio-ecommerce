import React, { useState } from 'react'
import {resetUserInfo, setUserInfo} from './../redux/userInfoSlice';
import{ useDispatch} from 'react-redux'
import { useModal } from '../context/ModalContext'

import { useSelector } from 'react-redux'
import{ selectUserInfo } from './../redux/userInfoSlice'
import { removeAll, selectCart } from '../redux/shoppingCartSlice';

interface SetMessage{
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

function Checkoutinfo({setMessage}: SetMessage) {

    const userInfo = useSelector(selectUserInfo)
    const cart = useSelector(selectCart)

    const [payingWithCash, setPayingWithCash]= useState(false)

    const { handleModalClick } = useModal()

    const dispatch = useDispatch()

    const handleRadioButtonCard = () => {
        setPayingWithCash(false)
        setMessage("CONTINUE & PAY")
        document.getElementById("creditCard")?.click()
        handleUserInfo("payingWithCash", false)
    }

    const handleRadioButtonCash = () => {
        setPayingWithCash(true)
        setMessage("CONTINUE")
        document.getElementById("cash")?.click()
        handleUserInfo("payingWithCash", true)
    }

    function handleUserInfo(key: string, value: string|boolean){
        dispatch(setUserInfo({key, value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        if(cart.length>0){
        setMessage("CONFIRMING PAYMENT")
        dispatch(removeAll())
        dispatch(resetUserInfo())
        console.log(userInfo)
        setTimeout(()=>{handleModalClick("confirm"); setMessage("CONFIRMED")}, 1000)
        return
        }
        setMessage("ADD ITEMS TO CART")
      }

  return (
    <div className="checkoutInfoWrapper">
        <form id="checkout-form" onSubmit={event => handleSubmit(event)}>
            <h3>CHECKOUT</h3>
            <div className="checkoutInfoRow">
                <h6>BILLING DETAILS</h6>
                <div className="formInputs">
                    <label>
                        Name 
                        <input  onChange={event =>{handleUserInfo("name", event.target.value)}} required/>
                    </label>  
                    <label>
                        Email Address 
                        <input type="email" required  onChange={event =>{handleUserInfo("email", event.target.value)}}/>
                    </label>  

                    <label>
                        Phone Number 
                        <input type="tel" required onChange={event =>{handleUserInfo("phone", event.target.value)}}/>
                    </label>  
                </div>
            </div>
            <div className="checkoutInfoRow">
                <h6>SHIPPING INFO</h6>
                <div className="formInputs">
                    <label className="largeInput">
                        Address
                        <input className="largeInput" required onChange={event =>{handleUserInfo("address", event.target.value)}}/>
                    </label> 
                    <label>
                        Zip Code 
                        <input required onChange={event =>{handleUserInfo("zipCode", event.target.value)}}/>
                    </label>

                    <label>
                        City
                        <input required onChange={event =>{handleUserInfo("city", event.target.value)}}/>
                    </label>

                    <label>
                        Country
                        <input required onChange={event =>{handleUserInfo("country", event.target.value)}}/>
                    </label>  
                </div>
            </div>
            <div className="checkoutInfoRow">
                <h6>PAYMENT DETAILS</h6>
                <div className="formInputs">
                    <label>Payment Method</label>
                    <div className="checkoutRadioButtons">
                        <label onClick={handleRadioButtonCard}>
                            <input type="radio" name="payment method" defaultChecked id="creditCard" />
                            Credit Card
                        </label>

                        <label onClick={handleRadioButtonCash}>
                            <input type="radio" name="payment method" id="cash" />
                            Cash On Delivery
                        </label>

                    </div>
                    {payingWithCash?
                    <div className="cashOnDemand">
                        <img src="/assets/checkout/icon-cash-on-delivery.svg" alt=""/>
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>:
                    <>
                        <label>
                            e-Money Number
                            <input required/>
                        </label>  

                        <label>
                            e-money Pin
                            <input required/>
                        </label>  
                    </>}
                </div>
            </div>
        </form>
    </div>
  )
}

export default Checkoutinfo