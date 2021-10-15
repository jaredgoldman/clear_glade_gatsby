import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox' 
const URL = process.env.GATSBY_URL

export default function LightboxElement({
  galleryOpen,
  setGalleryOpen,
  description,
  images
}) {
  const imageURLs = images.map(image => `${URL}${image.url}`)
  const [photoIndex, setPhotoIndex] = useState(0)


  const handleCloseGallery = () => {
    setGalleryOpen(false)
  }

  const onMoveNextRequest = () => {
    setPhotoIndex(prevValue => ((prevValue + 1) % imageURLs.length))
  }

  const onMovePrevRequest = () => {
    setPhotoIndex(prevValue => ((prevValue + 1) % imageURLs.length))
  }
  return (
    <>
      <div>{description}</div>
        {galleryOpen &&
          <Lightbox
            mainSrc={imageURLs[photoIndex]}
            nextSrc={imageURLs[(photoIndex + 1) % imageURLs.length]}
            prevSrc={imageURLs[(photoIndex - 1) % imageURLs.length]}
            onCloseRequest={() => handleCloseGallery()}
            onMoveNextRequest={() => onMoveNextRequest()}
            onMovePrevRequest={() => onMovePrevRequest()}
          />
        }
    </>
  )
}
