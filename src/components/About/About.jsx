import React from "react"
import MapContainer from "./MapContainer"
import "./About.scss"

export default function About() {

  return (
    <>
      <div className="about-farm">
        <h2>About The Farm</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam. Tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Dolor sed viverra ipsum nunc aliquet pretium vulputate sapien nec sagittis.
      </div>
      <div className="about-project">
        <h2>About The Project</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam. Tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Dolor sed viverra ipsum nunc aliquet pretium vulputate sapien nec sagittis.
      </div>
      <div className="contact-location">
        <div className="contact-location_text">
          <h2>Contact/Location</h2>
          <p>Address: 1597 Queens Line #474, Minden, ON K0M 2K0</p>
          <p>Phone contact: 1234567890</p>
          <p>Email contact: <a href="mailto:contact@clearglade.com">contact@clearglade.come</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam. Tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna.</p>
        </div>
        <MapContainer/>
      </div>
    </>
  )
}
