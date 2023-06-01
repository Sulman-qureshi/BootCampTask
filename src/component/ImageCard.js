
// function ImageCard(){

//     const fontStyle = {
        
//         position:'absolute', marginTop:'-40%', color:'white', marginLeft:'6%'
//     }
//     return(
//         <div>
//             <img src={photo} width='1520px' height='800px'/>
//             <h2 style={fontStyle}>Start Your Future Here</h2>
//             <h1 style={{position:'absolute', marginTop:'-36%', color:'white', marginLeft:'6%'}}>You Can Learn Anything</h1>
//             <div style={{height:'10%', width:'50%', position:'absolute', marginTop:'-32%', color:'white', marginLeft:'6%'}}>
//                 <h5>We have a first rate academic program, a fully qualified and very well educated teaching staff, bright and comfortable classrooms, a very effective and enthusiastic student support staff.</h5>
//             </div>
            
//         </div>
//     )
// }
// export default ImageCard;

// // AboutUs.js

import React from 'react';
// import './AboutUs.css'; // Import the external CSS file

const ImageCard = () => {
  return (
    <div className="main-img">
      <section className="section-home">
        <div className="overlay">
          <div className="container">
            <div className="content">
              <h2>Start Your Future Here</h2>
              <p>
              We have a first rate academic program, a fully qualified and very well educated teaching staff, bright and comfortable classrooms, a very effective and enthusiastic student support staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections... */}
    </div>
  );
};

export default ImageCard;
