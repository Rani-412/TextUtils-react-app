import React, { useState  ,useEffect} from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

export default function Navbar({ title = 'Set title here',  showAlert ='alert is show'}) {
  
  // State to handle dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State to handle custom color themes
  const [themeColor, setThemeColor] = useState('#ffffff');

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // Show alert when dark or light mode is enabled
    if (!isDarkMode) {
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils-Dark Mode';
      setThemeColor('#ffffff'); // Reset to white when dark mode is enabled
      //setInterval(() => {
        //document.title='TextUtils is amazing';
      //}, 2000);
      //setInterval(() => {
        //document.title='TextUtils is wow';
      //}, 1500);
    } else {
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils-light Mode';
      setThemeColor('#ffffff'); // Reset to white when light mode is enabled
    }
    
  
  };
  
  // Function to change the color theme
  const changeThemeColor = (color) => {
    if (!isDarkMode) {
      setThemeColor(color); // Only apply theme color if dark mode is not enabled
      showAlert(`Color theme changed to ${color}`, "success");
    } else {
      showAlert("Disable dark mode to change color theme", "warning");
    }
  };
  
  // Apply the selected theme color or dark mode to the entire body
  useEffect(() => {
    if (isDarkMode) {
      // When dark mode is enabled, force the background to a dark color
      document.body.style.backgroundColor = '#040b38'; // Dark color for dark mode
      document.body.style.color = '#e0e0e0'; // Light text color for dark mode
    } else {
      // If dark mode is not enabled, apply the selected theme color
      document.body.style.backgroundColor = themeColor;
      document.body.style.color = '#000000'; // Dark text color for light mode
    }
  }, [themeColor, isDarkMode]);

  return (
    
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="/About">{aboutText}</a>
            </li>*/}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {/* Toggle Button for Dark Mode */}
          <button className="btn btn-outline-secondary ms-3" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        
       {/* Buttons for changing the color theme */}
       <button className="btn btn-danger ms-3" onClick={() => changeThemeColor('#8B0000')}>Red Theme</button>
          <button className="btn btn-primary ms-3" onClick={() => changeThemeColor('#00008B')}>Blue Theme</button>
          <button className="btn btn-success ms-3" onClick={() => changeThemeColor('#006400')}>Green Theme</button>
        </div>
      </div>
    </nav>
    
    
  );
}


Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
