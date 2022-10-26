import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const SignUp = () => {
    const[error,setError] = useState('');
    const{createUser} = useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name,email,password,confirmPassword);
        if(password.length< 8){
            setError('Password should be 8 characters or more');
            return;
        }
        if(password!==confirmPassword){
            setError('Password did not match');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        })
        .catch(error=>console.error(error));
    }
    return (
        <div className='container w-25 mx-auto mt-5 shadow py-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input name='name' type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhoto" className="form-label">Photo URL</label>
                    <input name='photourl' type="text" className="form-control" id="exampleInputPhoto" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input name='confirmPassword' type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <span className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    <p>If you Have an Account <Link to='/login'>Log In</Link></p>
                </span>
            </form>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default SignUp;