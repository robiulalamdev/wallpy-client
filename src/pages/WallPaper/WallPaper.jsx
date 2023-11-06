import React from "react";
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
// import downArrow from '../../assets/downArrow.png';
const WallPaper = () => {
  return (
    <>
      <div className="bgShadowTop">
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container custom_Container">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                  <li className="nav-item">
                    <form className="d-flex">
                      <div className="searchNav" style={{ maxWidth: "348px" }}>
                        <input
                          className="w-100"
                          type="search"
                          placeholder="Find your next wallpaper..."
                        />
                      </div>
                    </form>
                  </li>
                </ul>
                <div className="text-center">
                  <Link className="backBtn" to="/">
                    <img className="me-2" src={left_light} alt="Left Arrow" />
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section>
          <div className="container custom_Container">
            <div className="d-flex justify-content-center align-items-start gap-2 all_mb">
              <div className="sideBar fontBak h-100">
                <p className="text-center mb-3">Posted by</p>
                <div className="d-flex justify-content-center align-items-center gap-5 mb-4">
                  <div
                    className="text-center"
                    style={{ height: "75px", width: "75px" }}
                  >
                    <img
                      className="sideImgPro"
                      src={profile}
                      alt="Profile Image"
                    />
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
                    <Link
                      className="viewProfile"
                      to="#"
                      style={{ fontSize: "10px" }}
                    >
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
                    Ownership of all images belongs to their respective original
                    owners & illustrators.
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
              <div className="wallpaper fontBak">
                {/* <img className="img-fluid" src={wallpaper} alt="WallPaper" /> */}
                <div className="btnPosition d-flex justify-content-end gap-3">
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
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bgShadowbottom">
        <section>
          <div className="container custom_Container">
            <h3 className="all_mb">You may also like</h3>
            <div className="row gy-4 mb-4">
              <div className="col-12 col-md-4">
                <div className="tredImg">
                  <Link to="/">
                    <img
                      className="img-fluid w-100"
                      src={wallpaper}
                      alt="img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="tredImg">
                  <Link to="/">
                    <img
                      className="img-fluid w-100"
                      src={wallpaper1}
                      alt="img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="tredImg">
                  <Link to="/">
                    <img
                      className="img-fluid w-100"
                      src={wallpaper2}
                      alt="img"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <span className="d-block text-center">
              <button className="viewProfile" style={{ fontSize: "12px" }}>
                View More
              </button>
            </span>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row gy-2">
              <div className="col-12 col-md-6">
                <p>THE WALLPAPER SOCIETY</p>
              </div>
              <div className="col-12 col-md-2">
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
              <div className="col-12 col-md-2">
                <ul>
                  <li>Top Categories</li>
                  <li>
                    <Link to="/">Gaming</Link>
                  </li>
                  <li>
                    <Link to="/">Anime</Link>
                  </li>
                  <li>
                    <Link to="/">4K</Link>
                  </li>
                  <li>
                    <Link to="/">Japan</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
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
            <div className="footerBottom d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
              <span>© The Wallpapers Society</span>
              <span>
                <Link to="/">Community Rules</Link>
              </span>
              <span>
                <Link to="/">Privacy Policy</Link>
              </span>
              <span>
                <Link to="/">Terms and Conditions</Link>
              </span>
              <div className="themeChangeBtn d-flex justify-content-center align-items-center gap-1">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ gap: "2px" }}
                >
                  <img src={Moon} alt="img" />
                  Dark
                </div>
                <img src={downArrow} alt="img" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WallPaper;
