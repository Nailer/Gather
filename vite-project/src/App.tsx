import { Link, BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom"
import React from "react"
import './App.css'
import Home from "./Components/Home";
import Order from "./Components/Order";
import Booking from "./Components/Booking";
import Page from "./Components/Page"

function App () {
  return (
    <div>
      <Page />
      
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
