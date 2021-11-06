import React from 'react'
import '../../App.css'
import { useState } from "react";
import useSignUpForm from '../useSignUpForm'
import validateInfoSignUp from '../validateInfoSignUp';
import './SignUp.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';


function SignUp() {
    const { handleChange, values, handleSubmit, errors } = useSignUpForm(validateInfoSignUp);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [usertype, setUserType] = useState("");
    const [usernamereg, setUserName] = useState("");
    const [usermailreg, setUserMail] = useState("");
    const [userpasswordreg, setUserPassword] = useState("");
   
    function redirect() {
        if(usertype==='student' || usertype==='Student')
        {window.location.href = "/editstudentinfo";}
        else
        {window.location.href = "/edituniinfo";}
    }

    const register = () => {
        localStorage.setItem('usermail', usermailreg);
        localStorage.setItem('usertype', usertype);

        Axios.post('http://localhost:3001/', {
            username: usernamereg,
            //usertype: values.usertype,
            usertype: usertype,
            password: userpasswordreg,
            email: usermailreg
        }).then((response) => {
            localStorage.setItem('usermail', usermailreg);
            localStorage.setItem('usertype', usertype);
            console.log(response);
        })
    };

    const insertUser = () =>{
        Axios.post('http://localhost:3001/insert',{
              Usertype: usertype,
              username: usernamereg,
              Email: usermailreg}).then((response)=>{
                localStorage.setItem('usermail', usermailreg);
                localStorage.setItem('usertype', usertype);
                  console.log(response);
              })   
      };


    return (
        <div className='container'>
            <div className='signup-content'>
                <form action='/' method="POST" className='signupform' onSubmit={(e) => { 
                    localStorage.setItem('usermail', usermailreg);
                    localStorage.setItem('usertype', usertype);
                    handleSubmit(e, usertype); 
                    register();
                     insertUser(); 
                     redirect(); }}>
                    <h1>
                        Join us by filling the information below!
                    </h1>
                    <div className='select'>
                        <select className='usertype'
                            onChange={(e) => {
                                //const selectedState = e.target.value;
                                setUserType(e.target.value);
                                handleChange(e);
                                console.log(e.target.value);
                                console.log("real " + usertype);
                            }}>
                            <option value='Choose User Type'>Choose User Type</option>
                            <option value='Student'>Student</option>
                            <option value='University-Admin'>University-Admin</option>
                        </select>
                        {errors.usertype && <p>{errors.usertype}</p>}
                    </div>
                    <div className='signupinputs'>
                        <label htmlFor='username'
                            className='form-label'>
                            User-Name
                        </label>
                        <input id='username' type='text'
                            name='username'
                            className='signupinput'
                            placeholder='Enter your username'
                            value={values.username}
                            onChange={(e) => {
                                const selectedState = e.target.value;
                                setUserName(selectedState);
                                handleChange(e);
                            }} />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className='signupinputs'>
                        <label htmlFor='email'
                            className='form-label'>
                            Email
                        </label>
                        <input id='email' type='email'
                            name='email'
                            className='signupinput'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={(e) => {
                                const selectedState = e.target.value;
                                setUserMail(selectedState);
                                handleChange(e);
                            }}></input>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='signupinputs'>
                        <label htmlFor='password'
                            className='form-label'>
                            Password
                        </label>
                        <input id='password' type='password'
                            name='password'
                            className='signupinput'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={(e) => {
                                const selectedState = e.target.value;
                                setUserPassword(selectedState);
                                handleChange(e);
                            }}></input>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='signupinputs'>
                        <label htmlFor='password2'
                            className='form-label'>
                            Confirm Password
                        </label>
                        <input id='password2' type='password'
                            name='password2'
                            className='signupinput'
                            placeholder='Confirm password'
                            value={values.upassword2}
                            onChange={handleChange}></input>
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>

                    <button className='signup-input-btn' type='submit'>SIGN UP</button>
                    <span className='go-to-login'>Already a member? <a href='/login'>Login here</a></span>
                </form>
            </div>
        </div>
    )
}

export default SignUp