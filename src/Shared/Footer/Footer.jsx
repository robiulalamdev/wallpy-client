import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "transparent" }}>
        <div className="container" style={{ backgroundColor: "transparent" }}>
          <div className="row gy-2 text-start">
            <div className="col-12 col-md-6">
              <p className="footer-title">THE WALLPAPER SOCIETY</p>
            </div>
            <div className="col-6 col-md-2 footer-links">
              <ul>
                <li>Navigation</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Account</Link>
                </li>
                <li>
                  <Link to="/">Favorites</Link>
                </li>
                <li>
                  <Link to="/">Messages</Link>
                </li>
                <li>
                  <Link to="/">Site Map</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 footer-links">
              <ul>
                <li>The Society</li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Copyright Information</Link>
                </li>
                <li>
                  <Link to="/">Socials</Link>
                </li>
                <li>
                  <Link to="/">Sponsors / Advertisers</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footerBottom d-flex justify-content-center align-items-center flex-wrap gap-4">
            <span className="d-none d-md-block">© The Wallpapers Society</span>
            <span className="d-md-none">The WPS</span>
            <span>
              <Link to="/">Community Rules</Link>
            </span>
            <span>
              <Link to="/">Privacy Policy</Link>
            </span>
            <span>
              <Link to="/">Terms and Conditions</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
