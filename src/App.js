import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Navbar, Nav
} from 'react-bootstrap'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact} />
      </Switch>

      <Footer />
    </Router> 
  )
}

export default App