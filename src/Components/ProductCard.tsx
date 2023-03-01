import React from 'react'


import AddToCart from './AddToCart';



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
    slug: string, 
    price: number

}

interface ProductsType{
    product: Products,
}

function ProductCard({product}:ProductsType) {

  return (
    <div className="productCard" key={product.id}>
        <img className="cardOne" src={product.image.desktop} alt={product.name}/>
        <div className="cardTwo">
            <h2>{product.name}</h2>  
            <p>{product.description}</p>
            <AddToCart product={product}/>
        </div>
    </div>

  )
}

export default ProductCard