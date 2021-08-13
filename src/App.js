import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/layouts/User';

class App extends Component {
  
  render() {
    return (
        <div className='App'>
        <Navbar logo='GitHub Finder' />
        <User />
        </div>
    );
  }
  
}

export default App;