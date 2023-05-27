import React, { useState } from 'react';

const AddTeacherForm = () => {
  const [teacher, setTeacher] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    course: '',
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log(teacher);
    // Reset the form fields
    setTeacher({
      name: '',
      email: '',
      phone: '',
      address: '',
      course: '',
    });
  };

  return (
    <div className="container">
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={teacher.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={teacher.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Phone No</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={teacher.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <textarea
            className="form-control"
            name="address"
            value={teacher.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            name="course"
            value={teacher.course}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddTeacherForm;
