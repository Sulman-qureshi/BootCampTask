import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import DashNav from './DashNav';

const AddTeacherForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    course: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    course: Yup.string().required('Course is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5001/CreateTeacher/', values);
      console.log(response.data);
      resetForm();
    } catch (error) {
      console.error('Error creating teacher record:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <>
    <DashNav/>
    
    <div className="container mt-5">
      
      <h2>Add Teacher</h2>
      <div className="row justify-content-sm-center h-100">
      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone No</label>
            <Field type="tel" id="phone" name="phone" className="form-control" />
            <ErrorMessage name="phone" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <Field as="textarea" id="address" name="address" className="form-control" />
            <ErrorMessage name="address" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="course">Course</label>
            <Field type="text" id="course" name="course" className="form-control" />
            <ErrorMessage name="course" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
      </div>
    </div>
   </div>
   </>
  );
};

export default AddTeacherForm;
