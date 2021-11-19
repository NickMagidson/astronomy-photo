import React from 'react';
import Header from './Header';
import Info from './Info';
import './style.css';
import video from './video 1.mp4';

// V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8

// https://api.nasa.gov/planetary/apod?api_key=V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: []
    }
  };


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



  // variable for this.state.photo
  // window.open (var, )


  render() {
    return(
      <div className="app">
        <Header />
        <div className="main">
        <video className="bgVideo" autoPlay loop muted id="video">
          <source src={video} type='video/mp4'></source>
        </video>
          <div className="info-container">
            <Info />
          </div>
          <div className="photo-container">
            <a href={this.state.photo} target="_blank"><img src={this.state.photo} className="photo" alt="Astronomy Picture of the" /></a>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
