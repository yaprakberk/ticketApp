import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MainRoutes } from "../constants/Routes";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <div className="img-container">
          {/* <img src={Logo} alt="logo" /> */}
          TODO logo koy
        </div>
        <NavLink className="link" to={MainRoutes.home}>
          Ana Sayfa
        </NavLink>
        <NavLink className="link" to={MainRoutes.about}>
          Hakkinda
        </NavLink>
        <NavLink className="link" to={MainRoutes.cancer}>
          Konser
        </NavLink>
        <NavLink className="link" to={MainRoutes.theatre}>
          Tiyatro
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
