import React from 'react'

interface productsProps{
    type: string
  }

function SecondaryBanner({type}:productsProps) {
  return (
    <div className="secondaryBanner">
        <h2>{`${type.toUpperCase()}`}</h2>
    </div>
  )
}

export default SecondaryBanner