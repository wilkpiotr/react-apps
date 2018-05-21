import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import LikeMovies from './components/LikeMovies/LikeMovies';
import Articles from './components/Articles/Articles';
import MoreImages from './components/MoreImages/MoreImages';
import Users from './components/Users/Users';

class App extends Component {
  render() {
    return (<Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LikeMovies />
        <Articles />
        <MoreImages />
        <Users />
      </div>
      <div className="project">
      {/* LOADER FOR ALL */}
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
          <div className="loading-text">Loading</div>
        </div> 
      {/* LOADER FOR ALL */}
      </div>
    </Fragment> 
    );
  }
}

export default App;
