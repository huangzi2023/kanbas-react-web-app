import db from "../../Kanbas/Database";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { RxHamburgerMenu } from "react-icons/rx";
import "../index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  const pathArray = pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1];

  return (
    <div>
      <h1 className="wd-breadcrumb-h1">
        <div className="d-flex align-items-center bg-white">
          <button className="wd-hamburger-button">
            <RxHamburgerMenu />
          </button>
          <nav id="wd-bread" aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item" aria-current="page">
                <Link
                  to={`/Kanbas/Courses/${courseId}`}
                  className="wd-bread-item"
                >
                  {course.number}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {currentPath}
              </li>
            </ol>
          </nav>
        </div>
      </h1>
      <hr />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
