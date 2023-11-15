import React, { useState } from "react";
import "./Wallpaper.css";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import left_light from "../../assets/left_light.png";
import filter_alt from "../../assets/filter_alt.png";
import photo_library from "../../assets/photo_library.png";
import likedgray from "../../assets/likedgray.png";
import wallpaper from "../../assets/wallpaper.png";
import wallpaper1 from "../../assets/wallpaper1.png";
import wallpaper2 from "../../assets/wallpaper2.png";
import Moon from "../../assets/Moon.png";
import downArrow from "../../assets/downArrow.png";
import arrow_down_light from "../../assets/arrow_down_light.png";
import library_add from "../../assets/library_add.png";
import { Link } from "react-router-dom";
import WallpaperSidebar from "../../components/wallpapers-ui/WallpaperSidebar";
import img from "../../assets/icons/mixer.png";
import Drawer from "../../components/common-ui/drawers/Drawer";
import { iDownload, iShare } from "../../utils/icons/global_icons";
import download from "../../assets/icons/download.svg";
const WallPaper = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="bgShadowTop">
        <section>
          <div className="custom_Container">
            <div className="d-flex justify-content-center align-items-start gap-2 all_mb">
              <div className="d-none d-md-block">
                <WallpaperSidebar />
              </div>
              <div className="wallpaper fontBak d-flex justify-content-end align-items-start pt-2 pe-2 position-relative">
                {/* <img className="img-fluid" src={wallpaper} alt="WallPaper" /> */}
                <div
                  className="btnPosition d-flex justify-content-end align-items-center gap-3 p-1"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.60)",
                    width: "fit-content",
                  }}
                >
                  <img
                    onClick={() => setOpen(!open)}
                    className="d-md-none"
                    style={{ width: "57px" }}
                    src={img}
                    alt=""
                  />
                  <div className="addLibrary">
                    <button>
                      <span>
                        <img src={library_add} alt="Add Library" />
                      </span>
                    </button>
                    <div className="libraryOption">
                      <div className="searchWallpaper mb-4">
                        <input
                          className="fontBak w-100"
                          type="search"
                          placeholder="Search Collections"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-start align-items-start gap-1">
                        <button className="fontBak">
                          <img
                            className="img-fluid"
                            src={photo_library}
                            alt="img"
                          />
                          Call of Duty
                        </button>
                        <hr className="w-100" />
                        <button className="fontBak">
                          <img src={photo_library} alt="img" />
                          World of Warcraft
                        </button>
                        <hr className="w-100" />
                        <button className="fontBak">
                          <img src={photo_library} alt="img" />
                          League of Legends
                        </button>
                        <hr className="w-100" />
                        <button className="fontBak">
                          <img src={photo_library} alt="img" />
                          Anime
                        </button>
                        <hr className="w-100" />
                        <button className="fontBak">
                          <img src={photo_library} alt="img" />
                          Landscapes
                        </button>
                        <hr className="w-100" />
                      </div>
                    </div>
                  </div>
                  <button className="like">
                    <span>
                      <img src={likedgray} alt="Liked" />
                    </span>
                  </button>
                </div>
                <div
                  className="w-100 position-absolute d-flex justify-content-between px-4 align-items-center"
                  style={{ bottom: "10px" }}
                >
                  <div className="home-bb">
                    {" "}
                    <img style={{ width: "100%" }} src={download} alt="" />
                  </div>
                  <div className="home-bb">{iShare}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container custom_Container">
        <h3 className="all_mb">You may also like</h3>
        <div className="row gy-4 mb-4">
          <div className="col-4 px-1 px-md-2">
            <div className="w-100">
              <Link to="/">
                <img
                  className="w-image img-fluid w-100"
                  src={wallpaper}
                  alt="img"
                />
              </Link>
            </div>
          </div>
          <div className="col-4 px-1 px-md-2">
            <div className="w-100">
              <Link to="/">
                <img
                  className="w-image img-fluid w-100"
                  src={wallpaper1}
                  alt="img"
                />
              </Link>
            </div>
          </div>
          <div className="col-4 px-1 px-md-2">
            <div className="w-100">
              <Link to="/">
                <img
                  className="w-image img-fluid w-100"
                  src={wallpaper2}
                  alt="img"
                />
              </Link>
            </div>
          </div>
        </div>
        <span className="d-block text-center">
          <button className="viewProfile px-3" style={{ fontSize: "12px" }}>
            View More
          </button>
        </span>
      </div>

      <Drawer
        open={open}
        setOpen={setOpen}
        {...{
          scroll: false,
          backdrop: false,
        }}
      >
        <WallpaperSidebar />
      </Drawer>
    </div>
  );
};

export default WallPaper;
