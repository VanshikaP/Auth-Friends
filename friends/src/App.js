import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { PrivateRoute } from './utils/axiosWithAuth'

import Login from './components/Login'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h2>Lambda Friends</h2>
        <nav>
          <Link to='/'>Log In</Link>
          {/* <Link to='/friends'>Friends</Link> */}
        </nav>
      </header>
      <Switch>
      <Route exact path='/' component={Login} />
      {/* <PrivateRoute exact path='/friends' component={FriendsList} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
