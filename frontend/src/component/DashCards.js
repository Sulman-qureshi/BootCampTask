import {Link, useNavigate} from 'react-router-dom';
function DashCards() {
  return (
    <div className="container d-flex justify-content-between mt-5">
      <div
        className="card text-white bg-primary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header"><Link to={"/students-list"} >Total Students</Link></div>
        <div className="card-body">
          <h5 className="card-title" style={{fontSize:'50px'}}>5</h5>
          
        </div>
      </div>
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header"> <Link to={"/teachers-list"} >Total Teachers</Link></div>
        <div className="card-body">
          <h5 className="card-title" style={{fontSize:'50px'}}>6</h5>
          
        </div>
      </div>
      <div
        className="card text-white bg-success mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header"><Link to={"/courses-list"} >Total Courses</Link></div>
        <div className="card-body">
          <h5 className="card-title" style={{fontSize:'50px'}}>10</h5>
          
        </div>
      </div>
    </div>
  );
}
export default DashCards;
