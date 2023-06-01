// import laptopPhoto from "../images/laptop.jpg";
// function Application() {
  
//   return (
//     <div >
//       <img src={laptopPhoto} width='1520px' height='800px'/>
//       <h1>Applications are Open</h1>
//     </div>
//   );
// }
// export default Application;

import laptopPhoto from "../images/laptop.jpg";

function Application() {
  return (
    
    <div className="getStarted-img">
    <section className="section-getStarted">
      <div className="overlay">
        <div className="container">
          <div className="content">
            <h2>Applications are <strong>Now Open</strong> </h2>
            <p>
            We’re now taking enrolments for Semester 1 — 2017. Smart education graduates are 40% more likely to find ongoing work in their chosen profession.
            </p>
            <button className="btn btn-primary size-btn" >Get Started</button>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}



export default Application;

