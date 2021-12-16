import React from 'react';
import Header from './Header';
import Info from './Info';
import Photo from './Photo';
import './style.css';
import video from './video 1.mp4';

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


class App extends React.Component {
  constructor(props) {
    super(props)

  };

  render() {
    return(
      <div className="app">
        <Header />
        <main className="main">
          <video className="bgVideo" autoPlay loop muted id="video">
            <source src={video} type='video/mp4'></source>
          </video>
          <Info />
          <Photo />
        </main>
      </div>
    )
  }
}

export default App;
