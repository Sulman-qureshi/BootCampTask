import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Details() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex align-items-center justify-content-center p-4">
        <div className="text-center">
          <img src={location.state.url} alt="Image" className="img-fluid" />
          <div className="mt-4">
            <h2>{location.state.title}</h2>
            <p>{location.state.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
