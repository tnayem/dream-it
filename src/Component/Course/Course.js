import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { title, description, teacher, categories, img, id, price } = course;
    return (
        <div>
            <div className="col">
                <div className="card my-card">
                    <img id='course-image' src={img} className="card-img-top bg-light" alt="..." />
                    <div className="card-body">
                        <Link to={`/courseDetails/${id}`}><h5 className="btn">{title}</h5></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;