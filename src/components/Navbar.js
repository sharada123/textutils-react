import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          <input
            className="form-check-input"
            type="radio"
            value="pink"
            name="bgcolor"
            id="blue"
            onChange={props.customeToggleMode}
          />
          <label
            className="form-check-label"
            htmlFor="blue"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Pink Mode
          </label>
          <input
            className="form-check-input"
            type="radio"
            value="purple"
            name="bgcolor"
            id="purple"
            onChange={props.customeToggleMode}
          />
          <label
            className="form-check-label"
            htmlFor="purple"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Purple Mode
          </label>

          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title here",
  aboutText: "About",
};
