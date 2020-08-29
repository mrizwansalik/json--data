import React, { useState } from 'react';
// import './App.css'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Posts from './component/Post';
import Login from './component/LogIn';
import Register from './component/Register';

function App(props) {
  let history = useHistory();
  let initState = {
    users: [],
    isLoggedIn: false,
    loggedInUser: {}
  };
  const registerUser = user => {
    let findExistingUser = state.users.find(U => U.email === user.email);
    if (findExistingUser) return alert('User Already register');
    state.users.push(user);
    setState({ ...state });
    history.push("/login");
  };
  const loginUser = user => {
    let findUser = state.users.find(U => U.email === user.email && U.password === user.password);
    if (!findUser) return alert('Invalid Email Or Password');
    setState({ ...state, loggedInUser: user, isLoggedIn: true });
    history.push("/");
  }
  // console.log('history :', history)
  const [state, setState] = useState(initState);
  return (
    <div className="App-container">
      <Navbar />
      <Switch>
        <Route exact path='/' children={props => <Home {...props} {...state} />} />
        <Route exact path='/about' children={props => <About {...props} {...state} />} />
        <Route exact path='/contact' children={props => <Contact {...props} {...state} />} />
        <Route exact path='/login' children={props => <Login {...props} {...state} loginUser={loginUser} />} />
        <Route exact path='/register' children={props => <Register {...props} {...state} registerUser={registerUser} />} />
        <Route exact path='/:post_id' children={props => <Posts {...props} {...state} />} />
      </Switch>

    </div>
  );
}

export default App;
