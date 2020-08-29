import React from 'react';
// import './App.css'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Posts from './component/Post';
import Login from './component/LogIn';
import Register from './component/Register';

function App() {
  return (
    <Router>
    <div className="App-container">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path= '/login' component={Login} />
        <Route exact path= '/register' component={Register} />
        <Route exact path='/:post_id' component={Posts} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
