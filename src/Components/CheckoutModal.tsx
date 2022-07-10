import React from 'react'
import { useModal } from '../context/ModalContext'

import { Link } from 'react-router-dom'

import{ useDispatch} from 'react-redux'
import { removeAll} from "../redux/shoppingCartSlice"
import { useSelector } from 'react-redux'
import {  selectCart, incrementAmount, decrementAmount, removeItem} from './../redux/shoppingCartSlice'


import convertCurrency from "../Utilities/CurrencyConvertor"
import calculateTotal from '../Utilities/CalculateTotal'

interface ItemType{
    amount: number,
    price: number,
    name: string,
    id: number,
    slug: string,
    cartImage: string,
    cartName: string
  }



function CheckoutModal() {

const {showCheckoutModal, closeModal } = useModal()

const dispatch = useDispatch()
const cart = useSelector(selectCart)

const handleRemoveAll = () => {
    dispatch(removeAll())
}

const incrementItem = (item: ItemType) => {
    dispatch(incrementAmount(item))
}

const decrementItem = (item: ItemType) => {
    if(item.amount === 1){
        dispatch(removeItem(item))
        return
    }
    dispatch(decrementAmount(item))
}


  return (
    <div className={`modalBackground ${showCheckoutModal?"showCheckoutModal": ""}`}>
        <div className="checkoutModalWrapper">
            <div className={`checkoutModal ${showCheckoutModal?"slideCheckoutModal": ""}`} >
                <div className="checkoutContent">
                    <div >
                        <h6>{`CART (${cart.length})`}</h6>
                        <p className="removeAllButton" onClick={handleRemoveAll}>Remove All</p>
                    </div>
                    <div className="checkoutItems">
                        {cart.map((item: ItemType)=>{
                            return(
                            <div className="checkoutItem" key={item.id}>
                                <div className="checkoutItemInfo">
                                    <img src={item.cartImage} alt={item.name}/>
                                    <div>
                                    <p className="boldP">{item.cartName}</p>
                                    <p className="underLine">{convertCurrency((item.price * item.amount))}</p>
                                    </div>
                                </div>
                                <div className="incrementButtons">
                                    <div className="subTitle incrementButton" onClick={() => decrementItem({...item})}>-</div>
                                     <p className="subTitle">{item.amount}</p>
                                    <div className="subTitle incrementButton" onClick={() => incrementItem({...item})}>+</div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="checkoutContent">
                    <div>
                        <p>TOTAL</p>
                        <h6>{cart.length >0?convertCurrency(calculateTotal(cart)): "$0"}</h6>
                    </div>
                    {cart.length === 0?<button className="buttonOne" onClick={closeModal}>ADD ITEMS TO CART</button>:<Link to="/checkout"><button className="buttonOne" onClick={closeModal}>CHECKOUT</button></Link>}
                </div>
            </div>
        </div>
        <div className={`modalBackdrop ${showCheckoutModal?"backdropFade": ""}`} onClick={closeModal}/>
    </div>
  )
}

export default CheckoutModal