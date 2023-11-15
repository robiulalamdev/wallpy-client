import React from "react";
import img1 from "../../assets/artist.png";
import img2 from "../../assets/artist2.png";
import verified from "../../assets/Verified.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/dribble.png";
import "./Artist.css";
import { Link } from "react-router-dom";
const artistData = [
  {
    img: img1,
    title: "Diberkato",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img2,
    title: "krs",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img1,
    title: "fyween",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img2,
    title: "maDHoney",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
  {
    img: img1,
    title: "DanaUlama",
    twitter: twitter,
    instagram: instagram,
    behance: behance,
    dribble: dribble,
  },
];

const Artist = () => {
  return (
    <>
      =
      <div className="container all_mb">
        <h2 className="mb-4 home-section-title">Featured Artists</h2>
        <div className="artist">
          <div className="row gap-md-4 px-2">
            {artistData.map((data, index) => (
              <div className="col-4 col-md-2 mb-2 mx-md-auto px-1 px-lg-0">
                <div
                  className=" d-flex flex-column gap-2 align-items-center artist-card w-100 p-2 p-md-3"
                  key={index}
                >
                  <div class="proImg overflow-hidden">
                    <img class="mb-3" src={data.img} alt="Profile" />
                  </div>
                  <div className="profileInner">
                    <div className="d-flex justify-content-start gap-1 align-items-center mb-2">
                      <img src={verified} alt="img" />
                      <p>{data.title}</p>
                    </div>
                    {/* <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link to="#">
                      <img src={twitter} alt="Twitter" />
                    </Link>
                    <Link to="#">
                      <img src={behance} alt="Behance" />
                    </Link>
                    <Link to="#">
                      <img src={dribble} alt="Dribble" />
                    </Link>
                    <Link to="#">
                      <img src={instagram} alt="Instragram" />
                    </Link>
                  </div> */}
                  </div>
                  <Link
                    className="viewProfile"
                    style={{ fontSize: "10px", color: "#fff" }}
                    to="#"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
