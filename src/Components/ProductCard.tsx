import React from 'react'

import AddToCart from './AddToCart';
import SeeProduct from './SeeProduct';

interface ProductsType{
    products: any[],
    addToCart?: boolean
}

function ProductCard({products, addToCart}:ProductsType) {
  return (
    <>
        {products.map(product=>{
            return(
                <div className="productCard" key={product.id}>
                    <img className="cardOne" src={product.image.desktop} alt={product.name}/>
                    <div className="cardTwo">
                        <h2>{product.name}</h2>  
                        <p>{product.description}</p>
                        {addToCart?<AddToCart product={product}/>:<SeeProduct slug={product.slug}/>}
                    </div>
                </div>
            )}
        )}
    </>
  )
}

export default ProductCard