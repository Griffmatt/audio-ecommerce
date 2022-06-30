import React from 'react'

import {Link} from 'react-router-dom'

function ProductCardThree() {
  return (
    <div className="productCardThree">
        <img className="cardOne" src={"/assets/home/desktop/image-earphones-yx1.jpg"} alt="YX1 Earphones"/>
        <div className="cardTwo">
            <div>
                <h4>YX1 EARPHONES</h4>  
                <Link to="/yx1-earphones"><button className="buttonThree">SEE PRODUCT</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ProductCardThree