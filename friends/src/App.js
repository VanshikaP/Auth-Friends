import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { PrivateRoute } from './components/PrivateRoute'

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h2>Lambda Friends</h2>
        <nav>
          <Link to='/'>Log In</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/addFriend'>Add a Friend</Link>
        </nav>
      </header>
      <Switch>
      <Route exact path='/' component={Login} />
      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute exact path='/addFriend' component={AddFriend} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
