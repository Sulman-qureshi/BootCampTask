import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import DashCards from './DashCards';
const Dashboard = () => {
  const navigate = useNavigate();
  function handleLogout(){
    navigate('/');
    localStorage.clear();
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"/"}>Dashboard</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teacher
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={"/add-teacher"}>Add Teacher</Link></li>
            <li><Link class="dropdown-item" to={"/teachers-list"}>Teachers List</Link></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={"/add-student"}>Add Student</Link></li>
            <li><Link class="dropdown-item" to={"/students-list"}>Students List</Link></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={"/add-course"}>Add Course</Link></li>
            <li><Link class="dropdown-item" to={"/courses-list"}>Courses List</Link></li>
            
          </ul>
        </li>
        
      </ul>
      
    </div>
    <div className="d-flex mr-5">
          <button className="btn btn-primary" onClick={handleLogout} >Logout</button>

          </div>
  </div>
</nav>
<DashCards/>
</>
  );
};

export default Dashboard;
