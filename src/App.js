import React from 'react';
import Header from './Header';
import './style.css';

//V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8

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
          photo: content.url
        })

      })
    console.log(url)
  }


  render() {
    return(
      <div className="app">
        <Header />
        <div className="photo-container">
          <img src={this.state.photo} className="photo" />
        </div>
      </div>
    )
  }

}

export default App;
