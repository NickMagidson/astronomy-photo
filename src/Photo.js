import React, { useEffect, useState } from "react";
import './style2.css'

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function Photo() {
  let [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(content => setPhoto(content.hdurl))
  }, [])


  return (
    <div className="photo-container">
      <a href={photo} target="_blank"><img src={photo} className="photo" alt="Astronomy Picture of the" /></a>
    </div>
  )
}

export default Photo;