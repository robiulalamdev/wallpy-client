import React, { useState } from "react";
import "./Header.css";

import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import login from "../../assets/login.png";
import reg from "../../assets/reg.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );

  const handleLogout = () => {
    // Update the value in localStorage
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setLoggedIn(false);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand" to="/">
            WPS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fa fa-bars"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <form class="d-flex">
                  <div class="searchNav">
                    <input
                      class="w-100"
                      type="search"
                      placeholder="Find your next wallpaper..."
                    />
                  </div>
                </form>
              </li>
              <li class="nav-item">
                <ul class="navBg d-flex justify-content-center gap-3">
                  <li class="accountParent">
                    <Link class="nav-link" to="#">
                      Account
                    </Link>
                    <div class="accountChild">
                      {/* <div class="row navBorder"> */}
                      <div
                        class={`row ${
                          loggedIn ? "navBorder" : "login_padding"
                        }`}
                      >
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
                        <button
                          onClick={handleLogout}
                          class="logoutBtn mx-auto"
                        >
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
              </li>
            </ul>

            {loggedIn ? (
              <div class="profileMenu">
                <button>
                  <img src={logout} alt="Logout" />
                </button>

                <Link to="/" class="lock">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1651_1279)">
                        <path
                          d="M15.0002 6.66634H14.1668V4.99967C14.1668 2.69967 12.3002 0.833008 10.0002 0.833008C7.70016 0.833008 5.8335 2.69967 5.8335 4.99967V6.66634H5.00016C4.0835 6.66634 3.3335 7.41634 3.3335 8.33301V16.6663C3.3335 17.583 4.0835 18.333 5.00016 18.333H15.0002C15.9168 18.333 16.6668 17.583 16.6668 16.6663V8.33301C16.6668 7.41634 15.9168 6.66634 15.0002 6.66634ZM10.0002 14.1663C9.0835 14.1663 8.3335 13.4163 8.3335 12.4997C8.3335 11.583 9.0835 10.833 10.0002 10.833C10.9168 10.833 11.6668 11.583 11.6668 12.4997C11.6668 13.4163 10.9168 14.1663 10.0002 14.1663ZM12.5835 6.66634H7.41683V4.99967C7.41683 3.57467 8.57516 2.41634 10.0002 2.41634C11.4252 2.41634 12.5835 3.57467 12.5835 4.99967V6.66634Z"
                          fill="#D9D9D9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1651_1279">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link to="/" class="favourite">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1651_1280)">
                        <path
                          d="M9.99984 17.7917L8.7915 16.6917C4.49984 12.8 1.6665 10.2333 1.6665 7.08333C1.6665 4.51667 3.68317 2.5 6.24984 2.5C7.69984 2.5 9.0915 3.175 9.99984 4.24167C10.9082 3.175 12.2998 2.5 13.7498 2.5C16.3165 2.5 18.3332 4.51667 18.3332 7.08333C18.3332 10.2333 15.4998 12.8 11.2082 16.7L9.99984 17.7917Z"
                          fill="#D9D9D9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1651_1280">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link to="accountSetting" class="accSetting">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1651_1277)">
                        <path
                          d="M9.99984 1.66699C5.39984 1.66699 1.6665 5.40033 1.6665 10.0003C1.6665 14.6003 5.39984 18.3337 9.99984 18.3337C14.5998 18.3337 18.3332 14.6003 18.3332 10.0003C18.3332 5.40033 14.5998 1.66699 9.99984 1.66699ZM9.99984 4.16699C11.3832 4.16699 12.4998 5.28366 12.4998 6.66699C12.4998 8.05033 11.3832 9.16699 9.99984 9.16699C8.6165 9.16699 7.49984 8.05033 7.49984 6.66699C7.49984 5.28366 8.6165 4.16699 9.99984 4.16699ZM9.99984 16.0003C7.9165 16.0003 6.07484 14.9337 4.99984 13.317C5.02484 11.6587 8.33317 10.7503 9.99984 10.7503C11.6582 10.7503 14.9748 11.6587 14.9998 13.317C13.9248 14.9337 12.0832 16.0003 9.99984 16.0003Z"
                          fill="#D9D9D9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1651_1277">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link to="/profile">
                  <div class="profileImg text-center">
                    <img src={profile} alt="Profile Image" />
                  </div>
                </Link>
              </div>
            ) : (
              <div class="profileImg text-center">
                <img src={profile} alt="Profile Image" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
