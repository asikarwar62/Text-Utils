import React from 'react';
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';


export default function Navbar(props) {
  return (
    
    <div>
  <nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
    <span className="navbar-hrefggler-icon"></span>
  </buthrefn>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auhref">
      <li className="nav-item active">
        <a className="nav-a" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-a" href="#"> {props.aboutText}</a>
      </li>
    </ul>  
  </div>

     
    
     <div classNameName={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
       <input classNameName="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
       <label classNameName="form-check-label" HtmlFor="flexSwitchCheckDefault">Enable dark mode</label>
     </div>
     </nav>
    </div>
    
  );
}
Navbar.propTypes= {
       title: PropTypes.string.isRequired,
       aboutText: PropTypes.string.isRequired
   }
    
     Navbar.defaultProps = {
       title: 'set title here',
       aboutText: 'set about text here'
    };