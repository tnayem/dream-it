import React from 'react';

const CourseList = ({course}) => {
    const{title} =course; 
    return (
        <div className='me-5'>
            <h4 className='border btn btn-outline-success w-100'>{title}</h4>
        </div>
    );
};

export default CourseList;