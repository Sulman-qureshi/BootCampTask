import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid" style={{margin:'5px 80px'}}>
        <a className="navbar-brand" href="#">
        <img src="https://www.lms.org/wp-content/uploads/lmslogo.png" alt="logo" width="165" height="55" loading="lazy"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about-us"}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/courses"}>
                Courses
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/blog"}>
                Blog
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/contact-us"}>
                Contact Us
            </Link>
            </li>
            
            
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
