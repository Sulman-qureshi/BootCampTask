import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashNav from './DashNav';
const TeacherTable = () => {

    const teachers = [
      { id: 1, name: 'Salman', fname: 'Ghafoor', email: 'salmanqureshi5151@gmail.com', phone: '1234567890', address: 'Lahore' },
      { id: 1, name: 'Junaid', fname: 'Junaid', email: 'junaid@gmail.com', phone: '1234567890', address: 'Lahore' },
      { id: 1, name: 'Khalid', fname: 'khalid', email: 'khalid@gmail.com', phone: '1234567890', address: 'Lahore' },
      { id: 1, name: 'Shakeel', fname: 'Shakeel', email: 'shakeel@gmail.com', phone: '1234567890', address: 'Lahore' },
      // Add more Student records here
    ];
  // const [teachers, setTeachers] = useState([]);

  // useEffect(() => {
  //   const fetchTeachers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5001/teacher/');
  //       console.log('response', response);
  //       setTeachers(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching teacher data:', error);
  //     }
  //   };

  //   fetchTeachers();
  // }, []);

  return (
    <>
    <DashNav/>
    
    <div className='container'>
    <h2>Teacher List</h2>
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
    </div>
    </>
  );
};

export default TeacherTable;
