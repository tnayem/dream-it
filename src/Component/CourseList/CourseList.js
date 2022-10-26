import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({course}) => {
    const{title,id} =course; 
    return (
        <div>
            <Link to={`/courseDetails/${id}`}><h4 className='border btn btn-outline-success w-100 my-2'>{title}</h4></Link>
            
        </div>
    );
};

export default CourseList;