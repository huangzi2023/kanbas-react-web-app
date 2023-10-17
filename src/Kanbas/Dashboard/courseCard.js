import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`}>
        <div className="card">
          <img
            className="card-img-top"
            src="../Images/course.jpg"
            alt="Course images"
          />
          <div className="card-body">
            <h3 className="card-title">{course.name}</h3>
            <p className="card-text">
              This class starts on: {course.startDate} <br />
              ends on: {course.endDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CourseCard;
