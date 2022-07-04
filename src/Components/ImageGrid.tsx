import React from 'react'


interface Images{
    mobile: string, 
    tablet: string,
    desktop: string
}

interface ImagesArray{
    first: Images,
    second: Images,
    third: Images

}
interface ImagesType{
    images: ImagesArray
}

function ImageGrid({images}: ImagesType) {

  return (
    <div className="gridImages">
        <img  src={images.first.desktop} alt="" />
        <img src={images.second.desktop} alt="" />
        <img src={images.third.desktop} className="largeGridImage" alt="" />
    </div>
  )
}

export default ImageGrid