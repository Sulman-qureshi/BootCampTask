import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4" style={{backgroundColor:'#333', color:'white'}}>
      <div className="container-fluid text-center text-md-left">
        <div className="row" style={{textAlign:"left"}}>
          <div className="col-md-4 mt-md-0 mt-2" style={{marginLeft:'10%'}}>
          <ul className="list-unstyled">
              <li>
              <h4>Address</h4>
                <h6>Peak Solution Lahore</h6>
              </li>
              <li>
                <h6>Office Hours</h6>
                <h6>9:00am to 5:00pm</h6>
              </li>
              <li>
              <h6>Telephone</h6>
                <h6>0335-2254312</h6>
              </li>
              <li>
              <h6>Email</h6>
                <h6>lms@gmail.com</h6>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h4 className="text-uppercase">Departments</h4>
            <ul className="list-unstyled">
              <li>
                <h6>Computer Science</h6>
                <h6>Software Engineering</h6>
              </li>
              <li>
              <h6>Zoology</h6>
                <h6>Botony</h6>
              </li>
              <li>
              <h6>Mathematics</h6>
                <h6>History</h6>
              </li>
              <li>
              <h6>Education</h6>
                <h6>Business Administration</h6>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h4 className="text-uppercase">Admissions</h4>
            <ul className="list-unstyled">
              <li>
              <h6>Matriculation</h6>
                <h6>Intermediate</h6>
              </li>
              <li>
                <h6>Undergraduate</h6>
                <h6>Graduate</h6>
              </li>
              <li>
              <h6>Doctoral</h6>
                <h6>Summer Courses</h6>
              </li>
              <li>
              <h6>IT Courses</h6>
                <h6>Short Courses</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright: All Rigts Reserved by Techlift
      </div>
    </footer>
  );
}
export default Footer;
