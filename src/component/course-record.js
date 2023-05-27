import React from 'react';
import { image } from '../enums/images';



const CourseTable = () => {
  const courses = [
    { id: 1, course_name: 'Mathmatics', course_description: 'Description of Course Mathmatics',course_image:<image src={image.image1} alt=''/>, course_duration: '4 months', course_level: 'intermediate', course_instructor:"Salman"  },
    { id: 2, course_name: 'Data Science', course_description: 'Description of Course Data Science',course_image:'/assests/images/course-graphql.jpg', course_duration: '4 months', course_level: 'intermediate', course_instructor:"Salman"  },
    { id: 3, course_name: 'Machine Learning', course_description: 'Description of Course Machine Learning',course_image:'/assests/images/course-graphql.jpg', course_duration: '4 months', course_level: 'intermediate', course_instructor:"Salman"  },
    { id: 4, course_name: 'Data Analysis', course_description: 'Description of Course Data Analysis',course_image:'/assests/images/course-graphql.jpg', course_duration: '4 months', course_level: 'intermediate', course_instructor:"Salman"  },
    // Add more Courses records here
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Course Description</th>
          <th>Course Image</th>
          <th>Course Duration</th>
          <th>Course Level</th>
          <th>Course Instructor</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((courses) => (
          <tr key={courses.id}>
            <td>{courses.id}</td>
            <td>{courses.course_name}</td>
            <td>{courses.course_description}</td>
            <td>{courses.course_image}</td>
            <td>{courses.course_duration}</td>
            <td>{courses.course_level}</td>
            <td>{courses.course_instructor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;