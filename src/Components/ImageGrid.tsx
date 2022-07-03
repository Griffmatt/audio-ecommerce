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

    console.log(images)
  return (
    <div className="gridImages">
        <img src={images.first.desktop} />
        <img src={images.second.desktop} />
        <img src={images.third.desktop} className="largeGridImage"/>
    </div>
  )
}

export default ImageGrid