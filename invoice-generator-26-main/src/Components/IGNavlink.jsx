import React from "react";
import { NavLink } from "react-router-dom";

const IGNavlink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `px-4 py-2 hover:text-emerald-300 
      ${isActive ? "text-emerald-300" : ""}`}
    >
      {children}
    </NavLink>
  );
};
export default IGNavlink;
