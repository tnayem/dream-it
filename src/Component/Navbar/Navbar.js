import logo from '../../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid container">
                    <span className='d-flex'>
                        <Link className="navbar-brand" to="/"><img className='w-25' src={logo} alt="" /></Link>
                        <button className="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </span>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <Link to='/login'><button className='btn btn-outline-primary'>Log In</button></Link>
                            <Link to='/signup'><button className='btn btn-outline-danger ms-2'>Log Out</button></Link>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;