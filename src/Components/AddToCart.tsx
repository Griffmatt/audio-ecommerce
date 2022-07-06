import React, {useState} from 'react';

import convertCurrency from "../Utilities/CurrencyConvertor"

interface ProductType{
    product: any,
}

function AddToCart({product}: ProductType) {
    const [amount, setAmount] = useState(0)

    const handleAddToCart = () => {
        setAmount(0)
    }

  return (
    <>
        <h6>{convertCurrency(product.price)}</h6>
        <div className="addToCartButtons">
            <div className="incrementButtons">
                <p className="subTitle incrementButton" onClick={()=> amount>0?setAmount(amount-1):""}>-</p>
                <p className="subTitle">{amount}</p>
                <div className="subTitle incrementButton" onClick={()=> setAmount(amount+1)}>+</div>
            </div>
            <button className="buttonOne" onClick={handleAddToCart}>ADD TO CART</button>
        </div>
    </>
  )
}

export default AddToCart