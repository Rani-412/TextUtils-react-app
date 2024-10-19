import React, { useState } from "react";

export default function About() {
    const [myStyle,setMyStyle ] = useState({

        color:'black',
        backgroundColor:'white'

    })
    const [btntext, setBtnText] = useState("Enable dark mode")
    
   const toggleStyle=()=>{
       if( myStyle.color==='black'){
setMyStyle({
    

        color:'white',
        backgroundColor:'black',
        border:'1px solid white'

    

})
setBtnText("Enable light mode")
       }
       else{
        setMyStyle({
    

            color:'black',
            backgroundColor:'white'
    
        
    
    })
    setBtnText("Enable dark mode")

       }
    }
    
  return (
    
      <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"style={myStyle}
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
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtil is a simple tool or application that allows users to manipulate and transform text. </strong> TextUtils is a user-friendly and versatile tool designed to help users perform a wide variety of text manipulations and transformations quickly and easily. Whether you're dealing with large amounts of text or just a few lines, TextUtils provides a range of features that make text editing simpler and more efficient. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"style={myStyle}
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
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is a powerful and efficient text manipulation tool that offers several essential features, making text editing and formatting easier for users.</strong> 
               One of its standout features is uppercase conversion, which allows users to quickly convert any text into all capital letters. 
              In addition, TextUtils offers a lowercase conversion feature, enabling users to change all characters in a text block to lowercase. 
              Another key feature is the ability to copy text to the clipboard with ease.Additionally, TextUtils provides a clear text option, which allows users to instantly erase the entire text from the input field with a single action. This feature is particularly useful when users need to start over with a new text entry or clear out irrelevant content. By providing a quick way to reset the text field, users can easily switch tasks without any hassle.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"style={myStyle}
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
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is an invaluable tool for anyone who deals with text on a regular basis.</strong> There are many compelling reasons to use TextUtils,
               whether you're a professional, student, writer, or anyone who frequently works with text. 
               The tool is designed to streamline text manipulation tasks,
               making it incredibly efficient and easy to format, clean, and transform text.
               
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle}type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
