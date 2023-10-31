import React from "react";
import { useParams } from "react-router-dom";
import { TbGripVertical } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group wd-module-list">
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(
                  setModule({
                    ...module,
                    name: e.target.value,
                  })
                )
              }
            />
            <textarea
              className="mx-1"
              value={module.description}
              onChange={(e) =>
                dispatch(
                  setModule({
                    ...module,
                    description: e.target.value,
                  })
                )
              }
            />
          </div>
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch(addModule({ ...module, course: courseId }));
              }}
            >
              Add
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
          </div>
        </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item list-group-item-secondary">
            <h4>
              <TbGripVertical />
              {module.name}
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                className="btn btn-success mx-1"
                onClick={() => {
                  dispatch(setModule(module));
                }}
              >
                Edit
              </button>
            </h4>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
