import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header header-fixed">
          <div className="navbar container">
            <div className="logo">
              <Link to="/">Hawk</Link>
            </div>
            <label htmlFor="navbar-toggle">
              <i />
            </label>
            <nav className="menu">
              <ul>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li><NavLink to="/register">
                  Register
                </NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
