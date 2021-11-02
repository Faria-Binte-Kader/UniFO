import React from "react";
import useLoginForm from '../useLoginForm'
import {useState} from "react";
import validateInfoLogin from '../validateInfoLogin';
import './Login.css'
import '../../App.js';
import  Axios from "axios";


function Login() {
    const {handleChange, values,handleSubmit, errors} = useLoginForm(validateInfoLogin);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginState, setLoginState] = useState("");

    function redirect()
    {
        window.location.href="/";
    }


    const login = () =>{
        Axios.post('http://localhost:3001/login',{
             password: values.password,
              email: values.email}).then((response)=>{
                  if(response.data.message)
                  { setLoginState(response.data.message)}
                  else
                  { redirect();}
                  //console.log(response.data);
              })   
      };
    return (
    <div className='container'>
       <div className='login-content'>
           <form className='loginform' onSubmit={(e)=>{handleSubmit(e); login();}}>
             <h1>
                 Log in to experience more!
             </h1>
             <div className='logininputs'>
                 <label htmlFor='email'
                 className='form-label'>
                  Email
                 </label>
                 <input id='email' type='email' 
                     name='email' 
                     className='logininput'
                     placeholder='Enter your email'
                     value={values.email}
                     onChange={handleChange}></input>
                     {errors.email && <p>{errors.email}</p>} 
             </div>
             <div className='logininputs'>
                 <label htmlFor='password'
                 className='form-label'>
                  Password
                 </label>
                 <input id='password' type='password' 
                     name='password' 
                     className='logininput'
                     placeholder='Enter your password'
                     value={values.password}
                     onChange={handleChange}></input>
                     {errors.password && <p>{errors.password}</p>} 
             </div>
             <button className='login-input-btn'>LOGIN</button>
             <span className='go-to-signup'>Don't have an account?<a href='/signup'> Sign-up here.</a></span>
           </form>
           <h1 className='loginstat'>{loginState}</h1>
       </div>
       </div>
      
    )
}

export default Login