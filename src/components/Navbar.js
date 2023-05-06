import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const toggleColor = (color) => {
    if (color === 'green') {
      document.body.style.backgroundColor = '#157347';
    }
    else if (color === 'blue') {
      document.body.style.backgroundColor = '#06456b';
    }
    else if (color === 'red') {
      document.body.style.backgroundColor = '#bb2d3b';
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div className="container-fluid">
        <span className="navbar-brand" href="/">
          {props.title}
        </span>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>{props.aboutText}</Link>
            </li>
          </ul>

          {props.theme === 'dark' ? <div class="btn-group mx-3" role="group">
            <button type="button" onClick={() => toggleColor('blue')} className="btn btn-lg btn-primary" />
            <button type="button" onClick={() => toggleColor('green')} className="btn btn-lg btn-success" />
            <button type="button" onClick={() => toggleColor('red')} className="btn btn-lg btn-danger" />
          </div>
            : null}

          <div className={`form-check form-switch text-${props.theme === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title here",
  aboutText: "about text here"
}