import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseList from '../CourseList/CourseList';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='mt-5'>
            <div className="container d-flex">
                <div className="col-md-3 shadow p-3">
                    {
                        courses.map(course=><CourseList
                            key={course.id}
                            course={course}
                        ></CourseList>)
                    }
                </div>
                <div className="col-md-9 p-2 shadow">
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                                ></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;