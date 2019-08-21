import React, {useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
  
        {loggedIn ? <Link to="/secretfriends">View friend list</Link> : <Link to="/login">Login</Link>}
        <Link to="/">Home</Link>

        <Route exact path="/" component={Home} />

        <Route path="/login" render = {props => (
          <Login
            {...props}
            setLoggedIn={setLoggedIn}
          />
        )} />


        <PrivateRoute path="/secretfriends" component={Friends} />
      </header>
    </div>
  );
}

export default App;
