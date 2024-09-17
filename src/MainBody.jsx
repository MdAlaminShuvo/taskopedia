import Student from "./Student";
import StudentReview from "./StudentReview";

function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLecture = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this section, we will learn {whatWeWillLearn} by building TaskOPedia!{" "}
        <br />
        Total Lecture - {totalLecture}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
          Enter Task :{" "}
          <input maxLength={5} readOnly={false} placeholder="Ben"></input>
        </div>
        <br /> */}
      <div className="container row">Students Enrolled</div>
      <Student
        experience={2}
        name="Kris Walley"
        headshot="https://api.lorem.space/image/face?w=150&h=151"
      >
        <StudentReview />
      </Student>
      <Student
        experience={3}
        name="Sayem Abedin"
        headshot="https://api.lorem.space/image/game?w=150&h=220"
      >
        <StudentReview />
      </Student>
      <Student
        experience={5}
        name="Jewel Rana"
        headshot="https://api.lorem.space/image/face?w=150&h=150"
      />
    </div>
  );
}

export default MainBody;
