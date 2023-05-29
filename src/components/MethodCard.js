import photo from "../images/work-net.jpg";
function MethodCard() {
  return (
    <div>
      <div className="card " >
        <div className="row g-0" style={{fontFamily: 'Montserrat, Arial, sans-serif', backgroundColor:'lightgray'}}>
          <div className="col-md-6" >
            <img src={photo} className="img-fluid rounded-start" alt="photo"  />
          </div>
          <div className="col-md-6">
            <div className="card-body" style={{textAlign:'left', paddingLeft:'7%', paddingTop:'5%'}}>
                <div style={{marginBottom:'5%'}}>
                    <h1 className="card-title" >How it Works?</h1>
                </div>
              
              <div>
                <h2>Register in 30 seconds</h2>
              </div>

              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

              
              <div style={{marginTop:'30px'}}>
                <h2>Choose Your Perfect Course</h2>
              </div>
              
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

              
              <div style={{marginTop:'30px'}}>
                <h2>Learn When You are Comfortable</h2>
              </div>
              
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MethodCard;
