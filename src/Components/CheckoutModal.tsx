import React from 'react'
import { useModal } from '../context/ModalContext'

import { Link } from 'react-router-dom'


function CheckoutModal() {

const { handleModalClick, modalShown } = useModal()

  return (
    <div className={`modalBackground ${modalShown?"showModal": ""}`}>
        <div className="modalWrapper">
            <div className={`checkoutModal ${modalShown?"slideModal": ""}`} >
                <div className="checkoutContent">
                    <div >
                        <h6>{`CART (3)`}</h6>
                        <p className="removeAllButton">Remove All</p>
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
                    <Link to="/checkout"><button className="buttonOne" onClick={handleModalClick}>CHECKOUT</button></Link>
                </div>
            </div>
        </div>
        <div className={`modalBackdrop ${modalShown?"backdropFade": ""}`} onClick={handleModalClick}/>
    </div>
  )
}

export default CheckoutModal