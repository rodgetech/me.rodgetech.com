import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, GitHub, Users, Code, Youtube } from "react-feather"

import { NavbarElement, NavbarList, NavbarLogo } from "./style"

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <div className="main-navigation">
          <NavbarList>
            <li>
              <Link to="/" className="lined-link" activeClassName="active">
                {" "}
                <User /> <span> About </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/repositories"
                className="lined-link"
                activeClassName="active"
              >
                {" "}
                <GitHub /> <span> Github </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/works" className="lined-link" activeClassName="active">
                {" "}
                <Briefcase /> <span> Portfolio </span>{" "}
              </Link>
            </li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
