import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", 'success')
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", 'success')
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", 'success')
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text coppied!", 'success')
  }

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", 'Success')
  }

  return (
    <>
      <div className="container my-3" style={{ color: props.theme === 'light' ? 'black' : 'white' }} >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.theme === 'light' ? 'white' : 'black',
              color: props.theme === 'light' ? 'black' : 'white'
            }}
            onChange={handleOnChange}

          />
        </div>
        <button className={`btn btn-${props.theme === 'light' ? 'dark' : 'light'} m-1`} onClick={handleUpClick}>Convert to uppercase</button>
        <button className={`btn btn-${props.theme === 'light' ? 'dark' : 'light'} m-1`} onClick={handleLoClick}>Convert to lowercase</button>
        <button className={`btn btn-${props.theme === 'light' ? 'dark' : 'light'} m-1`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.theme === 'light' ? 'dark' : 'light'} m-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.theme === 'light' ? 'dark' : 'light'} m-1`} onClick={handleRemoveExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
        <h2>Your text summary:</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters. <br />
          {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here!"}</p>
      </div>
    </>
  );
}
