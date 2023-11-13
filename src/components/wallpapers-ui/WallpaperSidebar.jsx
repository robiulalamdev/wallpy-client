import React from "react";
import profile from "../../assets/profile.png";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import filter_alt from "../../assets/filter_alt.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import { Link } from "react-router-dom";

const WallpaperSidebar = () => {
  return (
    <div className="sideBar fontBak h-100">
      <p className="text-center mb-3">Posted by</p>
      <div className="d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="text-center" style={{ height: "75px", width: "75px" }}>
          <img className="sideImgPro" src={profile} alt="Profile Image" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <h3>
            krs
            <img src={Verified} alt="Verified" />
          </h3>
          <div className="d-flex justify-content-center gap-3 align-items-center mb-4">
            <Link to="/">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link to="/">
              <img src={behance} alt="Behance" />
            </Link>
            <Link to="/">
              <img src={dribble} alt="Dribble" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="Instragram" />
            </Link>
          </div>
          <Link className="viewProfile" to="#" style={{ fontSize: "10px" }}>
            View Profile
          </Link>
        </div>
      </div>
      <hr />

      <div className="d-flex flex-column align-items-center gap-1 mb-3">
        <p style={{ color: "#ccc" }}>Dimensions</p>
        <p>3840 x 2160</p>
        <div>
          <p style={{ color: "#ccc", fontSize: "12px" }}>
            Size Configuration
            <img src={filter_alt} alt="img" />
          </p>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-center mb-2" style={{ color: "#ccc" }}>
          Tag
        </p>
        <p
          className="text-center"
          style={{ color: "#FDF516", fontSize: "12px" }}
        >
          SFW
        </p>
        <div className="tag">
          <span>#cod</span>
          <span>#callofduty</span>
          <span>#ghost</span>
          <span> #gaming</span>
          <span> #wallpaper</span>
          <span>#illustration</span>
          <span>#shooter</span>
          <span>#mw2</span>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-center mb-2" style={{ color: "#ccc" }}>
          Statistics & Information
        </p>
        <div className="info d-flex justify-content-between gap-4">
          <div>
            <p>
              Views: <span>8947</span>
            </p>
            <p>
              Category:: <span>Gaming</span>
            </p>
          </div>
          <div>
            <p>
              Favorites:: <span>1489</span>
            </p>
            <p>
              Size:: <span>12.2MB</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-center mb-3" style={{ color: "#ccc" }}>
          Credits
        </p>
        <div className="info">
          <p>Source:</p>
          <p>Original Author:</p>
        </div>
      </div>

      <div className="text-center mb-4">
        <button className="downLoadBtn">
          Download
          <img src={arrow_down_light} alt="" />
        </button>
      </div>

      <div className="ownerShip d-flex flex-column gap-4">
        <p
          className="text-center"
          style={{ color: "#5A5A5A", fontSize: "12px" }}
        >
          Ownership of all images belongs to their respective original owners &
          illustrators.
        </p>
        <div className="listBtn d-flex justify-content-center align-items-center gap-3">
          <button className="text-white">Claim Listing</button>
          <button className="text-white">Remove Listing</button>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default WallpaperSidebar;
