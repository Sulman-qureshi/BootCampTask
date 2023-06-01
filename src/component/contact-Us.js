import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt, FaTag, FaPencilAlt, FaPhoneAlt } from "react-icons/fa";




const ContactUs = () => {
  return (
    <>
      {/* <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">LMS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item ">
                  <button className='btn btn-primary' href="">Login</button>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

     */}
    <section className="container mt-5 dark-grey-text mb-5">
        <h3 className="font-weight-bold text-center mb-4">Contact Us</h3>
            <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

        <div className="row">
            <div className="col-lg-5 mb-lg-0 pb-lg-3 mb-4">
                <div className="card">
                    <div className="card-body">
          
                        <div className="form-header blue accent-2 ">
                            <h3 className="mt-2"><FaEnvelope className="fas fa-envelope"/> Write to us:</h3>
                        </div>      
                    <p className="dark-grey-text">We'll write rarely, but only the best content.</p>
          
                    <div className="md-form ">
                        <FaUserAlt className="fas fa-user prefix grey-text"/>
                        <label className="headingsFields" for="form-name">Your name</label>
                        <input type="text" id="form-name" className="form-control"/>
                        
                    </div>
                    <div className="md-form">
                        <FaEnvelope className="fas fa-envelope prefix grey-text"/>
                        <label className="headingsFields" for="form-email">Your email</label>
                        <input type="text" id="form-email" className="form-control"/>
                        
                    </div>
                    <div className="md-form">
                        <FaTag className="fas fa-tag prefix grey-text"/>
                        <label className="headingsFields" for="form-Subject">Subject</label>
                        <input type="text" id="form-Subject" className="form-control"/>
                        
                    </div>
                    <div className="md-form">
                        <FaPencilAlt className="fas fa-pencil-alt prefix grey-text" />
                        <label className="headingsFields" for="form-text">Send message</label>
                        <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
                        
                    </div>
                    <div className="text-center">
                        <button className="btn btn-light-blue waves-effect waves-light sbmt">Submit</button>
                    </div>
                </div>
            </div>
        </div>
  
    <div className="col-lg-7">
      <div id="map-container-section" className="z-depth-1-half map-container-section mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4751772687464!2d74.30116777419966!3d31.566014874193066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191caefc884b37%3A0xa159ef8c3cab5034!2sPeak%20Solutions%20College%20(Lower%20Mall%20Campus)!5e0!3m2!1sen!2s!4v1685045337416!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      <div className="row text-center">
        <div className="col-md-4">
          <a className="btn-floating blue accent-1 waves-effect waves-light icn">
            <FaMapMarkerAlt className="fas fa-map-marker-alt"/>
          </a>
          <p>Lahore, 94126</p>
          <p className="mb-md-0">Pakistan</p>
        </div>
        <div className="col-md-4">
          <a className="btn-floating blue accent-1 waves-effect waves-light icn">
          <FaPhoneAlt icon="fa fa-phone" className="highlight" />
            {/* <i className="fas fa-phone"></i> */}
          </a>
          <p>+ 92 234 567 89</p>
          <p className="mb-md-0">Mon - Fri, 10:00-19:00</p>
        </div>
        <div className="col-md-4">
          <a className="btn-floating blue accent-1 waves-effect waves-light icn">
            <FaEnvelope className="fas fa-envelope"/>
          </a>
          <p>info@gmail.com</p>
          <p className="mb-0">lms@gmail.com</p>
        </div>
      </div>

    </div>
    
  </div>
  
</section>
      
    </>
  );
}

export default ContactUs;
