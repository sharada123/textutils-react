//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  let [mode,setMode]=useState('light')
  // let [btnColor,setBtnColor]=useState('primary')
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#22223B";
      showAlert("The Dark mode has been enabled",'success');
      // document.title="TextUtils-Dark Mode";
   }  else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("The Light mode has been enabled",'success');
      // document.title="TextUtils-Light Mode";
    }
  }
   const customeToggleMode=()=>{
     let radiobtn=document.querySelector('input[name="bgcolor"]:checked')
     if (radiobtn){
        if(radiobtn.value === 'pink'){
          setMode('dark')
          document.body.style.backgroundColor="pink"
          // setBtnColor('warning')
          showAlert("The Blue mode has been enabled",'success');
        }else{
          setMode('dark')
          document.body.style.backgroundColor="purple"
          // setBtnColor('info')
          showAlert("The Purple mode has been enabled",'success');
          
        }
     }
    
   }
  return (
    <>
    {/* <Navbar/>
   <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
   <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} customeToggleMode={customeToggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      {/* instead of pathexact path for exact matching path */}
          <Route extact path="/about" element={<About mode={mode} />}>
          </Route>
           <Route extact path="/" element={<TextForm heading=" Try TextUtils-Word Counter,Character Counter,Remove Extra Spaces" mode={mode} showAlert={showAlert} />}>
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */} 
          </Route> 
         </Routes> 
        {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
    </div>
    </Router>
    </>
    
  );
}

export default App;
