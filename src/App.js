import React from 'react';
import Header from './Header';
import Info from './Info';
import Photo from './Photo';
import './style2.css';
import video from './video 1.mp4';


// Refactor

// 1. Make sure the Datepicker component is fine (done)
// 2. Photo component wont have data fetching code. Only render stuff
// 3. Merge Photo and Info. Again, no fetching.
// 4. App() will be a class component with, state, fetching and Datepicker methods

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
