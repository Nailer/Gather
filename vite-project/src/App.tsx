import { Link, BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom"
import React from "react"
import './App.css'
import Home from "./Components/Home";
import Booking from "./Components/Booking";

function App () {
  return (
    <div>
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
