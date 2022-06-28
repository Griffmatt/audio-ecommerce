import React from 'react'

function ProductCardOne() {
  return (
    <div className="productCardOne">
      <div className="imageContainer">
        <img src={"/assets/home/desktop/image-speaker-zx9.png"} className="productImage"/>
        <img src={"/assets/home/desktop/pattern-circles.svg"} className="patternCircles"/>
      </div>
      <div className="productInfo">
        <h1>ZX9<br/>SPEAKER</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button className="buttonThreeA">SEE PRODUCT</button>
      </div>
    </div>
  )
}

export default ProductCardOne