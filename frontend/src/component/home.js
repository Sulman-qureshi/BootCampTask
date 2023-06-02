import ImageCard from "./ImageCard";
import ThreeCards from "./ThreeCards";
import NewCards from "./NewCard";
import MethodCard from "./MethodCard";
import Application from "./Application";
import Teachers from "./Teachers";
import Review from "./Reviews";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <Navbar/>
      <ImageCard />
      <br />
      <ThreeCards />
      <br />
      <NewCards />
      <br />
      <MethodCard />

      {/* <Application /> */}
      <br />
      <Teachers />
      <main>
        <section className="container">
          <div children="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>

          <br />
          <Review />
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
