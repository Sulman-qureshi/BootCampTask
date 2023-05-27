import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactUs from './component/contact-Us';
import TeacherListPage from './route/TeacherListPage';
import StudentListPage from './route/StudentListPage';
import CourseListPage from './route/CourseListPage';
import AddTeacherForm from './component/add-teacher';
import AddStudentForm from './component/add-student';
import AddCourseForm from './component/add-course';


const App = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Dashboard />} /> */}
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/teachers-list" element={<TeacherListPage />} />
      <Route exact path="/students-list" element={<StudentListPage />} />
      <Route exact path="/courses-list" element={<CourseListPage />} />
      <Route exact path="/add-teacher" element={<AddTeacherForm />} />
      <Route exact path="/add-student" element={<AddStudentForm />} />
      <Route exact path="/add-course" element={<AddCourseForm />} />
    </Routes>
  );
};

export default App;
