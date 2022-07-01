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

interface OtherProducts {
    otherProducts: product[]

}


function OtherProducts({otherProducts}: OtherProducts) {
  return (
    <div className="otherProducts">
        <h3>YOU MAY ALSO LIKE</h3>
            <div className="otherProductsCards">
                {otherProducts.map((product: product)=>{
                    return(
                        <div className="otherProductsCard">
                            <img src={product.image.desktop}/>
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