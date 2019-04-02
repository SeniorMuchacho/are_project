import React from "react";
import "./cssComponents/NavBar.css";
import API from '../api/connection'

class NavBarno extends React.Component {
  render() {
    if (API.isAuth() === false) {
      return (
      <div>
        <nav  className="navbar-expand-lg navbar-light bg-light">
        <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" href="/login">Login</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/signup">SignUp</a>
      </li>
      </ul>
      </nav>
      </div> 
      );
    }
    else {
    return (
        <div>
        <nav  className="navbar-expand-lg navbar-light bg-light">
        <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" href="/area">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/deco">deconexion</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/allapi">api</a>
      </li>
      </ul>
      </nav>
      </div>);
    }
  }
}



class NavBar extends React.Component {
    render() {
        return (
          <NavBarno/>
        );
    }
}

export default NavBar;