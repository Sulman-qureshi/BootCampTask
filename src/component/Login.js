import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import UserSchema from "./YupSchema";
import  axios  from "axios";

export default function Login() {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const handleForm = (value) => {
    
    axios.post('http://localhost:5000/user' , value)
      
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={handleForm}
        validationSchema={UserSchema}
      >
        <Form textalign="center">
        <h1 className="text-center mt-5"  style={{ color: 'black' }} >Login</h1>
          <div className="container flex textalign:center mb-6">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" />
          </div>
          <div className="container flex textalign:center mb-6">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <Field type="password" name="password" className="form-control" />
            <ErrorMessage name="password" />
          </div>
          <div className="d-flex mt-3 justify-content-center">
          <button type=" submit" className="sub-btn btn btn-primary">
            Login
          </button>
          </div>
          
        </Form>
      </Formik>
    </div>
  );
}
