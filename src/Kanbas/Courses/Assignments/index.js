import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import db from "../../Database";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { TbGripVertical } from "react-icons/tb";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="wd-assignment-list">
      <h2>Assignments for course {courseId}</h2>
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-secondary">
        <div className="d-flex align-items-center">
          <TbGripVertical />
          <RiArrowDropDownFill />
          <p className="wd-assignment-title mt-3">Assignments</p>
        </div>

        <div className="d-flex align-items-center">
          <p className="wd-assignment-percentage mx-2">40% of Total</p>
          <AiOutlinePlus />
          <HiMiniEllipsisVertical className="mx-1" />
        </div>
      </div>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-assignment-item"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <TbGripVertical />
                {assignment.title}
              </div>
              <div>
                <AiOutlineCheckCircle style={{color: "green"}}/>
                <HiMiniEllipsisVertical />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
