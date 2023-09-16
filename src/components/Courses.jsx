import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import  PropTypes  from "prop-types";

const Courses = ({handleAddToCart}) => {
  const [courses,setCourses]=useState([]);

  useEffect(() =>{
    fetch('Courses.json')
    .then(res => res.json())
    .then(data => setCourses(data));
  },[])


    return (
        <div className="grid md:grid-cols-3 gap-5">
            {courses.map(course => 
            <Course
             course={course}
             key={course.id}
             handleAddToCart={handleAddToCart}
             ></Course>)}
        </div>
    );
};

Courses.propTypes= {
  handleAddToCart: PropTypes.func
}

export default Courses;