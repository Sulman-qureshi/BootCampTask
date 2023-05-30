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
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <img src={laptopPhoto} alt="Laptop" style={imageStyle} />
      <div style={textStyle}>
      <h1 >Applications are <strong>Now Open</strong> </h1>
      <p style={{fontSize:'20px'}}>
      We’re now taking enrolments for Semester 1 — 2017. Smart education graduates are 40% more likely to find ongoing work in their chosen profession.
      </p>
      <button className="btn btn-primary" >Get Started</button>
      </div>
    </div>
  );
}

const containerStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(90deg, rgba(37,231,216,0.391281512605042) 10%, rgba(110,233,196,0.9585084033613446) 40%, rgba(124,185,228,0.3) 100%)",
};

const imageStyle = {
  width: "1520px",
  height: "750px",
  objectFit: "cover",
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "24px",
  textAlign: "center",
  fontFamily: 'Montserrat, Arial, sans-serif',
  fontSize:'40px'
};

export default Application;

