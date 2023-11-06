import React from "react";
import "./Profile.css";
import kitten from "../../assets/kitten.png";
import profile from "../../assets/profile.png";
import edit_cover from "../../assets/edit_cover.png";
import Verified from "../../assets/Verified.png";
import twitter from "../../assets/twitter.png";
import fb from "../../assets/fb.png";
import whatsapp from "../../assets/whatsapp.png";
import discord from "../../assets/discord.png";
import email from "../../assets/email.png";
import link from "../../assets/link.png";
import left_light from "../../assets/left_light.png";
import cover_photo from "../../assets/cover_photo.png";
import clear from "../../assets/clear.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";

const data = [
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
  { img: kitten },
];
const Profile = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container search_Container">
            <Link className="navbar-brand" to="/">
              WPS
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
              <span>
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
              <Link className="backBtn" to="/">
                <img className="me-2" src={left_light} alt="Left Arrow" />
                Back
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <div className="container search_Container">
          <div className="coverImg">
            <img
              className="cover_photo w-100 img-fluid"
              src={cover_photo}
              alt="Cover image"
            />
            <button>
              <img src={edit_cover} alt="Edit" />
            </button>
            <div className="profile_photo">
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <div className="profileDetail d-flex justify-content-between align-items-start">
            <div>
              <h3 className="text-start text-white">
                krs
                <img src={Verified} alt="Verified" />
              </h3>
              <span className="fontBak">WPS Admin / AI Art</span>
            </div>
            <div className="update_follower d-flex justify-content-between align-items-center gap-5">
              <div>
                <p className="fontBak">
                  Uploads: <span style={{ color: "#ccc" }}>1549</span>
                </p>
                <p className="fontBak">
                  Followers:: <span style={{ color: "#ccc" }}>1549</span>
                </p>
              </div>
              <div>
                <p className="fontBak">
                  Member Since: <span style={{ color: "#ccc" }}>1549</span>
                </p>
                <p className="fontBak">
                  Last Active: <span style={{ color: "#ccc" }}>Today</span>
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex justify-content-between align-items-center gap-2">
                <div className="followBtn">
                  <button className="fontBak">Follow</button>

                  <div className="shareProfile d-flex flex-column gap-3 align-items-center">
                    <p className="fontBak">Share this profile with friends</p>
                    <div className="d-flex justify-content-between align-items-center gap-4">
                      <button className="d-flex flex-column gap-1 align-items-center">
                        <img src={twitter} alt="Twitter" />X
                      </button>
                      <button className="d-flex flex-column gap-1 align-items-center">
                        <img src={fb} alt="Facebook" />
                        Facebook
                      </button>
                      <button className="d-flex flex-column gap-1 align-items-center">
                        <img src={whatsapp} alt="WhatsApp" />
                        WhatsApp
                      </button>
                      <button className="d-flex flex-column gap-1 align-items-center">
                        <img src={discord} alt="Discord" />
                        Discord
                      </button>
                      <button className="d-flex flex-column gap-1 align-items-center">
                        <img src={email} alt="Email" />
                        Email
                      </button>
                      <button className="d-flex flex-column gap-1 align-items-center">
                        <img src={link} alt="Copy Link" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="msgBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="4"
                          y="6"
                          width="16"
                          height="12"
                          rx="2"
                          stroke="#4E4E4E"
                        />
                        <path
                          d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                          stroke="#4E4E4E"
                        />
                      </svg>
                    </span>
                  </button>
                  {/* <!-- Message Modal Start --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog  modal-dialog-centered">
                      <div className="modal-content">
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="modalClose"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <img src={clear} alt="close" />
                          </button>
                        </div>
                        <div className="msgModal">
                          <h4 className="fontBak mb-2">Send a message</h4>
                          <p className="fontBak mb-4">
                            Please be sure to familiarize yourself with the site
                            rules before composing your message
                          </p>
                          <form action="">
                            <label for="message" className="fontBak mb-2">
                              Message
                            </label>
                            <textarea
                              name="message"
                              id="message"
                              cols="30"
                              rows="7"
                              placeholder="Write the details here..."
                            ></textarea>

                            <div className="d-flex flex-column align-items-center gap-3">
                              <button className="sendBtn fontBak">
                                Send Message
                              </button>
                              <button className="cancleBtn fontBak">
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Message Modal End --> */}
                </div>
                <button className="msgBtn">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 5L11.6464 4.64645L12 4.29289L12.3536 4.64645L12 5ZM12.5 14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14L12.5 14ZM6.64645 9.64645L11.6464 4.64645L12.3536 5.35355L7.35355 10.3536L6.64645 9.64645ZM12.3536 4.64645L17.3536 9.64645L16.6464 10.3536L11.6464 5.35355L12.3536 4.64645ZM12.5 5L12.5 14L11.5 14L11.5 5L12.5 5Z"
                        fill="#4E4E4E"
                      />
                      <path
                        d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
                        stroke="#4E4E4E"
                      />
                    </svg>
                  </span>
                </button>
                <button className="msgBtn">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5ZM10 5.66667C9.44772 5.66667 9.00001 6.11438 9.00001 6.66667C9.00001 7.21895 9.44772 7.66667 10 7.66667H10.0083C10.5606 7.66667 11.0083 7.21895 11.0083 6.66667C11.0083 6.11438 10.5606 5.66667 10.0083 5.66667H10ZM8.75 9C8.19772 9 7.75 9.44772 7.75 10C7.75 10.5523 8.19772 11 8.75 11H9V13.3333C9 13.8856 9.44772 14.3333 10 14.3333H11.6667C12.219 14.3333 12.6667 13.8856 12.6667 13.3333C12.6667 12.781 12.219 12.3333 11.6667 12.3333H11V10C11 9.44772 10.5523 9 10 9H8.75Z"
                        fill="#FF4330"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="share">
                <div className="d-flex justify-content-start align-items-center gap-3">
                  <Link to="/" className="overflow-hidden">
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
              </div>
            </div>
          </div>

          <hr className="w-100" />
        </div>
      </div>

      <div className="container search_Container">
        <form action="" className="mb-5">
          <div className="searchNav mx-auto">
            <input
              className="w-100"
              type="search"
              placeholder="Search this profile"
            />
          </div>
        </form>
        <div className="row align-items-center gy-5 mb-5">
          {data.map((image) => (
            <div className="col-12 col-md-2">
              <div className="tredImg ownWall text-center">
                <Link to="/wallpaper">
                  <img
                    className="img-fluid ownWall"
                    src={image.img}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <span className="d-block text-center">
            <button className="loadBtn fontBak">View more</button>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
