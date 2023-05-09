import "../css/calendar.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="navigator">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-objective">New objective</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
