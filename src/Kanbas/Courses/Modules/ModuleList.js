import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { TbGripVertical } from "react-icons/tb";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-module-list">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item list-group-item-secondary">
            <h4><TbGripVertical />{module.name}</h4>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
