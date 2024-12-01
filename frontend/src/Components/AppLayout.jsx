import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div>
      <div>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
