import React, { useState } from 'react';
import DashNav from './DashNav';

const AddCourseForm = () => {
  const [course, setCourse] = useState({
    course_name: '',
    course_description: '',
    course_duration: '',
    course_level: '',
    course_instructor: '',
    course_image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'course_image') {
      setCourse({
        ...course,
        course_image: e.target.files[0],
      });
    } else {
      setCourse({
        ...course,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log(course);
    // Reset the form fields
    setCourse({
      course_name: '',
      course_description: '',
      course_duration: '',
      course_level: '',
      course_instructor: '',
      course_image: null,
    });
  };

  return (
    <>
    <DashNav/>
    
    <div className="container mt-3">
      <h2>Add Course</h2>
      <div className="row justify-content-sm-center h-100">
      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            name="course_name"
            value={course.course_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Description</label>
          <textarea
            className="form-control"
            name="course_description"
            value={course.course_description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Course Duration</label>
          <input
            type="text"
            className="form-control"
            name="course_duration"
            value={course.course_duration}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Level</label>
          <input
            type="text"
            className="form-control"
            name="course_level"
            value={course.course_level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Instructor</label>
          <input
            type="text"
            className="form-control"
            name="course_instructor"
            value={course.course_instructor}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Image</label>
          <input
            type="file"
            className="form-control"
            name="course_image"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default AddCourseForm;