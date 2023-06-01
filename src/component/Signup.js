import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import UserSchema from "./YupSchema";
import  axios  from "axios";

export default function Signup() {
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
        <h1 className="text-center mt-5"  style={{ color: 'black' }} >Sign-up</h1>
          <div class="container flex textalign:center mb-6">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <Field type="text" name="name" class="form-control" />
            <ErrorMessage name="name" />
          </div>
          <div class="container flex textalign:center mb-6">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <Field type="email" name="email" class="form-control" />
            <ErrorMessage name="email" />
          </div>
          <div class="container flex textalign:center mb-6">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <Field type="password" name="password" class="form-control" />
            <ErrorMessage name="password" />
          </div>
          <div className="d-flex mt-3 justify-content-center">
          <button type=" submit" class="sub-btn btn btn-primary">
            Signup
          </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
