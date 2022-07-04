import React from 'react'

interface ProductIncludes{
    quantity: number,
    item: string
}

interface ProductInfo{
    includes: ProductIncludes[],
    features: string
}

interface Product{
    product: ProductInfo
}

function ProductFeatures({product}: Product) {

  return (
    <div className="featuresCard">
        <div className="featureInfo">
            <h3>FEATURES</h3>
            <p>{product.features}</p>
        </div>
        <div className="inTheBox">
            <h3>IN THE BOX</h3>
            <div className="boxItems">
                {product.includes.map((item, index)=>{
                    return(
                        <p key={index}><span className="boxQuantity">{item.quantity}x</span><span className="boxItem">{item.item}</span></p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductFeatures