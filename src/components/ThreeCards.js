function ThreeCards() {
  return (
    <div className="row" style={{ padding: '20px 60px 20px 60px',  marginTop: '-130px', backgroundColor: '#fffff'}}>
      <div className="col-sm-4" >
        <div className="card">
          <div style={{marginTop:"10px"}}>
            <img
              src="https://livewp.site/html/smartedu/img/icon3/hom_ser_01.png"
              width="50px"
              height="50px"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Creative Thinking</h5>
            <p className="card-text">
              Creative thinking can be stimulated both by an unstructured
              process such as brainstorming.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
        <div style={{marginTop:"10px"}}>
            <img
              src="https://livewp.site/html/smartedu/img/icon3/hom_ser_02.png"
              width="50px"
              height="50px"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Problem Solving</h5>
            <p className="card-text">
            Learn new approaches to problem solving, gain insights and develope breakthrough idea.
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="card">
        <div style={{marginTop:"10px"}}>
            <img
              src="https://livewp.site/html/smartedu/img/icon3/hom_ser_03.png"
              width="40px"
              height="50px"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Role Play Study</h5>
            <p className="card-text">
            The idea is to enable students to experience what it may be like to see different problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThreeCards;
