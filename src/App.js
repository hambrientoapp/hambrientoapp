import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact} />
      </Switch>
    </Router> 
  )
}

export default App