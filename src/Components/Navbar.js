import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>{props.title}</b>
          </Link>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  {props.title2}
                </Link>
              </li>
            </ul>

            {/* Mode Buttons */}
            <div className="d-flex">
              <button
                className="btn btn-light mx-1"
                onClick={() => props.toggleMode("light")}
              >
                Light
              </button>

              <button
                className="btn btn-dark mx-1"
                onClick={() => props.toggleMode("dark")}
              >
                Dark
              </button>

              {/* <button
                className="btn btn-primary mx-1"
                onClick={() => props.toggleMode("blue")}
              >
                Blue
              </button> */}

              <button
                className="btn btn-success mx-1"
                onClick={() => props.toggleMode("green")}
              >
                Green
              </button>

              {/* <button
                className="btn btn-danger mx-1"
                onClick={() => props.toggleMode("red")}
              >
                Red
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Props validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  title2: "About",
};

export default Navbar;
