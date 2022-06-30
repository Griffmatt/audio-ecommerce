import React from 'react'
import {Link} from 'react-router-dom'


function ShopProducts() {
    const products = ["headphones", "speakers", "earphones"]
  return (
    <div className="shopProducts">
        {products.map(product=>{
            return(
                <div className="shopProduct" key={product}>
                    <img src={`/assets/shared/desktop/image-category-thumbnail-${product}.png`} alt={product} className="shopProductsImg"/>
                    <div className="shopProductInfo">
                        <h6>{`${product.toUpperCase()}`}</h6>
                        <Link to={`/${product}`}>
                            <div className="buttonTwo">
                                <span className="subTitle">SHOP</span>
                                <img src={"/assets/shared/desktop/icon-arrow-right.svg"}/>
                            </div>
                        </Link>
                    </div>
                    <div className="shopProductBackground"/>
                </div>
            )
        })}
    </div>
  )
}

export default ShopProducts