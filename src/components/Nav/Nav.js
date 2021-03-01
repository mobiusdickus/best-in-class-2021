import React from 'react'

import "./Nav.css";



const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

//console.log(refs);
const nav = React.forwardRef((props, ref) => (

  <div className="nav">
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div className="nav-links">
      <a className="menu__link"
        href="#about"
        style={props.style}>
      about</a>
      <a className="menu__link"
        href="#past-interns"
        style={props.style}>
      intern testimonials</a>
      <a className="menu__link"
        href="#previous-work"
        style={props.style}>
      Previous Work</a>
      <a className="menu__link"
        href="#mentors"
        style={props.style}>
      Program Mentors</a>
      <a className="menu__link"
        href="#apply"
        style={props.style}>
      Submit your project</a>
      <a 
        className="menu__link" 
        href="https://www.superunion.com/join/description/?id=2752618"
        target="_blank"
        style={props.style}
        rel="noreferrer">
        Apply as an intern
      </a>
    </div>
  </div>
));

export default nav;
