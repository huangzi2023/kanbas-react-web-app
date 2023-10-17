import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { TopButtons } from "./TopButtons";
import "../index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-page-container">
      <TopButtons />
      <h2>{assignment.title}</h2>
      <div className="wd-assignment-edit">
        <input value={assignment.title} className="form-control mb-2" />
        <textarea class="form-control">
          This is the assignment description
        </textarea>
        <div class="col">
          <div class="d-flex justify-content-center align-items-center">
            <div class="m-1">
              <label for="wd-assignment-edit-points">Points</label>
            </div>
            <input
              type="text"
              class="form-control wd-assignment-edit-inputs"
              value="100"
            />
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <div class="m-1">
              <label for="wd-assignment-edit-points">Assignment Group</label>
            </div>
            <select class="form-control wd-assignment-edit-inputs">
              <option>ASSIGNMENTS</option>
            </select>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <div class="m-1">
              <label for="wd-assignment-edit-points">Display Grade As</label>
            </div>
            <select class="form-control wd-assignment-edit-inputs">
              <option>Percentage</option>
              <option>GPA</option>
            </select>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <input type="checkbox" id="wd-assignment-edit-count-final-grade" />
            <div class="d-flex align-items-center m-1">
              <label for="wd-assignment-edit-count-final-grade">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <div>
              <label for="wd-assignment-edit-input-box">Submission Type</label>
            </div>
            <div class="wd-assignment-edit-input-box m-1 p-3">
              <select class="form-control">
                <option>Online</option>
                <option>In-Person</option>
              </select>
              {/* <p style={"padding: 10px; font-weight: bold"}> */}
              <p style={{ padding: "10px", fontWeight: "bold" }}>
                Online Entry Options
              </p>
              <ul>
                <li>
                  <input type="checkbox" id="wd-text-entry-box" checked />
                  <label for="wd-text-entry-box">Text Entry</label>
                </li>

                <li>
                  <input type="checkbox" id="wd-website-url-box" checked />
                  <label for="wd-website-url-box">Website URL</label>
                </li>
                <li>
                  <input type="checkbox" id="wd-media-recording-box" checked />
                  <label for="wd-media-recording-box">Media Recordings</label>
                </li>
                <li>
                  <input type="checkbox" id="wd-student-annotation-box" />
                  <label for="wd-student-annotation-box">
                    Student Annotation
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="wd-file-uploads-box" />
                  <label for="wd-file-uploads-box">File Uploads</label>
                </li>
              </ul>
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <div class="wd-submission-type-label">
              <label for="wd-submission-type-box"> Assign </label>
            </div>

            <div class="row m-1 wd-assignment-edit-input-box m-1 p-3">
              <div class="col">
                <div class="row d-flex justify-content-center">
                  <p>Assign to</p>
                  <input
                    type="text"
                    class="form-control wd-assign-two"
                    placeholder="Everyone"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="row d-flex justify-content-center">
                  <p>Due</p>
                  <input
                    type="datetime-local"
                    class="wd-assign-two form-control"
                    value="2023-10-03T23:59"
                  />
                </div>
                <div class="row">
                  <div class="col col-6">
                    <p>Available from</p>
                    <input
                      type="datetime-local"
                      class="form-control"
                      value="2023-10-03T23:59"
                    />
                  </div>
                  <div class="col col-6">
                    <p>Until</p>
                    <input type="datetime-local" class="form-control" />
                  </div>
                </div>
                <div class="row" id="wd-add-button">
                  <button type="button" class="btn btn-secondary">
                    <i class="fa fa-plus">Add</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="wd-notify" />
              <label for="wd-notify">
                Notify users that this content has changed
              </label>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
