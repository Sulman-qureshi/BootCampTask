import React from 'react';



const ContactUs = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">My Website</a>
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
              </ul>
            </div>
          </div>
        </nav>
      </header>

    
    <section class="container mt-5 dark-grey-text mb-5">
        <h3 class="font-weight-bold text-center mb-4">Contact Us</h3>
            <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

        <div class="row">
            <div class="col-lg-5 mb-lg-0 pb-lg-3 mb-4">
                <div class="card">
                    <div class="card-body">
          
                        <div class="form-header blue accent-1">
                            <h3 class="mt-2"><i class="fas fa-envelope"></i> Write to us:</h3>
                        </div>      
                    <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
          
                    <div class="md-form">
                        <i class="fas fa-user prefix grey-text"></i>
                        <input type="text" id="form-name" class="form-control"/>
                        <label for="form-name">Your name</label>
                    </div>
                    <div class="md-form">
                        <i class="fas fa-envelope prefix grey-text"></i>
                        <input type="text" id="form-email" class="form-control"/>
                        <label for="form-email">Your email</label>
                    </div>
                    <div class="md-form">
                        <i class="fas fa-tag prefix grey-text"></i>
                        <input type="text" id="form-Subject" class="form-control"/>
                        <label for="form-Subject">Subject</label>
                    </div>
                    <div class="md-form">
                        <i class="fas fa-pencil-alt prefix grey-text"></i>
                        <textarea id="form-text" class="form-control md-textarea" rows="3"></textarea>
                        <label for="form-text">Send message</label>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-light-blue waves-effect waves-light">Submit</button>
                    </div>
                </div>
            </div>
        </div>
  
    <div class="col-lg-7">
      <div id="map-container-section" class="z-depth-1-half map-container-section mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4751772687464!2d74.30116777419966!3d31.566014874193066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191caefc884b37%3A0xa159ef8c3cab5034!2sPeak%20Solutions%20College%20(Lower%20Mall%20Campus)!5e0!3m2!1sen!2s!4v1685045337416!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      <div class="row text-center">
        <div class="col-md-4">
          <a class="btn-floating blue accent-1 waves-effect waves-light">
            <i class="fas fa-map-marker-alt"></i>
          </a>
          <p>Lahore, 94126</p>
          <p class="mb-md-0">Pakistan</p>
        </div>
        <div class="col-md-4">
          <a class="btn-floating blue accent-1 waves-effect waves-light">
            <i class="fas fa-phone"></i>
          </a>
          <p>+ 92 234 567 89</p>
          <p class="mb-md-0">Mon - Fri, 10:00-19:00</p>
        </div>
        <div class="col-md-4">
          <a class="btn-floating blue accent-1 waves-effect waves-light">
            <i class="fas fa-envelope"></i>
          </a>
          <p>info@gmail.com</p>
          <p class="mb-0">lms@gmail.com</p>
        </div>
      </div>

    </div>
    
  </div>
  
</section>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default ContactUs;
