import { useState, useEffect } from "react";
import validateInfoSignUp from "./validateInfoSignUp";
import Axios from "axios";
import Home from './pages/Home';

const useSignUpForm = validateInfoSignUp => {
    const type = '';
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        usertype: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function redirect() {
        if(values.usertype==='student' || values.usertype==='Student')
        {window.location.href = "/editstudentinfo";}
        else
        {window.location.href = "/edituniinfo";}
    }

    const register = () => {

        Axios.post('http://localhost:3001/', {
            username: values.username,
            //usertype: values.usertype,
            usertype: values.usertype,
            password: values.password,
            email: values.email
        }).then((response) => {
            localStorage.setItem('usermail', values.email);
            localStorage.setItem('usertype', values.usertype);
            console.log(response);
        })
    };

    const insertUser = () =>{
        Axios.post('http://localhost:3001/insert',{
              Usertype: values.usertype,
              username: values.username,
              Email: values.email}).then((response)=>{
                  console.log(response);
              })   
      };

    const handleSubmit = (e, type) => {
        type = type;
        values.usertype = type;
        e.preventDefault();
        setErrors(validateInfoSignUp(values));
        setIsSubmitted(true);
        if (Object.keys(errors).length === 0 && isSubmitted) {
            register();
            insertUser();
            redirect();
        }

    }


    return { handleChange, values, handleSubmit, errors };

};

export default useSignUpForm;