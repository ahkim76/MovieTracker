import { NavLink, useLocation } from "react-router-dom";
import "../App.css";
function Sidebar() {
  const location = useLocation();
  return (
    <ul className="sidebar">
      <li>
        <NavLink to="/main">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/movie-search">
          <span>Movie Search</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
