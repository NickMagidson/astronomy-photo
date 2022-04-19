import React, { useState } from 'react';
import Header from './Header';
import Info from './Info';
import Photo from './Photo';
import './style2.css';
import video from './video 1.mp4';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <video className="bgVideo" autoPlay loop muted id="video">
          <source src={video} type='video/mp4'></source>
        </video>
        <Photo />
        <Info />
      </main>
    </div>
  )
}

export default App;
