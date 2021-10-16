import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="register">
            <div className="text-center mb-5">
                <img className="w-50" src="https://i.ibb.co/n6sXcS2/logo2.png" alt="" />
            </div>
            <div className="register__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} /> <br />
                <input placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br />
                <input placeholder="Your Email" {...register("email", { required: true })} /> <br />
                {errors.email && <span>This field is required</span>}
                <input type="password" name="password" placeholder="Password"/> <br />
                </form>
            </div>
            <button className="btn btn__submit">Sign In</button> <br />
            <Link to="/home">Already have an account</Link>
        </div>
    );
};

export default Register;