import React, { Component } from "react";
import './style.css'

class Photo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photo: []
          }
    }

    componentDidMount() {
        let url = 'https://api.nasa.gov/planetary/apod?api_key=V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
        fetch(url) 
          .then(response => response.json())
          .then(content => {
            this.setState({
              photo: content.hdurl
            })
    
          })
        console.log(url)
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