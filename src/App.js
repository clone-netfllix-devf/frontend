import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {example,getMovies,getMovie,createMovie} from './services'

class App extends Component {


  login = ()=>{
    example().then((resp) => {
      console.log(resp.data.token);
      localStorage.setItem('token',resp.data.token)
    }).catch((err) => {
      console.log(err)
  })
  }

  allMovies = () =>{
    getMovies().then((resp)=>{
      console.log(resp.data.data.allMovies)
    }).catch((err) => {
      console.log(err)
    })
  }


  singleMovie = () =>{
    getMovie().then((resp)=>{
      console.log(resp.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  createMovie = () => {
    let data = {name:"El padrino",
    image:"saasdasdasd",
    synopsis:"sadsadsadasdasdsadasd",
    year:1980,
    director:"Un fulano",
    rank:4,
    premium:false,
    language:"spanish",
    url:"asdhalsjdlasjdklaskjd",
    duration:"123",}
    createMovie(data).then((resp) => {
      console.log(resp)
    }).catch((err) => {
      console.log(err)

    })

  }
  render() {
    return (
      <div className="App">

      <button onClick={this.login}>Login</button>
      <div>
        <button onClick={this.allMovies} >AllMovies </button>
      </div>

      <div>
        <button onClick={this.singleMovie} >singleMovie </button>
      </div>

      <div>
        <button onClick={this.createMovie} >create Movie </button>
      </div>

      </div>
    );
  }
}

export default App;
