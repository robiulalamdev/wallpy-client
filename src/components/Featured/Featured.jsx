import React from "react";
import "./Featured.css";
import img1 from "../../assets/feature.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import { Link } from "react-router-dom";

const featureData = [
  {
    src: img1,
    alt: "image 1",
  },
  {
    src: img2,
    alt: "image 2",
  },
  {
    src: img3,
    alt: "image 3",
  },
];

const Featured = () => {
  return (
    <div className="container">
      <h2 className="home-section-title">Featured Wallpapers</h2>
      <div className="row gy-4">
        {featureData.map((image, index) => (
          <div
            key={index}
            className={` ${index === 0 ? "col-12 col-md-4" : "col-6 col-md-4"}`}
          >
            <Link to="/" className="w-100">
              <img
                className="featuredImage w-100 mx-auto"
                src={image.src}
                alt={image.alt}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
