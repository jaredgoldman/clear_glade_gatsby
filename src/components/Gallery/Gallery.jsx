import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LightboxElement from "./Lightbox"

export default function Gallery() {
  const [collections, setCollections] = useState()
  const [galleryOpen, setGalleryOpen] = useState(false)

// pull in collections from strapi\
useEffect(() => {
  const fetchImages = async () => {
    try {
      const res = await axios.get('/image-collections/');
      setCollections(res.data)
    } catch(e) {
      console.log(e.respnse)
    }
  }
  fetchImages()
}, [])



const handlegalleryOpen = () => {
  setGalleryOpen(true)
}


  const galleryCollections = collections?.map(collection => {
    const { Description, images } = collection
    
    return (
      <LightboxElement 
        galleryOpen={galleryOpen} 
        setGalleryOpen={setGalleryOpen}
        images={images}
        description={Description}
        key={Description}
      />
    )
  })

  return (
    <>
      <h2>Gallery</h2>
      <button
        onClick={() => handlegalleryOpen()}
      >
        Open gallery
      </button>
      {galleryCollections}
    </>
  )
}