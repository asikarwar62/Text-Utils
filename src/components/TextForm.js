import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Change To Uppercase","success");
  }

  const handleLoClick = () =>{
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Change To Lowercase","success");
  }

  const clearText = () =>{
    
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text","success");
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  
  return (<>
    <div className="conatiner my-3" style = {{color : props.mode === "dark"?"white":"black"}}>
      
      <div className="mb-3" >
          <h2>{props.heading}</h2>
          <label for="txtBox" className="form-label">Example textarea</label>
          <textarea className="form-control" id="txtBox" value={text}  onChange={handleOnChange} style = {{color : props.mode === "dark"?"white":"black", backgroundColor: props.mode === "dark"? "#091e2c ":"white"}} rows="8"></textarea>
          <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Change to uppercase</button>
          
          <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Change to lowercase</button>
          <button className="btn btn-primary mx-2"  onClick={clearText}>Clear Text</button>
          

      </div>
      <div className="container my-3">
          <h1>Text summary</h1>
          <p>{text.length} charaters {text.split(" ").length} words</p>
          <p>  {0.008 * text.split(" ").length} message read</p>
          
          <h2>Preview</h2>
          <p>{text.length>0 ? text: "Enter something to preview"}</p>

      </div>   
    </div>
    </>
  )
}
