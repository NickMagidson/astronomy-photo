import React, { Component } from "react";
import './style2.css'

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
        photo: []
      }
  }

  componentDidMount() {
  fetch(API_URL) 
    .then(response => response.json())
    .then(content => {
      this.setState({
        photo: content.hdurl
      })
    })
  }

  render() {
    return(
      <div className="photo-container">
      <a href={this.state.photo} target="_blank"><img src={this.state.photo} className="photo" alt="Astronomy Picture of the" /></a>
    </div>
    )
  }
}

export default Photo;