import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Gallery() {
  const [collections, setCollections] = useState()

// pull in collections from strapi\
useEffect(() => {
  const fetchImages = async () => {
    try {
      const res = await axios.get('/image-collections/');
      console.log(res.data);
    } catch(e) {
      console.log(e.respnse);
    }
  }
  fetchImages()
}, [])
// map each collection into lightbox

// useEffect(() => {
//   console.log(collections);
// }, [collections])
  const galleryCollections = collections?.map(collection => {

    // <>
    //   <SRLWrapper>

    //   </SRLWrapper>
    // </>
  })

  return (
    <>
      <h2>Gallery</h2>
      {galleryCollections}
    </>
  )
}