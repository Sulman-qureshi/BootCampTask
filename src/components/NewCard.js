import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import htmlLogo from '../images/html.jpg';
import javaLogo from '../images/java.jpg'
function NewCards() {
  return (
    <div>
      <h1 style={{ marginLeft: "120px" }}>The New Course</h1>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container text-center">
              <div className="row align-items-start">
                <Card
                  url="https://geeks-nextjs.vercel.app/images/course/course-laravel.jpg"
                  title="Laravel Ultimate Guide to Beginner"
                />
                <Card
                  url="https://geeks-nextjs.vercel.app/images/course/course-node.jpg"
                  title="Beginning Nodejs, Express &amp; MongoDB"
                />
                <Card
                  url="https://geeks-nextjs.vercel.app/images/course/course-angular.jpg"
                  title="Angular The Complete Guide"
                />
                <Card
                  url="https://geeks-nextjs.vercel.app/images/course/course-react.jpg"
                  title="Reactjs Complete Guide"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center">
              <div className="row align-items-start">
                <Card
                  url="https://geeks-nextjs.vercel.app/images/course/course-python.jpg"
                  title="Python Programming for Beginners"
                />
                <Card
                  url={htmlLogo}
                  title="Java Fundamentals: The Core Concepts"
                />
                <Card
                  url="https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"
                  title="JavaScript: From Basics to Advanced"
                />
                <Card
                  url={javaLogo}
                  title="HTML &amp; CSS Mastery"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default NewCards;
