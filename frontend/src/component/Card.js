import Details from "./Details";
import { useNavigate } from "react-router-dom";
function Card(props) {
   const navigate = useNavigate();

   function handleDetails(){
      navigate('details', {
        state: {
            url:props.url,
            title: props.title,
            description: props.description,
        }}
      )
   }
   
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.url} className="card-img-top" alt="image" />
        <div className="card-body">
          <h3 className=" mb-2 text-truncate-line-0 ">
           
              {props.title}
            
          </h3>

          <ul className="mb-3 list-inline">
            <li className="list-inline-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              2h 00m
            </li>
            <li className="list-inline-item">
              <svg
                className="me-1 mt-n1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="8"
                  width="2"
                  height="6"
                  rx="1"
                  fill="#754FFE"
                ></rect>
                <rect
                  x="7"
                  y="5"
                  width="2"
                  height="9"
                  rx="1"
                  fill="#754FFE"
                ></rect>
                <rect
                  x="11"
                  y="2"
                  width="2"
                  height="12"
                  rx="1"
                  fill="#DBD8E9"
                ></rect>
              </svg>
              Intermediate
            </li>
          </ul>
          <div
            className="lh-1 d-flex align-items-center "
            style={{ marginLeft: "35px" }}
          >
            <span className="text-warning me-1 mb-0">
              <svg
                viewBox="0 0 24 24"
                style={{ width: "0.92rem", height: "0.92rem" }}
                role="presentation"
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                style={{ width: "0.92rem", height: "0.92rem" }}
                role="presentation"
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                style={{ width: "0.92rem", height: "0.92rem" }}
                role="presentation"
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                style={{ width: "0.92rem", height: "0.92rem" }}
                role="presentation"
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                style={{ width: "0.92rem", height: "0.92rem" }}
                role="presentation"
              >
                <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"></path>
              </svg>
            </span>
            <span className="text-warning me-1"> 4.0</span>
            <span className="fs-6 text-muted"> (15,700)</span>
          </div>
          <div className="lh-1 mt-3 ">
            <span className="text-dark fw-bold">$800</span>
            <del className="fs-6 text-muted">$950</del>
          </div>
        </div>
        <button href="#" className="btn btn-primary" onClick={handleDetails} style={{ marginTop: "20px" }}>
          Learn Now
        </button>
      </div>
    </div>
  );
}

export default Card;
