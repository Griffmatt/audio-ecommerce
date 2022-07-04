import React from 'react';

import ProductPreview from './ProductPreview';

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
    products: Product[],

}



function PreviewCards({products}:ProductsType) {
  return (
    <div className="previewCards">
         {products.map((product)=>{ 
            return(
                <ProductPreview product={product} key={product.id}/>
            )
        })}
    </div>
  )
}

export default PreviewCards