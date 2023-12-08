import React, { useContext, useState } from "react";
import "../../styles/socials.css";
import banner from "../../assets/images/socials/banner.png";
import icon1 from "../../assets/images/socials/icon1.png";
import icon2 from "../../assets/images/socials/icon2.png";
import icon3 from "../../assets/images/socials/icon3.png";
import icon4 from "../../assets/images/socials/icon4.png";
import icon5 from "../../assets/images/socials/icon5.png";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { AuthContext } from "../../context/AuthContext";

import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import login from "../../assets/login.png";
import reg from "../../assets/reg.png";
import { Link } from "react-router-dom";
import { iSearch } from "../../utils/icons/global_icons";
import HeaderDrawer from "../../components/common-ui/header/HeaderDrawer";

const items = [icon1, icon2, icon3, icon4, icon5];

const Socials = () => {
  const { open, setOpen } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setLoggedIn(false);
    setOpen(!open);
  };
  return (
    <div className="wallpaper_bg">
      <br />
      <HeaderDrawer />
      <div className="container d-flex justify-content-between align-items-center my-3 w-100">
        <Link className="brand" to="/">
          WPS
        </Link>
        <div
          className="flex-grow d-flex align-items-center sm_none"
          style={{ gap: "22px" }}
        >
          <div className="social_search d-flex align-items-center flex-grow w-100">
            <button className="px-3">{iSearch}</button>
            <input
              className="w-100 flex-grow"
              type="search"
              placeholder="Find your next wallpaper..."
            />
          </div>
          <ul className="navBg d-flex justify-content-center gap-3 d-none d-md-inline-flex">
            <li className="accountParent">
              <Link className="nav-link" to="#">
                Account
              </Link>
              <div className="accountChild">
                {/* <div className="row navBorder"> */}
                <div
                  className={`row ${loggedIn ? "navBorder" : "login_padding"}`}
                >
                  <div className="col-6">
                    <div className="childInner d-flex flex-column gap-3 text-nowrap border_right">
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
                  <div className="col-6" s>
                    <div className="childInner d-flex flex-column gap-3 text-nowrap">
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
                  <button onClick={handleLogout} className="logoutBtn mx-auto">
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
              <Link className="nav-link" to="#">
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
          className="navbar-toggler d-md-none"
          type="button"
        >
          <span>
            <i className="fa fa-bars"></i>
          </span>
        </button>
      </div>
      <div className="container mx-auto socials-container">
        <h1 className="title">Socials</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />

        <div className="position-relative social_banner">
          <img src={banner} alt="" />
          <div className="socials-img-overlay"></div>
        </div>

        <section className="socials_images_container">
          {items?.map((item, index) => (
            <img key={index} src={item} className="w-100" alt="" />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Socials;
