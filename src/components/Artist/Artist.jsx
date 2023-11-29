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
      <div className="container w-100">
        <h2 className="home-section-title">Featured Artists</h2>
        <div className="artist">
          {artistData.map((data, index) => (
            <div
              className="d-flex flex-column gap-2 align-items-center artist-card "
              key={index}
            >
              <img class="artist-profile mb-3" src={data.img} alt="Profile" />
              <div className="profileInner">
                <div className="artist-pro d-flex justify-content-center gap-1 align-items-center mb-2">
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
              <Link className="artist-view-profile" to="/profile">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Artist;
