import "./App.css";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import ThreeCards from "./components/ThreeCards";
import NewCards from "./components/NewCard";
import MethodCard from "./components/MethodCard";
import Application from "./components/Application";
import Teachers from "./components/Teachers";
import Review from "./components/Reviews";
import Footer from "./components/Footer";
import React from 'react';
import ContactUs from './component/contact-Us';




const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ImageCard />
      <br />
      <ThreeCards />
      <br />
      <NewCards />
      <br />
      <MethodCard />
      
      <Application />
      <br />
      <Teachers />
      <main>
        <section className="container">
          <div children="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
