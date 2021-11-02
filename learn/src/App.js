import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import UniList from './Components/pages/UniList';
import AboutUs from './Components/pages/AboutUs';
import UserProfile from './Components/pages/UserProfile';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/unilist' component={UniList}/>
        <Route path='/aboutus' component={AboutUs}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
