function TeacherCard(props) {
  return (
    <div className="col-lg-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.url} className="card-img-top" alt="image" />
        <div className="card-body">
          <h6 className="h6 mb-2 text-truncate-line-2 ">
            <a className="text-inherit" href="/#">
              {props.title}
            </a>
          </h6>
          <ul className="mb-3 list-inline">
            <li className="list-inline-item">{props.department}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
