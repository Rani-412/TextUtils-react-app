import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  // Correct import

export default function Navbar({ title = 'Set title here', aboutText = 'About text', showAlert = 'alert is show' }) {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState('#ffffff');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';
      setThemeColor('#ffffff');
    } else {
      showAlert("Light mode has been enabled", "success");
      //document.title = 'TextUtils - Light Mode';
      setThemeColor('#ffffff');
    }
  };

  const changeThemeColor = (color) => {
    if (!isDarkMode) {
      setThemeColor(color);
      showAlert(`Color theme changed to ${color}`, "success");
    } else {
      showAlert("Disable dark mode to change color theme", "warning");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#040b38';
      document.body.style.color = '#e0e0e0';
    } else {
      document.body.style.backgroundColor = themeColor;
      document.body.style.color = '#000000';
    }
  }, [themeColor, isDarkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link> {/* Changed link to Link */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* Changed link to Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{aboutText}</Link> {/* Changed link to Link */}
            </li>
          </ul>
          {/*<form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>*/}
          <button className="btn btn-outline-secondary ms-3" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          {/*<button className="btn btn-danger ms-3" onClick={() => changeThemeColor('#8B0000')}>Red Theme</button>
          <button className="btn btn-primary ms-3" onClick={() => changeThemeColor('#00008B')}>Blue Theme</button>
          <button className="btn btn-success ms-3" onClick={() => changeThemeColor('#006400')}>Green Theme</button>*/}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  showAlert: PropTypes.func.isRequired,
};
