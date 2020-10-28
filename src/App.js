import React from 'react';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Email from './components/Email';

function App() {
  return (
    <Router>
        <Route path="/" exact component= {Home} />
        <Route path="/email" exact component= {Email} />
    </Router>

  );
}

export default App;
