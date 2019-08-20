import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/login">Login</Link>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </header>
    </div>
  );
}

export default App;
