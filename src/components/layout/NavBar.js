import React from "react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <FaGithub />
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
NavBar.defaultProps = {
  title: "GitHub Finder",
};
//to set the data type of the prop being passed in
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default NavBar;
