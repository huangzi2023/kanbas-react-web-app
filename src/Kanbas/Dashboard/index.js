import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "../index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <div className="wd-page-container">
        <h1>Dashboard</h1>
        <hr />
        <div className="wd-courses-wrapper">
          <h2 className="m-2 p-0">Published Courses({courses.length})</h2>
          <hr />

          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button onClick={addNewCourse} className="btn btn-secondary">
            Add
          </button>
          <button onClick={updateCourse} className="btn btn-success mx-1">
            Update
          </button>

          <div className="wd-cards d-flex flex-row justify-content-around flex-wrap col-8">
            {courses.map((course) => {
              return (
                <div className="course-card">
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
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
                        <button
                          className="btn btn-success mx-1"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
