// AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="section-one">
        <div className="overlay">
          <div className="container">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-two">
        <div className="container">
          <h2>Our Mission, Goals, and Objectives</h2>
          <div className="card-container">
            <div className="card">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card">
              <h3>Our Goals</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card">
              <h3>Our Objectives</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three */}
      <section className="section-three">
      <div className="container">
          <h2>Our Achievements</h2>
          <div id="awards-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col">
                    <img src="/assets/images/award.png" alt="Award 1" />
                  </div>
                  <div className="col">
                    <img src="/assets/images/award.png" alt="Award 2" />
                  </div>
                  <div className="col">
                    <img src="/assets/images/award.png" alt="Award 3" />
                  </div>
                  <div className="col">
                    <img src="/assets/images/award.png" alt="Award 4" />
                  </div>
                </div>
              </div>
              {/* Add more carousel items for additional slides */}
              
            </div>
            <a className="carousel-control-prev" href="#awards-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#awards-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
