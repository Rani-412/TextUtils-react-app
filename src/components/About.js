import React from 'react';

export default function About({ isDarkMode }) {

  // Define styles for light and dark modes
  const lightStyle = {
    color: 'black',
    backgroundColor: 'white'
  };

  const darkStyle = {
    color: 'white',
    backgroundColor: '#040b38', // Same color as body in dark mode
    border: '1px solid white'
  };

  const currentStyle = isDarkMode ? darkStyle : lightStyle;

  return (
    <div className="container" style={currentStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button" style={currentStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={currentStyle}>
              <strong>TextUtil is a simple tool or application that allows users to manipulate and transform text.</strong> TextUtils is a user-friendly and versatile tool designed to help users perform a wide variety of text manipulations and transformations quickly and easily.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={currentStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features of TextUtils
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={currentStyle}>
              <strong>TextUtils offers several essential features, making text editing and formatting easier for users.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={currentStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Use TextUtils
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={currentStyle}>
              <strong>TextUtils is an invaluable tool for anyone who deals with text on a regular basis.</strong> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
