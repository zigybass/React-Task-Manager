import React from "react";
import { Link } from "react-router-dom";
import { SideNav, SideNavItem, Button } from "react-materialize";

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
              {/* <Link to="/login" className="waves-effect lime accent-2 black-text waves-dark btn">
                Login
              </Link> */}
              <Link
                to="/tasks"
                className="waves-effect lime accent-2 black-text waves-dark btn"
              >
                Tasks
              </Link>
              <Link
                to="/deleted"
                className="waves-effect lime accent-2 black-text waves-dark btn"
              >
                Deleted Tasks
              </Link>
            </li>
          </ul>
            <SideNav
              trigger={
                <Button className="lime accent-2 black-text">
                  <i className="material-icons">menu</i>
                </Button>
              }
              options={{ closeOnClick: true }}
            >
              <SideNavItem subheader>Task Manager</SideNavItem>
              <SideNavItem divider />
              <SideNavItem waves href="/tasks">Tasks</SideNavItem>
              <SideNavItem waves href="/deleted">Deleted</SideNavItem>
            </SideNav>
        </div>
      </nav>
    </div>
  );
}

export default Header;
