import React from 'react'
import { useModal } from '../context/ModalContext'

import { Link } from 'react-router-dom'

import{ useDispatch} from 'react-redux'
import { removeAll} from "../redux/shoppingCartSlice"


function CheckoutModal() {

const {showCheckoutModal, closeModal } = useModal()

const dispatch = useDispatch()

const handleRemoveAll = () => {
    dispatch(removeAll)
}

  return (
    <div className={`modalBackground ${showCheckoutModal?"showCheckoutModal": ""}`}>
        <div className="checkoutModalWrapper">
            <div className={`checkoutModal ${showCheckoutModal?"slideCheckoutModal": ""}`} >
                <div className="checkoutContent">
                    <div >
                        <h6>{`CART (3)`}</h6>
                        <p className="removeAllButton" onClick={handleRemoveAll}>Remove All</p>
                    </div>
                    <div className="checkOutItems">
                        <h6>Add Items To Your Cart</h6>
                    </div>
                </div>
                <div className="checkoutContent">
                    <div>
                        <p>TOTAL</p>
                        <h6>$5,4982</h6>
                    </div>
                    <Link to="/checkout"><button className="buttonOne" onClick={closeModal}>CHECKOUT</button></Link>
                </div>
            </div>
        </div>
        <div className={`modalBackdrop ${showCheckoutModal?"backdropFade": ""}`} onClick={closeModal}/>
    </div>
  )
}

export default CheckoutModal