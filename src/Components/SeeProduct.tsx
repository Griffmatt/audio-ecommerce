import React from 'react'
import { Link } from 'react-router-dom'

interface ProductType{
    slug: string
}

function SeeProduct({slug}: ProductType) {
  return (
    <Link to={`/${slug}`}><button className="buttonOne">SEE PRODUCT</button></Link>
  )
}

export default SeeProduct