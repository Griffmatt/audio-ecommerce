import React from 'react'

import AddToCart from './AddToCart';
import SeeProduct from './SeeProduct';


interface Images{
    mobile: string, 
    tablet: string,
    desktop: string
}

interface Products{
    id: number,
    image: Images,
    name: string,
    description: string,
    slug: string

}

interface ProductsType{
    products: Products[],
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