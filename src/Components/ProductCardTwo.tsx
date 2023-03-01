import React from 'react'
import { Link } from 'react-router-dom'

function ProductCardTwo() {
  return (
    <div className="productCardTwo">
        <div className="productInfo">
          <h4>ZX7 SPEAKER</h4>  
          <Link to="/zx7-speaker"><button className="buttonThree">SEE PRODUCT</button></Link>
        </div>
    </div>
  )
}

export default ProductCardTwo