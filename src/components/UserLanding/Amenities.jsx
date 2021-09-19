import React from 'react'
// import { SRLWrapper } from "simple-react-lightbox";
// import house from "../../images/house.png"

import * as AmenitiesStyles from "./Amenities.module.scss"

export default function Amenities() {
  return (
    <div className={AmenitiesStyles.amenities}>
      <h2>- Amenities -</h2>
      <div className={AmenitiesStyles.list}>
        <ul>
          <li>Amenity #1</li>
          <li>Amenity #2</li>
          <li>Amenity #3</li>
          <li>Amenity #4</li>
          <li>Amenity #5</li>
          <li>Amenity #6</li>
          <li>Amenity #7</li>
          <li>Amenity #8</li>
          <li>Amenity #9</li>
        </ul>
      </div>
      <div className={AmenitiesStyles.lightbox}>
        {/* <SRLWrapper>
          <img src={house} />
          <img src={house} />
          <img src={house} />
        </SRLWrapper> */}
      </div>
    </div>
  )
}
