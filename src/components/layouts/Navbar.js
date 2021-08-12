import React, { Component } from 'react';
import './navbar.css';

// import { FaGithub } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Navbar extends Component {
    render() {
      const icon = <FontAwesomeIcon icon={faGithub} className='github' />;
    return (
        <div className='nav'>
            <nav>
                <h1>
                    {icon} {this.props.logo}
                </h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Version</li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
