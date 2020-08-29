import React, { useState } from 'react';
// import './App.css'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Posts from './component/Post';
import Login from './component/LogIn';
import Register from './component/Register';

function App() {
  let initState = {
    users: [],
    isLoggedIn: false
  };
  const registerUser = user => {
    state.users.push(user);
    setState({ ...state });
  };
  const loginUser = user => {

  }
  const [state, setState] = useState(initState);
  return (
    <Router>
      <div className="App-container">
        <Navbar />

        <Switch>
          <Route exact path='/' children={props => <Home {...props} {...state} />} />
          <Route exact path='/about' children={props => <About {...props} {...state} />} />
          <Route exact path='/contact' children={props => <Contact {...props} {...state} />} />
          <Route exact path='/login' children={props => <Login {...props} {...state} />} />
          <Route exact path='/register' children={props => <Register {...props} {...state} registerUser={registerUser} />} />
          <Route exact path='/:post_id' children={props => <Posts {...props} {...state} />} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
