import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherTable = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/teacher/');
        console.log('response', response);
        setTeachers(response.data.data);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.id}>
            {/* <td>{teacher.id}</td> */}
            <td>{teacher.name}</td>
            <td>{teacher.email}</td>
            <td>{teacher.phone}</td>
            <td>{teacher.course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;
