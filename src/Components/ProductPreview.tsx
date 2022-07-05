import React from 'react'

import SeeProduct from './SeeProduct';


interface Images{
    mobile: string, 
    tablet: string,
    desktop: string
}

interface Product{
    id: number,
    categoryImage: Images,
    name: string,
    description: string,
    slug: string

}

interface ProductsType{
    product: Product,

}

function ProductPreview({product}:ProductsType) {
  return (

    <div className="previewCard" key={product.id}>
        <img className="cardOne" src={product.categoryImage.desktop} alt={product.name}/>
        <div className="cardTwo">
            <h2>{product.name}</h2>  
            <p>{product.description}</p>
            <SeeProduct slug={product.slug}/>
        </div>
    </div>
  )
}

export default ProductPreview