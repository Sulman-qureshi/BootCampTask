import Card from "./Card";
function Courses() {
  return (
    <div>
      <h1 style={{ marginLeft: "120px" }}>The New Course</h1>
      <div className="container text-center">
        <div className="row align-items-start">
          <Card
            url="https://geeks-nextjs.vercel.app/images/course/course-laravel.jpg"
            title="Laravel Ultimate Guide to Beginner"
          />
          <Card
            url="https://geeks-nextjs.vercel.app/images/course/course-node.jpg"
            title="Beginning Nodejs, Express &amp; MongoDB"
          />
          <Card
            url="https://geeks-nextjs.vercel.app/images/course/course-angular.jpg"
            title="Angular The Complete Guide"
          />
          <Card
            url="https://geeks-nextjs.vercel.app/images/course/course-react.jpg"
            title="Reactjs Complete Guide"
          />
        </div>
      </div>
    </div>
  );
}
export default Courses;
