import React from 'react';
import './Navbar.css';


class Navbar extends React.Component {
  render(){
    return(
      <div className="navbar">

            <h3 className="logo"> TODO LIST</h3>

            <div className="navbar-links">
              <a href="login.html">LOGOUT</a>
            </div>
          </div>
    )
  }

}

export default Navbar;
