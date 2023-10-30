import { BsCheckCircle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

export const TopButtons = () => {
  return (
    <div className="d-flex pt-3 pb-3 justify-content-end">
      <button type="button" className="btn btn-outline-secondary">
        Collapse All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        View Progress
      </button>

      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsCheckCircle style={{ color: "#11ff00" }} />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Publish all items and modules
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Unpulish
            </a>
          </li>
        </ul>
      </div>
      <button type="button" className="btn btn-danger">
        <AiOutlinePlus style={{ color: "#ffffff" }} />
        Module
      </button>
      <button type="button" className="btn btn-outline-secondary">
        <HiMiniEllipsisVertical />
      </button>
    </div>
  );
};
