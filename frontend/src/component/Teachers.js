import TeacherCard from "./TeacherCard";
function Teachers() {
  return (
    <div >

      <h1 style={{ marginLeft: "120px", marginBottom:'50px' }}>Our Professional Teachers</h1>
      <div className="container text-center">
        <div className="row align-items-start" >
          <TeacherCard
            url="https://livewp.site/html/smartedu/img/team/team_01.jpg"
            title="Professor Dr. Kamran Ali"
            department="Department of Computer"
          />
          <TeacherCard
            url="https://livewp.site/html/smartedu/img/team/team_02.jpg"
            title="Preofessor Dr. Azra Bano"
            department="Department of Education"
          />
          <TeacherCard
            url="https://livewp.site/html/smartedu/img/team/team_03.jpg"
            title="Professor Dr. Kiran Naaz"
            department="Department of English"
          />
          <TeacherCard
            url="https://livewp.site/html/smartedu/img/team/team_04.jpg"
            title="Professor Dr. Feroz Hassan"
            department="Department of Zoology"
          />
        </div>
      </div>
    </div>
  );
}
export default Teachers;
