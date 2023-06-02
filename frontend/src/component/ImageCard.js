function ImageCard() {
  return (
    <div className="container-fluid p-0">
      <div className="position-relative">
        <img
          src="/assets/images/study.jpg"
          alt="Image"
          className="img-fluid w-100"
        />
        <div className="position-absolute top-50 start-0 translate-middle-y p-4 text-white " style={{marginTop:'-10%'}}>
          <div className="col-md-6 col-sm-4" style={{textAlign:'center',  }}>

          <h5 style={{fontSize:'50px'}}>Start Your Future Here</h5>
          <h5 style={{fontSize:'40px'}}>You Can Learn Anything</h5>
          </div>
          <h5 className="col-md-6 col-sm-4">
            We have a first-rate academic program, a fully qualified and
            very well-educated teaching staff, bright and comfortable
            classrooms, and a very effective and enthusiastic student support
            staff.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;


// function ImageCard() {
//   return (
//     <div className="container-fluid p-0">
//       <div className="position-relative">
//         <img
//           src="/assets/images/study.jpg"
//           alt="Image"
//           className="img-fluid w-100"
//         />
//         <div
//           className="row"
//           style={{
//             padding: "8px",
//             marginTop: "-130px",
//             backgroundColor: "#fffff",
//           }}
//         >
//           <div className="col-sm-4 col-md-4 col-lg-6 " style={{marginTop:'-40%'}}>
//               <h5  style={{color:'white' }}>Start Your Future Here</h5>
//               <h5 style={{color:'white'}}>You Can Learn Anything</h5>
//                 <h5>
//                   We have a first-rate academic program, a fully qualified and
//                   very well-educated teaching staff, bright and comfortable
//                   classrooms, and a very effective and enthusiastic student
//                   support staff.
//                 </h5>
             
//           </div>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default ImageCard;

// function ImageCard(){

//     const fontStyle = {

//         position:'absolute', marginTop:'-40%', color:'white', marginLeft:'6%'
//     }
//     return(
//         <div>
//             <img src="/assets/images/study.jpg" width='1520px' height='800px'/>
//             <h2 style={fontStyle}>Start Your Future Here</h2>
//             <h1 style={{position:'absolute', marginTop:'-36%', color:'white', marginLeft:'6%'}}>You Can Learn Anything</h1>
//             <div style={{height:'10%', width:'50%', position:'absolute', marginTop:'-32%', color:'white', marginLeft:'6%'}}>
//                 <h5>We have a first rate academic program, a fully qualified and very well educated teaching staff, bright and comfortable classrooms, a very effective and enthusiastic student support staff.</h5>
//             </div>

//         </div>
//     )
// }
// export default ImageCard;

// import React from 'react';
// const ImageCard = () => {
//   return (
//     <div className="main-img">
//       <section className="section-home">
//         <div className="overlay">
//           <div className="container">
//             <div className="content">
//               <h2>Start Your Future Here</h2>
//               <p>
//               We have a first rate academic program, a fully qualified and very well educated teaching staff, bright and comfortable classrooms, a very effective and enthusiastic student support staff.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageCard;
