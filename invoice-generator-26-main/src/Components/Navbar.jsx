import React from "react";
import Container from "./Container";
import IGNavlink from "./IGNavlink";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIN");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  const isUserLoggedIn = () => {
    return localStorage.getItem("isLoggedIN") === "true";
  };
  return (
    <>
      <div className="bg-emerald border-b">
        <Container>
          <div className="flex items-center justify-between h-15 ">
            <a
              className="font-bold text-2xl hover:cursor-default "
              onClick={handleLogoClick}
              href="/"
            >
              Invoice<span className="text-emerald-500">Gen</span>
            </a>
            <div className="flex items-center justify-between">
              <IGNavlink to="/"> Home </IGNavlink>
              {isUserLoggedIn() ? (
                <>
                  <IGNavlink to="/about"> About </IGNavlink>
                  <IGNavlink to="/create-invoice"> Create Invoice </IGNavlink>
                  <IGNavlink to="/my-invoices"> My Invoices </IGNavlink>
                  <IGNavlink to="/profile"> Profile </IGNavlink>
                  <IGNavlink to="/contact-us"> Contact us </IGNavlink>
                </>
              ) : (
                <>
                  <IGNavlink to="/login"> Login </IGNavlink>
                  <IGNavlink to="/register"> Register </IGNavlink>
                </>
              )}
              <form action="">
                {isUserLoggedIn() ? (
                    <button
                    className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md transition-colors"
                    onClick={handleLogOut}
                  >
                    {" "}
                    Log Out{" "}
                  </button>
                ) : null}
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
