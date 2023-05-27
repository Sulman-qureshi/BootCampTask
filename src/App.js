import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactUs from './component/contact-Us';
import TeacherListPage from './route/TeacherListPage';

const App = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Dashboard />} /> */}
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/table" element={<TeacherListPage />} />
    </Routes>
  );
};

export default App;
