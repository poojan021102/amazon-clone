import React from 'react'
import "./Login.css"
import auth from '../firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
function Login() {
    const history=useNavigate();
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const login=(e)=>{
        e.preventDefault();
        //login logic
        signInWithEmailAndPassword(auth,Email,Password).then((userCredential)=>{
            //looged in

            history("/");
        }).catch((error)=>alert(error.message));
    }
    const regester=(e)=>{
        e.preventDefault();
        //regester logic
        createUserWithEmailAndPassword(auth,Email,Password).then((userCredential)=>{
            //account made
            history("/");
        }).catch(error=>alert(error.message));
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="https://www.bing.com/th?id=AMMS_234d7638413b734c1560bf8e7f642960&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1"
                    alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={Email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={Password} onChange={event=>setPassword(event.target.value)} type="password"/>
                    <button type="submit" onClick={login} className='login__signInButton'>Sign In</button>
                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                    <button type="submit" onClick={regester} className='login__regesterButton'>Create your Amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
