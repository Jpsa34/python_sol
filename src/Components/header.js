import React from "react";
import pylogo from "./img/pylogo.png";
import customstyle from "./styles/customstyle.module.css";
import { Link } from "react-router-dom";

export const Pyheader = () => {
  return (
    <div className="App">
      <header className={customstyle.header}>
        <div className={customstyle.pylogodiv}>
          <Link link to="/">
            <img className={customstyle.pylogo} src={pylogo}></img>
          </Link>
        </div>
        <div className={customstyle.navbar}>
          <Link className={customstyle.navlink}>
            <a link to>
              SERVICES
            </a>
          </Link>
          <Link className={customstyle.navlink}>
            <a>WORK</a>
          </Link>
          <Link className={customstyle.navlink} link to="/Approach">
            <a>APPROACH</a>
          </Link>
          <Link className={customstyle.navlink}>
            <a>INSIGHTS</a>
          </Link>
          <Link className={customstyle.navlink}>
            <a>COMPANY</a>
          </Link>
          <Link
            className={customstyle.navlink}
            className={customstyle.lastlink}
            link
            to="/Contact"
          >
            <a href="#footer">GET IN TOUCH</a>
          </Link>
        </div>
      </header>
    </div>
  );
};
