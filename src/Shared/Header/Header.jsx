import React, { useState } from "react";
import "./Header.css";

import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import login from "../../assets/login.png";
import reg from "../../assets/reg.png";
import logo from "../../assets/icons/logo.gif";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Offcanvas } from "react-bootstrap";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // JSON.parse(localStorage.getItem("loggedIn"))

  const handleLogout = () => {
    // Update the value in localStorage
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="d-flex align-items-center gap-4">
          <Link class="navbar-brand" to="/">
            WPS
          </Link>
          <div
            class="searchNav d-none d-md-inline-flex"
            style={{ width: "350px" }}
          >
            <input
              className="w-100"
              type="search"
              placeholder="Find your next wallpaper..."
            />
          </div>
          <ul class="navBg d-flex justify-content-center gap-3 d-none d-md-inline-flex">
            <li class="accountParent">
              <Link class="nav-link" to="#">
                Account
              </Link>
              <div class="accountChild">
                {/* <div class="row navBorder"> */}
                <div class={`row ${loggedIn ? "navBorder" : "login_padding"}`}>
                  <div class="col-6">
                    <div class="childInner d-flex flex-column gap-3 text-nowrap border_right">
                      {!loggedIn && (
                        <Link to="/login">
                          {" "}
                          <img src={login} alt="Logout" />
                          Login
                        </Link>
                      )}
                      {loggedIn && (
                        <>
                          <Link to="profile">Profile</Link>
                          <Link to="#">Favorites</Link>
                          <Link to="#">Collections</Link>
                        </>
                      )}
                    </div>
                  </div>
                  <div class="col-6" s>
                    <div class="childInner d-flex flex-column gap-3 text-nowrap">
                      {!loggedIn && (
                        <Link to="/register">
                          {" "}
                          <img src={reg} alt="Logout" /> Register
                        </Link>
                      )}
                      {loggedIn && (
                        <>
                          <Link to="#">Messages</Link>
                          <Link to="#">The Vault</Link>
                          <Link to="setting">Settings</Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {loggedIn && (
                  <button onClick={handleLogout} class="logoutBtn mx-auto">
                    <img src={logout} alt="Logout" className="me-2" />
                    Log Out
                  </button>
                )}
              </div>
            </li>
            <li>
              <span className="border_right"></span>
            </li>
            <li>
              <Link class="nav-link" to="#">
                Upload
              </Link>
            </li>
          </ul>
        </div>
        <img
          className="logo-img d-none d-md-inline-flex"
          src={profile}
          alt=""
        />
        <button
          onClick={() => setOpen(!open)}
          class="navbar-toggler d-md-none"
          type="button"
        >
          <span>
            <i class="fa fa-bars"></i>
          </span>
        </button>
      </div>
      <Offcanvas
        show={open}
        onHide={() => setOpen(false)}
        className="h-100 w-100"
        {...{
          scroll: false,
          backdrop: false,
        }}
        style={{ backgroundColor: "#121212", zIndex: 99999999 }}
      >
        <Offcanvas.Body
          className="h-100 w-100"
          style={{ backgroundColor: "#121212" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <Link class="navbar-brand" to="/">
              <img className="logo-img" src={logo} alt="" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className=""
              style={{ width: "40px", height: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <g clip-path="url(#clip0_127_330)">
                  <path
                    d="M11.3513 17.5387L12.9375 19.125L18.5625 13.5L12.9375 7.875L11.3513 9.46125L14.2537 12.375H3.375V14.625H14.2537L11.3513 17.5387ZM21.375 3.375H5.625C4.37625 3.375 3.375 4.3875 3.375 5.625V10.125H5.625V5.625H21.375V21.375H5.625V16.875H3.375V21.375C3.375 22.6125 4.37625 23.625 5.625 23.625H21.375C22.6125 23.625 23.625 22.6125 23.625 21.375V5.625C23.625 4.3875 22.6125 3.375 21.375 3.375Z"
                    fill="#D9D9D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_127_330">
                    <rect width="27" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
