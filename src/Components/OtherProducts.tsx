import React from 'react'

import { Link } from 'react-router-dom';

interface images{
    mobile: string, 
    tablet: string,
    desktop: string
}

interface product {
    slug: string, 
    name: string,
    image: images

}

interface Products {
    otherProducts: product[]

}


function OtherProducts({otherProducts}: Products) {
  return (
    <div className="otherProducts">
        <h3>YOU MAY ALSO LIKE</h3>
            <div className="otherProductsCards">
                {otherProducts.map((product: product)=>{
                    return(
                        <div className="otherProductsCard" key={product.slug}>
                            <img src={product.image.desktop} alt=""/>
                            <h5>{product.name}</h5>
                            <Link to={`/${product.slug}`}><button className="buttonOne">SEE PRODUCT</button></Link>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default OtherProducts