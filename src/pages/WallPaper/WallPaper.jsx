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
import { add_box, iDownload, iShare } from "../../utils/icons/global_icons";
import download from "../../assets/icons/download.svg";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
const items = [
  { id: 1, name: "Call of Duty" },
  { id: 2, name: "World of Warcraft" },
  { id: 3, name: "League of Legends" },
  { id: 4, name: "Anime" },
  { id: 5, name: "Landscapes" },
];

const WallPaper = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="wallpaper_bg">
      <Header />
      <div className="container">
        <div className="custom_Container">
          <div className="d-flex justify-content-center align-items-start gap-3 all_mb">
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
                    <div className="search-collections justify-content-between d-flex align-items-center gap-2">
                      <input
                        className="flex-grow w-100 px-1"
                        type="search"
                        placeholder="Search Collections"
                      />
                      <button>{add_box}</button>
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      {items?.map((item, index) => (
                        <button
                          key={index}
                          className="collection-list border-bottom w-100"
                        >
                          <img
                            className="img-fluid"
                            src={photo_library}
                            alt="img"
                          />
                          {item?.name}
                        </button>
                      ))}
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
                className="w-100 position-absolute d-flex justify-content-between align-items-center"
                style={{ bottom: "10px" }}
              >
                <div className="home-bb" style={{ paddingLeft: "40px" }}>
                  <img src={download} alt="" />
                </div>
                <div className="home-bb">{iShare}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container custom_Container">
        <h3 className="all_mb">You may also like</h3>
        <div className="w_also_like_container mb-4">
          <Link to="/">
            <img
              className="w-image img-fluid w-100"
              src={wallpaper}
              alt="img"
            />
          </Link>
          <Link to="/">
            <img
              className="w-image img-fluid w-100"
              src={wallpaper1}
              alt="img"
            />
          </Link>
          <Link to="/">
            <img
              className="w-image img-fluid w-100"
              src={wallpaper2}
              alt="img"
            />
          </Link>
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
        bgColorCode="#121212"
        {...{
          scroll: false,
          backdrop: false,
        }}
      >
        <WallpaperSidebar bgColorCode="#121212" />
      </Drawer>
      <Footer />
    </div>
  );
};

export default WallPaper;
