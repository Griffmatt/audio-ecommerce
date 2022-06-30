import React from 'react'

function ProductFeatures({product}: any) {

  return (
    <div className="featuresCard">
        <div className="featureInfo">
            <h3>FEATURES</h3>
            <p>{product.features}</p>
        </div>
        <div className="inTheBox">
            <h3>IN THE BOX</h3>
            <div className="boxItems">
                {product.includes.map((item: {
                        quantity: number,
                        item: string
                    })=>{
                    return(
                        <p><span className="boxQuantity">{item.quantity}x</span><span className="boxItem">{item.item}</span></p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductFeatures