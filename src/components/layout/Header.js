import React from "react";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <a href="#!" className="brand-logo">
            <i className="material-icons">check_circle_outline</i>Task Manager
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
            <a class="waves-effect amber darken-2 waves-light btn">Login</a>
            </li>
            <li>
              <a href="badges.html">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li>
              <a href="collapsible.html">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li>
              <a href="mobile.html">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
