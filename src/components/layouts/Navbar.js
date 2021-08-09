import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className='nav'>
            <nav>
                <h1>Github Finder</h1>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 1</li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
