import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    const { title, description, teacher, categories, img, id, price } = course;
    return (
        <div>
            <div className="col">
                <div className="card my-card">
                    <img id='course-image' src={img} className="card-img-top bg-light" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;