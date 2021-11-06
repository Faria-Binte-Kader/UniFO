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
import EditDeptInfo from './Components/pages/EditDeptInfo';
import AddDept from './Components/pages/AddDept';
import EditStudentInfo from './Components/pages/EditStudentInfo';
import Departmentdetails from './Components/pages/Departmentdetails';
import HomeUniversity from './Components/pages/HomeUniversity';
import HomeStudent from './Components/pages/HomeStudent';
import HomeUser from './Components/pages/HomeUser';
import UniProfileScreen from './Components/pages/UniProfileScreen';
import NoticeDetails from './Components/pages/NoticeDetails';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/homeuser' component={ HomeUser}/>
       <Route path='/homeuniversity' component={ HomeUniversity}/>
       <Route path='/homestudent' exact component={ HomeStudent}/>
        <Route path='/unilist' component={UniList}/>
        <Route path='/aboutus' component={AboutUs}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/uniprofile' component={UniProfile}/>
        <Route path='/edituniinfo' component={EditUniInfo}/>
        <Route path='/editdeptinfo' component={EditDeptInfo}/>
        <Route path='/adddeptinfo' component={AddDept}/>
        <Route path='/editstudentinfo' component={EditStudentInfo}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/departmentdetails' component={Departmentdetails}/>
        <Route path='/noticedetails' component={NoticeDetails}/>
        <Route path='/uniprofilescreen' component={UniProfileScreen}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
