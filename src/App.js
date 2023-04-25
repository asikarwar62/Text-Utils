import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
 const [Mode,setMode] = useState("light");
 const [alert,setAlert] = useState(null);
 const showAlert = (message,type) => {
   setAlert({
     msg : message,
     type : type
   })
   setTimeout(() => {
      setAlert(null);
   }, 2000);
 }
 const toggleMode = () => {
    if(Mode==="light"){
       setMode("dark");
       document.body.style.backgroundColor = "#091e2c";
      showAlert("Dark mode is enable","success")
      // document.title = "TextUtils-Home Darkmode";
      // setInterval(() => {
      //   document.title = "TextUtils-Home Amazing";
      // }, 3000);
      // setInterval(() => {
      //   document.title = "TextUtils-Home ";
      // }, 1000);
    }
    else{
       setMode("light");
       document.body.style.backgroundColor = "white";
       showAlert("light mode is enable","success")
       
    }
 }
  return (
 <> 
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About us" mode={Mode} togglemode={toggleMode}/>
    <Alert alert={alert}/>
        <div className="container my-3" >
           {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          <About/>
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analye below" mode={Mode} showAlert={showAlert}/>}/> */}
          <TextForm heading="Enter the text to analye below" mode={Mode} showAlert={showAlert}/>
          {/* </Routes> */}
        </div>
        {/* </Router> */}
    </>
  );
}


export default App;
