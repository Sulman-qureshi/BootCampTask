// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import AboutUs from './component/AboutUs';
import TeacherListPage from './route/TeacherListPage';
import StudentListPage from './route/StudentListPage';
import CourseListPage from './route/CourseListPage';
import AddTeacherForm from './component/add-teacher';
import AddStudentForm from './component/add-student';
import AddCourseForm from './component/add-course';
import ContactUs from './component/contact-Us';
import Login from "./component/Login";
import Signup from "./component/Signup";


// import Blog from './component/blog';
import Course from './component/Course';



const App = () => {
  return (
    <>
    
    <Routes>
       {/* <Route exact path="/" element={<Dashboard />} /> */}
       <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about-us" element={<AboutUs />} />
       <Route exact path="/courses" element={<Course />} />
      {/*<Route exact path="/blog" element={<Blog />} />         */}
      <Route exact path="/contact-us" element={<ContactUs />} />
      
      <Route exact path="/teachers-list" element={<TeacherListPage />} />
      <Route exact path="/students-list" element={<StudentListPage />} />
      <Route exact path="/courses-list" element={<CourseListPage />} />
      <Route exact path="/add-teacher" element={<AddTeacherForm />} />
      <Route exact path="/add-student" element={<AddStudentForm />} />
      <Route exact path="/add-course" element={<AddCourseForm />} /> 
      <Route exact path="/register" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
    </>
  );
};

export default App;
