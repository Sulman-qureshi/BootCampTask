import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {


  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a to="#">Home</a>
          </li>
          <li className="dropdown">
            <a to="#" className="dropdown-toggle" role="button" id="teacherDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Teachers
            </a>
            <ul className="dropdown-menu" aria-labelledby="teacherDropdown">
              <Link className="dropdown-item" to="/teacher-list">Teacher List</Link>
              <Link className="dropdown-item" to="#">Add Teacher/</Link>
            </ul>
          </li>
          <li className="dropdown">
            <a to="#" className="dropdown-toggle" role="button" id="studentDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Students
            </a>
            <ul className="dropdown-menu" aria-labelledby="studentDropdown">
              <li><a className="dropdown-item" to="#">Students List</a></li>
              <li><a className="dropdown-item" to="#">Add Student</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a to="#" className="dropdown-toggle" role="button" id="courseDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Courses
            </a>
            <ul className="dropdown-menu" aria-labelledby="courseDropdown">
              <li><a className="dropdown-item" to="#">Courses List</a></li>
              <li><a className="dropdown-item" to="#">Add Courses</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content">
        <h2>Welcome to the Dashboard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Dashboard;
