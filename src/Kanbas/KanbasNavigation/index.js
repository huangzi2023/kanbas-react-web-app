import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiHistory, BiHelpCircle } from "react-icons/bi";
import { RiDashboard3Fill, RiInboxArchiveLine } from "react-icons/ri";
import { FaBook, FaCuttlefish } from "react-icons/fa";
import {
  BsFillCalendar2WeekFill,
  BsFillCollectionPlayFill,
} from "react-icons/bs";
import { TbMapNorth } from "react-icons/tb";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <RiInboxArchiveLine className="wd-icon" />,
    History: <BiHistory className="wd-icon" />,
    Studio: <BsFillCollectionPlayFill className="wd-icon" />,
    Commons: <FaCuttlefish className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };
  const { pathname } = useLocation();

  return (
    <nav className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
      <Link to="/Kanbas/">
        <TbMapNorth className="wd-icon" size={40}/>
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link !== "Home" ? link : null}
        </Link>
      ))}
    </nav>
  );
}
export default KanbasNavigation;
