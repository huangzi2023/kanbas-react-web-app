import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbGripVertical } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
            <button className="btn btn-success" onClick={handleAddModule}>
              Add
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={() => handleUpdateModule()}
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
                onClick={() => handleDeleteModule(module._id)}
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
