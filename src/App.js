import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard';

import ContactUs from './component/contact-Us';
import TeacherListPage from './route/TeacherListPage';
import TeacherTable from './component/teacher-record';

const App = () => {
  return (
      <div>
        <Dashboard />
        <Routes path="/table" element={<TeacherTable />} />
        <Routes path="/contact-us" component={ContactUs} />
      </div>
  );
}

export default App;
