import React from "react";
import "./CSS/App.css";
import "./CSS/Variables.css";
import "./CSS/NavBar.css";
import "./CSS/Banner.css"

import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home"

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
