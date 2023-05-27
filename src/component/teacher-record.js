import React from 'react';


const TeacherTable = () => {
  const teachers = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890', subject: 'Mathematics' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543210', subject: 'Science' },
    // Add more teacher records here
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td>{teacher.id}</td>
            <td>{teacher.name}</td>
            <td>{teacher.email}</td>
            <td>{teacher.phone}</td>
            <td>{teacher.subject}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;