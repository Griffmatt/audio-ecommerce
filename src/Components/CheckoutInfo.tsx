import React, { useState } from 'react'

function Checkoutinfo() {
    const [usingCreditCard, setUsingCreditCard] = useState(true) 

    const handleRadioButtonCard = () => {
            setUsingCreditCard(true)
            document.getElementById("creditCard")?.click()
    }

    const handleRadioButtonCash = () => {
        setUsingCreditCard(false)
        document.getElementById("cash")?.click()
}

  return (
    <div className="checkoutInfoWrapper">
        <form>
            <h3>CHECKOUT</h3>
            <div className="checkoutInfoRow">
                <h6 className="subTitle">BILLING DETAILS</h6>
                <div className="formInputs">
                    <label>
                        Name 
                        <input required/>
                    </label>  
                    <label>
                        Email Adress 
                        <input type="email" required />
                    </label>  

                    <label>
                        Phone Number 
                        <input type="tel" required/>
                    </label>  
                </div>
            </div>
            <div className="checkoutInfoRow">
                <h6 className="subTitle">SHIPPING INFO</h6>
                <div className="formInputs">
                    <label className="largeInput">
                        Adress
                        <input className="largeInput"/>
                    </label> 
                    <label>
                        Zip Code 
                        <input required/>
                    </label>

                    <label>
                        City
                        <input required/>
                    </label>

                    <label>
                        Country
                        <input required/>
                    </label>  
                </div>
            </div>
            <div className="checkoutInfoRow">
                <h6 className="subTitle">PAYMENT DETAILS</h6>
                <div className="formInputs">
                    <label>Payment Method</label>
                    <div className="checkoutRadioButtons">
                        <label onClick={handleRadioButtonCard}>
                            <input type="radio" name="payment method" defaultChecked id="creditCard"/>
                            Credit Card
                        </label>

                        <label onClick={handleRadioButtonCash}>
                            <input type="radio" name="payment method" id="cash"/>
                            Cash On Delivery
                        </label>

                    </div>
                    {usingCreditCard?
                    <>
                        <label>
                            e-Money Number
                            <input required/>
                        </label>  

                        <label>
                            e-money Pin
                            <input required/>
                        </label>  
                    </>:
                    <div className="cashOnDemand">
                        <img src="/assets/checkout/icon-cash-on-delivery.svg" alt=""/>
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>}
                </div>
            </div>
        </form>
    </div>
  )
}

export default Checkoutinfo