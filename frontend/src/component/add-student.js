import React, { useState } from 'react';
import DashNav from './DashNav';

const AddStudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    father_name: '',
    email: '',
    phone_no: '',
    address: '',
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log(student);
    // Reset the form fields
    setStudent({
      name: '',
      father_name: '',
      email: '',
      phone_no: '',
      address: '',
    });
  };

  return (
    <>
    <DashNav/>
    <div className="container mt-5">
      <h2>Add Student</h2>
      <div className="row justify-content-sm-center h-100">
      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Father's Name</label>
          <input
            type="text"
            className="form-control"
            name="father_name"
            value={student.father_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Phone No</label>
          <input
            type="tel"
            className="form-control"
            name="phone_no"
            value={student.phone_no}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <textarea
            className="form-control"
            name="address"
            value={student.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default AddStudentForm;
