import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const LogIn = () => {
    return (
        <div id='login-form' className='container w-25 mx-auto mt-5 shadow py-5'>
            <h3>Log In Hear</h3>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <span className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    <Link to='/signup'>Create Account</Link>
                </span>
            </form>

        </div>
    );
};

export default LogIn;