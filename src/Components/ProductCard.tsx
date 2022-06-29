import React from 'react'

interface ProductsType{
    products: any[]
}

function ProductCard({products}:ProductsType) {
  return (
    <>
        {products.map(product=>{
            return(
                <div className="productCard" key={product.id}>
                    <img className="cardOne" src={product.image.desktop} alt={product.name}/>
                    <div className="cardTwo">
                        <h2>{product.name}</h2>  
                        <p>{product.description}</p>
                        <button className="buttonOne">SEE PRODUCT</button>
                    </div>
                </div>
            )}
        )}
    </>
  )
}

export default ProductCard