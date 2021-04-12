import React from "react";
import "./style.css";
import Home from "./Home";
import About from "./About"
import {BrowserRouter as Router,Route} from "react-router-dom";

export default function App() {
  return (
    <div>
    <Router>
    <Route path="/" component={Home}/>
      <About/>
     </Router>
    </div>
  );
}