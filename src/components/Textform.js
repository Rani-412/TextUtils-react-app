import React,{useState} from 'react';


export default function Textform(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);//update text when the button is clicked
    props.showAlert("Text converted to uppercase", "success");
  };
  const handleLowClick=()=>{
    console.log("Lowercasecase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);//update text when the button is clicked
    props.showAlert("Text converted to lowercase", "success");
  };
  const handleClearClick=()=>{
    console.log("Clearclick was clicked " + text);
    let newText = "";
    setText(newText);//update text when the button is clicked
    props.showAlert("Text get clear", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    //alert("Text copied to clipboard!");
    props.showAlert("Text is copied to clipboard", "success");
};

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);  //update text when the user types
  };
   // New states to manage focus and text input
  const handleFocus = () => {
    if (text === "Enter text here") {
      setText("");
    }
  };

  const handleBlur = () => {
    if (text.trim() === "") {
      setText("Enter text here");
    }
  };

  const[text, setText]=useState("Enter text here"); //initialize state
  //setText("new text");
  // Function to count words correctly
const countWords = (text) => {
  // Split the text by spaces, then filter out any empty strings
  return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
};
  return (
    <>
    <div className ="container">
      <h1 className='mb-4'>{props.Heading}</h1>
      <div className="mb-3">
        <textarea 
        className="form-control" 
        value={text}
        onChange={handleOnChange} //Updated the text when user types
        onFocus={handleFocus}  // Remove placeholder text on focus
        onBlur={handleBlur}    // Add placeholder text back on blur if empty
        id="myText" rows="9"
        ></textarea>
        
</div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 "onClick={handleUpClick}>Convert to Uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleLowClick}>Convert to Lowercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleClearClick}>Clear Text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleCopyClick}>Copy to Clipboard</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{countWords(text)} words and {text.length} characters</p>
      <p>{0.008 * countWords(text)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
rfc
