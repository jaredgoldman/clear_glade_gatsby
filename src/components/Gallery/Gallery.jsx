import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LightboxElement from "./Lightbox"
import * as styles from './Gallery.module.scss'

export default function Gallery() {
  const [collections, setCollections] = useState()
  const [galleryOpen, setGalleryOpen] = useState()

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

const handleGalleryOpen = (collectionId) => {
  setGalleryOpen(collectionId)
}

  const galleryCollections = collections?.map((collection, i) => {
    const { Description, images, collection_name, id } = collection

    return (
      <LightboxElement 
        galleryOpen={galleryOpen === id ? true : false} 
        setGalleryOpen={setGalleryOpen}
        images={images}
        description={Description}
        key={id}
        collectionName={collection_name}
        handleGalleryOpen={handleGalleryOpen}
        collectionId={id}
      />
    )
  })

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.collections}>
        {galleryCollections}
      </div>
    </div>
  )
}