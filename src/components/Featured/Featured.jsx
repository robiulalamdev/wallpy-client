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
    <>
      <div className="bgShadowBottom">
        <div className="container">
          <div className="feature all_mb">
            <h2 className="mb-4">Featured Wallpapers</h2>
            <div className="row gy-4">
              {featureData.map((image) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="tredImg">
                    <Link to="/">
                      <img className="img-fluid w-100" src={image.src} alt={image.alt} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
