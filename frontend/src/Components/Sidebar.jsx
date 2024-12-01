import { NavLink, useLocation } from "react-router-dom";
function Sidebar() {
  const location = useLocation();
  return (
    <ul>
      <li>
        <NavLink to="/main">
          <span>Home</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
