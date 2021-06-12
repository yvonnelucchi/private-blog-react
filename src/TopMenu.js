import React from "react";
import { NavLink } from "react-router-dom";

export default function TopMenu() {
    return (
    <>
      <nav>
          <div className="nav-container">
              <h4>Blog</h4>

              <ul>
                  <li>
                      <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                  </li>

                  <li>
                      <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                  </li>

                  <li>
                      <NavLink to="/blogposts" exact activeClassName="active-link">Blog overzicht</NavLink>
                  </li>

                  <li>
                      <NavLink to="/blog/id" exact activeClassName="active-link"> Blogpost </NavLink>
                  </li>

              </ul>
          </div>
      </nav>
    </>
    );
}