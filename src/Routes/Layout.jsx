import { NavLink, Outlet } from 'react-router-dom';
import '../Styles/Layout.css';

const Layout = () => (
  <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg  bg-secondary bg-gradient">
      <div className="container-fluid">
        <NavLink className="h1 title" to="/">Math Magicians Assignment</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li >
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li >
              <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            </li>
            <li >
              <NavLink className="nav-link" to="/qoute">Quote</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <Outlet />
    </div>
  </div>
);
export default Layout;
