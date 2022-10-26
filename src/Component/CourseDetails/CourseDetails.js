import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { categories, description, id, img, price, teacher, title } = courseDetails;
    return (
        <div>
            <div className='py-5 bg-light'>
                <h1 className='text-center display-4 text-secondary'>{title}-</h1>
                <h1 className='text-center display-6 text-black-50'>Dream It Institute</h1>
            </div>
            <div className='container d-flex'>

                <div className="col-md-8 mt-5">

                    <div className="w-50 mx-auto">
                        <img className='course-logo w-100' src={img} alt="" />
                    </div>
                    <h1>{title}</h1>
                    <p className='text-justify text-black-50 my-3'>{description}</p>
                </div>
                <div className="col-md-4 shadow p-3">
                    <h5>Teacher: <span className='text-black-50'>{teacher}</span></h5>
                    <h5 className='my-5'>Categories: <span className='text-black-50'>{categories}</span></h5>
                    <h5>Price: <span className='text-black-50'>{price} Tk</span></h5>
                    <Link to={`/checkout/${id}`}><p className='text-center my-5'><button className='btn btn-success'>Get Premium Access</button></p></Link>
                    <h1 className='text-secondary my-5'>Course Features</h1>
                    <h5 className='mb-3'>Duration: <span className='text-black-50'>4 Months</span></h5>
                    <h5 className='mb-3'>Skill Requirements: <span className='text-black-50'>Beginner</span></h5>
                    <h5 className='mb-3'>Language: <span className='text-black-50'>Bangali/English</span></h5>
                    <h5 className='mb-3'>Student: <span className='text-black-50'>50</span></h5>
                    <h5 className='mb-3'>Assignment: <span className='text-black-50'>Yes</span></h5>
                    <p className='text-center my-5'><button className='btn btn-danger'>Dawnload</button></p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;