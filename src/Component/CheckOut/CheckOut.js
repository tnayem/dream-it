import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseData = useLoaderData();
    const{title,price,img,categories}=courseData;
    return (
        <div>
            <div className="container mt-5">
                <div className='w-75 mx-auto shadow  p-5'>
                    <div className='w-25 mx-auto'>
                        <img className='w-100 mb-5' src={img} alt="" />
                    </div>
                    <h5>Course Name: <span className='text-black-50'>{title}</span></h5>
                    <h5>Catagory: <span className='text-black-50'>{categories}</span></h5>
                    <h5>Price: <span className='text-black-50'>{price}</span></h5>
                    <h5>Total Price: <span className='text-black-50'>{price}</span></h5>
                    <button className='btn btn-outline-danger mt-3'>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;