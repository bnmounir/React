import React, { Component } from 'react';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Recipes />
      </div>
    );
  }
}

export default App;
