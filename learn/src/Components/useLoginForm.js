import { useState, useEffect } from "react";
import validateInfoLogin from "./validateInfoLogin";
import Axios from "axios";

const useLoginForm = validateInfoLogin => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfoLogin(values));
        setIsSubmitted(true);

    }

    return { handleChange, values, handleSubmit, errors };

};

export default useLoginForm;