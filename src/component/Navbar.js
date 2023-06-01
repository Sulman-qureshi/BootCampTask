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
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
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
            {/* <li className="nav-item">
            <Link className="nav-link" to={"/blog"}>
                Blog
            </Link>
            </li> */}
            <li className="nav-item">
            <Link className="nav-link" to={"/contact-us"}>
                Contact Us
            </Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
        <li><Link to={"/register"}>Sign Up /</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
      </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
