import React from "react";
import { Link } from "react-router-dom";
import { FaAsymmetrik } from "react-icons/fa";
import { trolleys } from "./Material/Trolleys";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top bg-gradient navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid" style={{ marginRight: '85px' }}>
          <Link className="navbar-brand" to="/about/">
            <FaAsymmetrik className="logo" style={{ marginLeft: '60px' }} />
          </Link>
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
                <Link
                  activeClassName="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/about"
                >
                  AboutUs
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle hover-me"
                  to="/material/"
                  id="DropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"
                  role="button"
                >
                  Material Handling
                </Link>

                <div
                  className="dropdown-menu sub-menu-2 "
                  aria-labelledby="DropdownMenuLink"
                >

                  <Link className="dropdown-item" to="/material/trolleys/">
                    industrial Trolleys
                  </Link>

                  <Link className="dropdown-item" to="/material/pallet/">
                    Pallet
                  </Link>

                  <Link className="dropdown-item" to="/material/gratings/">
                    Gratings
                  </Link>

                  <Link
                    className="dropdown-item"
                    to="/material/handrails/"
                  >
                    Handrails & Stairs
                  </Link>

                  <Link
                    className="dropdown-item"
                    to="/material/conveyors/"
                  >
                    Conveyors
                  </Link>

                  <Link className="dropdown-item" to="/material/ladders/">
                    Ladders
                  </Link>

                  <Link
                    className="dropdown-item"
                    to="/material/engineering/"
                  >
                    Engineering Fabrication
                  </Link>

                  <Link
                    className="dropdown-item"
                    to="/material/industrial/"
                  >
                    Industrial Lifting Equipment
                  </Link>

                </div>
              </li>


              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/vendors"
                >
                  Vendors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
