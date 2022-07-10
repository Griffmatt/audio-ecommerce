import React from 'react'

import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="banner">
      <div className="bannerContent">
          <div className="overLine">NEW PRODUCT</div>
          <h1>XX99 MARK II<br/>HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to="/xx99-mark-two-headphones"><button className="buttonOne subTitle" type="submit">SEE PRODUCT</button></Link>
      </div>
    </div>
  )
}

export default Banner