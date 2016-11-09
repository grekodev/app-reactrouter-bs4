import React, { Component } from 'react';
import {Link, IndexLink } from 'react-router';
import '../index.css';

const ACTIVE = { color: 'red'}

export default class Header extends Component {
    constructor(props){
        super(props);
    }
  render() {    
    return (
<nav className="navbar navbar-fixed-top navbar-light bg-faded">
<button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
  <div className="collapse navbar-toggleable-xs" id="navbarResponsive">
  <IndexLink to="/" activeStyle={ACTIVE} className="navbar-brand"><div title="Home" className="brand"/>Brand</IndexLink>      
    <div className="nav navbar-nav">
      <Link to="/homepage" className="nav-item nav-link" activeStyle={ACTIVE}>Home</Link>
      <Link to="/aboutpage" className="nav-item nav-link" activeStyle={ACTIVE}>About</Link>
      <Link to="/contactpage" className="nav-item nav-link" activeStyle={ACTIVE}>Contact</Link>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="responsiveNavbarDropdown">
          <Link className="dropdown-item" to="/helppage" activeStyle={ACTIVE}>Help</Link>
        </div>
      </li>
    </div>    
  </div>
</nav>
    );
  }
}