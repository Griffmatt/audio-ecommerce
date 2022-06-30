import React from 'react'

interface ImagesType{
    images: any
}

function ImageGrid({images}: ImagesType) {

    console.log(images)
  return (
    <div className="gridImages">
        <div className="imgGroup">
            <img src={images.first.desktop} />
            <img src={images.second.desktop} />
        </div>
        <img src={images.third.desktop}/>
    </div>
  )
}

export default ImageGrid