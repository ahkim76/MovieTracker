import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../App.css";
function AppLayout() {
  return (
    <div>
      <div>
        <Sidebar />
        <main className="mainContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
