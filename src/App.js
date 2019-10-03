import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import {
//   Navbar, Nav
// } from 'react-bootstrap'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Contribution from "./pages/Contribution";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Evaluate from "./components/Evaluate";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/contribution" component={Contribution} />
        <Route path="/evaluate" component={Evaluate} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
