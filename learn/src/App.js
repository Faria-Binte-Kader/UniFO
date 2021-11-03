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
import UniProfile from './Components/pages/UniProfile';
import EditUniInfo from './Components/pages/EditUniInfo';
import EditStudentInfo from './Components/pages/EditStudentInfo';

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
        <Route path='/uniprofile' component={UniProfile}/>
        <Route path='/edituniinfo' component={EditUniInfo}/>
        <Route path='/editstudentinfo' component={EditStudentInfo}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
