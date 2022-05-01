import React, { useState } from 'react';
import Header from './Header';
import Info from './Info';
import Photo from './Photo';
import './style2.css';
import video from './video 1.mp4';


// State and stuff goes here...

// 1. Header JSX in lieu of component in App(). Also <DateInput />
// 2. Main will have <video> & <Info />
// 3. Make sure styling and fetching are properlly working

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
