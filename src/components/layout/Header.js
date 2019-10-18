import React from "react";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <div className="brand-logo topHeader">
            <i className="material-icons">assignment</i>Task Manager
          </div>
          <ul className="right hide-on-med-and-down topHeader">
            <li>
              <div className="waves-effect lime accent-2 black-text waves-dark btn">
                Login
              </div>
            </li>
            <li>
              <i className="material-icons">more_vert</i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
