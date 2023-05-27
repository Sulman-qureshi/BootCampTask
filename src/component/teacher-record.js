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
        {teachers.map((teachers) => (
          <tr key={teachers.id}>
            <td>{teachers.id}</td>
            <td>{teachers.name}</td>
            <td>{teachers.email}</td>
            <td>{teachers.phone}</td>
            <td>{teachers.subject}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;