import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  let d = Date();
  return (
    <div>
      <navbar className="navbar  navbar-light bg-light">
        <NavLink to="/">
          <img
            className="navImg"
            src="https://cdn.dribbble.com/users/1055986/screenshots/3365762/w-dribbble.gif"
          />
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/Products">
          <h3>W.Products</h3>
        </NavLink>
        <h5>{d}</h5>
      </navbar>
    </div>
  );
}

export default NavBar;
