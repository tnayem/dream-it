import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import "./Login.css"

const LogIn = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error,setError]=useState('');
    const{signIn}=useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            navigate(from,{replace: true});
        })
        .catch(error=>{
            console.error(error)
            setError(error.message);
        });
        
    }
    return (
        <div id='login-form' className='container mx-auto mt-5 shadow py-5'>
            <h3>Log In Hear</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <span className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    <Link to='/signup'>Create Account</Link>
                </span>
                <p className='text-danger'>{error}</p>
            </form>

        </div>
    );
};

export default LogIn;