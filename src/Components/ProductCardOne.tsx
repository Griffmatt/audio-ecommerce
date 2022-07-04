import React from 'react'
import { Link } from 'react-router-dom'

function ProductCardOne() {
  return (
    <div className="productCardOne">
      <div className="imageContainer">
        <img src={"/assets/home/desktop/image-speaker-zx9.png"} className="productImage"/>
      </div>
      <div className="productInfo">
        <h1>ZX9<br/>SPEAKER</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to="/zx9-speaker"><button className="buttonThreeA">SEE PRODUCT</button></Link>
      </div>
      <img src={"/assets/home/desktop/pattern-circles.svg"} className="patternCircles"/>
    </div>
  )
}

export default ProductCardOne