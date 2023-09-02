import { Route, Routes } from "react-router-dom"
import React from "react"
import './App.css'
import Home from "./Components/Home";
import Order from "./Components/Order";
import Booking from "./Components/Booking";
import Page from "./Components/Page"

function App () {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}

export default App;
