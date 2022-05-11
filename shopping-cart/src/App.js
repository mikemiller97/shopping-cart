import React from "react"
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Nav from "./Nav"
import Home from "./Home"
import Cart from "./Cart"

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
