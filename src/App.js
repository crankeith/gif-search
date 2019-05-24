import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    //=======================
    //FETCH EXAMPLE
    //=======================
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=6xw9fEEGu32KtQ3A67ham0eFXhbNjTTN')
    //     .then( response => response.json())
    //     .then( responseData => {
    //       this.setState({
    //         gifs: responseData.data
    //       })
    //     })
    //     .catch( error => {
    //         console.log('Error fetching and parsing data', error);
    //     })

    //=======================
    //AXIOS EXAMPLE
    //=======================
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=6xw9fEEGu32KtQ3A67ham0eFXhbNjTTN')
        .then(response => {
            this.setState({
                gifs: response.data.data
            })
        })
        .catch( error => {
            console.log('Error fetching and parsing data', error);
        })
  }


    render() {
      const { gifs } = this.state;
        console.log(gifs);
      return (
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">GifSearch</h1>
              <SearchForm />
            </div>
          </div>
          <div className="main-content">
            <GifList data={ gifs } />
          </div>
        </div>
      );
  }
}
