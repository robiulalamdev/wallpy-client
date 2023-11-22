import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { iDrawerBack } from "../../utils/icons/global_icons";
import SearchPageFilter3Tab from "./SearchPageFilter3Tab";
import desktop_windows from "../../assets/desktop_windows.png";
import devices_other from "../../assets/devices_other.png";
import phone_iphone from "../../assets/phone_iphone.png";
import tablet_mac from "../../assets/tablet_mac.png";
import videogame_asset from "../../assets/videogame_asset.png";
import autorenew from "../../assets/autorenew.png";
import { arrow_drop_down } from "../../utils/icons/global_icons";

const SearchPageSidebar = ({ open, setOpen, children, ...props }) => {
  const [sfwTab, setSfwTab] = useState(0);
  return (
    <Offcanvas
      show={open}
      onHide={() => setOpen(false)}
      className="h-100"
      {...props}
      style={{ backgroundColor: "#121212", zIndex: 99999999 }}
    >
      <Offcanvas.Body className="h-100" style={{ backgroundColor: "#121212" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="wallpaper-setting-title">Wallpapers Settings</h1>
          <button
            onClick={() => setOpen(false)}
            className=""
            style={{ width: "40px", height: "40px" }}
          >
            {iDrawerBack}
          </button>
        </div>
        <SearchPageFilter3Tab
          style={{ backgroundColor: "#313131", marginTop: "20px" }}
        />
        <div
          className="td-tab-container d-flex justify-content-around align-items-center mx-auto mt-4"
          style={{ backgroundColor: "#313131" }}
        >
          {["SFW", "NSFW"]?.map((t, i) => (
            <button
              onClick={() => setSfwTab(i)}
              className={`${
                sfwTab === i
                  ? `td-tab-active-btn ${
                      sfwTab === 0 ? "acs-btn-bg-visible" : "td-tab-btn-bg-hide"
                    }`
                  : "td-tab-dactive-btn"
              }`}
              key={i}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="row mx-auto gy-4 mt-4">
          <div className="filter-btns col-6 px-1">
            <div className="resParent">
              <button
                className="filter-dropdown mx-auto"
                style={{ backgroundColor: "#313131" }}
              >
                <span>Resolution</span>
                {arrow_drop_down}
              </button>
              <div
                className="resChild p-1 w-100"
                style={{ maxWidth: "380px", minWidth: "315px" }}
              >
                <div className="d-flex justify-content-center align-items-start flex-wrap gap-1 mb-4 w-100">
                  <div className="d-flex flex-column align-items-center gap-2">
                    <p className="text-nowrap">Ultra Wide</p>
                    <button>2560 × 1080</button>
                    <button>3440 × 1440</button>
                    <button>3840 × 1600</button>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <p>16:9</p>
                    <button>1280 × 720</button>
                    <button>1600 × 900</button>
                    <button>1920 × 1080</button>
                    <button>2560 × 1440</button>
                    <button>3840 × 2160</button>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <p>16:10</p>
                    <button>1280 × 800</button>
                    <button>1600 × 1000</button>
                    <button>1920 × 1200</button>
                    <button>2560 × 1600</button>
                    <button>3840 × 2400</button>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <p>4:3</p>
                    <button>1280 × 960</button>
                    <button>1600 × 1200</button>
                    <button>1920 × 1440</button>
                    <button>2560 × 1920</button>
                    <button>3840 × 2880</button>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <p>16:9</p>
                    <button>1280 × 1024</button>
                    <button>1600 × 1280</button>
                    <button>1920 × 1536</button>
                    <button>2560 × 2048</button>
                    <button>3840 × 3072</button>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-white mb-1">Auto Detection</p>
                  <p className="text-white">
                    Your screen resolution is 1920 × 1080.
                  </p>
                </div>
                <p className="text-white mb-2">Custom Resolution</p>
                <form action="">
                  <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                    <input type="text" name="width" placeholder="Width" />
                    <input type="text" name="height" placeholder="Height" />
                  </div>
                  <button className="searchBtn">Search</button>
                </form>
              </div>
            </div>
          </div>
          <div className="filter-btns col-6 px-1">
            <div className="resParent">
              <button
                className="filter-dropdown mx-auto"
                style={{ backgroundColor: "#313131" }}
              >
                <span>Screen Type</span>
                {arrow_drop_down}
              </button>
              <div
                className="resChild-sidebar lgFont deviceBtn p-1"
                style={{
                  left: 0,
                }}
              >
                <div className="d-flex justify-content-center flex-wrap align-items-start gap-2 p-1">
                  <button>
                    <img className="me-1" src={desktop_windows} alt="Desktop" />
                    Desktop
                  </button>
                  <button>
                    <img className="me-1" src={phone_iphone} alt="Phones" />
                    Phones
                  </button>
                  <button>
                    <img className="me-1" src={tablet_mac} alt="Tablets" />
                    Tablets
                  </button>
                  <button>
                    <img
                      className="me-1"
                      src={videogame_asset}
                      alt="Handhelds"
                    />
                    Handhelds
                  </button>
                  <button>
                    <img className="me-1" src={devices_other} alt="Other" />
                    Other
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-btns col-6 px-1">
            <div className="resParent">
              <button
                className="filter-dropdown mx-auto"
                style={{ backgroundColor: "#313131" }}
              >
                <span>Sort By</span>
                {arrow_drop_down}
              </button>
              <div className="resChild">
                <div className="lgFont d-flex flex-column align-items-center gap-2">
                  <button style={{ background: "transparent" }}>Random</button>
                  <button style={{ background: "transparent" }}>Views</button>
                  <button style={{ background: "transparent" }}>
                    Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-btns col-6 px-1">
            <div className="resParent">
              <button
                className="filter-dropdown mx-auto"
                style={{ backgroundColor: "#313131" }}
              >
                <span>Upload Date</span>
                {arrow_drop_down}
              </button>

              <div className="resChild">
                <div className="lgFont d-flex flex-column align-items-center gap-2">
                  <button style={{ background: "transparent" }}>Today</button>
                  <button style={{ background: "transparent" }}>
                    This week
                  </button>
                  <button style={{ background: "transparent" }}>
                    This Month
                  </button>
                  <button style={{ background: "transparent" }}>
                    This year
                  </button>
                  <button style={{ background: "transparent" }}>
                    All time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 w-100">
          <button className="searchBtn">Save</button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchPageSidebar;