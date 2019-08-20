import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/login">Login</Link>
        <Link to="/secretfriends">View friend list</Link>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/secretfriends" component={Friends} />
      </header>
    </div>
  );
}

export default App;
