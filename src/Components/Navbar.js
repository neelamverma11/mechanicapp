import React from "react";
import { NavLink } from "react-router-dom";
import { FaAsymmetrik } from "react-icons/fa";
import { trolleys } from "./Material/Trolleys";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top bg-gradient navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/about/">
            <FaAsymmetrik className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/about"
                >
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle hover-me"
                  to="/material/"
                  id="DropdownMenuLink"
                  data-bs-toggle="dropdown"
                >
                  Material Handling
                </NavLink>
                <ul
                  className="dropdown-menu sub-menu-2 "
                  aria-labelledby="DropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/material/trolleys/">
                      industrial Trolleys
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/material/pallet/">
                      Pallet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/material/gratings/">
                      Gratings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/material/handrails/"
                    >
                      Handrails & Stairs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/material/conveyors/"
                    >
                      Conveyors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/material/ladders/">
                      Ladders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/material/engineering/"
                    >
                      Engineering Fabrication
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/material/industrial/"
                    >
                      Industrial Lifting Equipment
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/careers"
                >
                  Careers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/vendors"
                >
                  Vendors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
