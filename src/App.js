import LoginPage from "./components/Login/LoginPage";
import React, { useState ,createContext, useEffect} from 'react';
import NavBar from "./components/Navigationbar/NavBar";
import SignUpPage from "./components/SignUp/SignUpPage";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 


function App() {
  const[isLogged,setLogged]=useState('')
  const changeLogged=(option)=>{
    setLogged(option)
  }
  return (
    <div className="App">
     
      <NavBar isLogged={isLogged} setLogged={setLogged}/>
      
      
      
    </div>
  );
}

export default App;
