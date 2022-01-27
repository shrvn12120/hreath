import React, { useState } from "react";
import { Link } from "react-scroll";
// import logo from "./images/logo.png";
import "./Navbar.css";
import "./Hamburger.css";

const Navbar = () => {


  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
      setClick(false);
      handleToggle()
  }
  
  
  return (
    <div className="header">
      <nav className="navbar">
      <h2  className="logo">LOGO</h2>
        <a href="/" className="logo">
          {/* <img src={logo} alt="logo" /> */}
          
        </a>
        <div className="hamburger" onClick={handleClick}>
        <div
            onClick={handleToggle}
            className={`hamburglar ${isActive ? "is-closed" : "is-open"}
            }`}
          >
            <div className="burger-icon">
              <div className="burger-container">
                <span className="burger-bun-top"></span>
                <span className="burger-filling"></span>
                <span className="burger-bun-bot"></span>
              </div>
            </div>

            {/* svg ring containter  */}
            <div className="burger-ring">
              <svg className="svg-ring">
                <path
                  className="path"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
                />
              </svg>
            </div>
            {/*  the masked path that animates the fill to the ring  */}

            <svg width="0" height="0">
              <mask id="mask">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#ff0000"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
                />
              </mask>
            </svg>
            <div className="path-burger">
              <div className="animate-path">
                <div className="path-rotation"></div>
              </div>
            </div>
          </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="island"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
              onClick={closeMenu}
            >
              Island
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="explore"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
              onClick={closeMenu}
            >
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="rooms"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Dining
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
