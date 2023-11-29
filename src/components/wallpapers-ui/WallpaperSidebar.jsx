import React, { useState } from "react";
import profile from "../../assets/images/profile.gif";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import filter_alt from "../../assets/filter_alt.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import { Link } from "react-router-dom";
import { redClose } from "../../utils/icons/global_icons";

const items = [
  {
    id: 1,
    section: "Ultra Wide",
    sizes: [
      { id: 1, size: "2560 × 1080" },
      { id: 2, size: "3440 × 1440" },
      { id: 3, size: "3840 × 1600" },
    ],
  },
  {
    id: 2,
    section: "4:3",
    sizes: [
      { id: 1, size: "1280 × 960" },
      { id: 2, size: "1600 × 1200" },
      { id: 3, size: "1920 × 1440" },
      { id: 4, size: "2560 × 1920" },
      { id: 5, size: "3840 × 2880" },
    ],
  },
  {
    id: 3,
    section: "16:9",
    sizes: [
      { id: 1, size: "1280 × 720" },
      { id: 2, size: "1600 × 900" },
      { id: 3, size: "1920 × 1080" },
      { id: 4, size: "2560 × 1440" },
      { id: 5, size: "3840 × 2160" },
    ],
  },
];

const WallpaperSidebar = () => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="sideBar fontBak h-100" style={{ minHeight: "802px" }}>
      <p className="text-center mb-3">Posted by</p>
      <div className="d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="w-profile-container">
          <img className="" src={profile} alt="Profile Image" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-0">
          <h3 className="w-profile-username">
            krs
            <img className="ms-1" src={Verified} alt="Verified" />
          </h3>
          {/* <div className="d-flex justify-content-center gap-3 align-items-center mb-4">
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
          </div> */}
          <Link to="/profile">
            <button className="w-viewProfileBtn">View Profile</button>
          </Link>
        </div>
      </div>
      <hr style={{ border: "1px solid #393939" }} />

      <div className="d-flex flex-column align-items-center gap-1 mb-3">
        <p style={{ color: "#ccc" }}>Dimensions</p>
        <p className="w-dimension">3840 x 2160</p>
        <div
          className="d-flex align-items-center gap-2"
          style={{ color: "#ccc", fontSize: "12px" }}
        >
          <p>Size Configuration</p>
          {selected ? (
            <img
              onClick={() => setSelected(!selected)}
              src={filter_alt}
              className="me-2 cursor-pointer"
              style={{ width: "20px" }}
              alt="img"
            />
          ) : (
            <div
              onClick={() => setSelected(!selected)}
              className="me-2 cursor-pointer"
            >
              {redClose}
            </div>
          )}
        </div>
      </div>

      {selected && (
        <>
          <div className="mb-3">
            <p className="text-center mb-2" style={{ color: "#ccc" }}>
              Tags
            </p>
            <p
              className="text-center"
              style={{ color: "#0AB745", fontSize: "12px" }}
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
              <div className="w-statistics-container">
                <p>
                  Views: <span>8947</span>
                </p>
                <p>
                  Category: <span>Gaming</span>
                </p>
              </div>
              <div className="w-statistics-container">
                <p>
                  Favorites: <span>1489</span>
                </p>
                <p>
                  Size: <span>12.2MB</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 ">
            <p className="text-center mb-3" style={{ color: "#ccc" }}>
              Credits
            </p>
            <div className="info w-statistics-container">
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
            <p className="text-center w-ownership-text">
              Ownership of all images belongs to their respective original
              owners & illustrators.
            </p>
            <div className="listBtn d-flex justify-content-center align-items-center gap-3">
              <button className="text-white">Claim Listing</button>
              <button className="text-white">Remove Listing</button>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3">
              <Link to="/" className="w-pt">
                Privacy Policy
              </Link>
              <Link to="/" className="w-pt">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </>
      )}

      {!selected && (
        <>
          <div className="d-flex justify-content-between w-100 gap-2">
            {items?.map((item, index) => (
              <div key={index}>
                <button className="size-title">{item?.section}</button>
                <div className="w-100">
                  {item?.sizes?.map((size, i) => (
                    <button key={i} className="size-btn mt-2">
                      {size?.size}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="my-3" style={{ border: "1px solid #5A5A5A" }} />
          <div className="d-flex flex-column align-items-center gap-4">
            <p className="text-center">Custom Resolution</p>
            <div className="wh-inputs">
              <input type="number" min={1} placeholder="Width" />
              <input type="number" min={1} placeholder="Height" />
            </div>
            <button className="generate-btn mx-auto">Generate</button>
          </div>
        </>
      )}
    </div>
  );
};

export default WallpaperSidebar;
