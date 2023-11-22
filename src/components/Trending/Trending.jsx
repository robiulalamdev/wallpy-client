import React, { useState } from "react";
import "./Trending.css";
import img1 from "../../assets/trending.png";
import img2 from "../../assets/trending2.png";
import img3 from "../../assets/trending3.png";
import img4 from "../../assets/trending4.png";
import img5 from "../../assets/trending2.png";
import img6 from "../../assets/trending4.png";
import img7 from "../../assets/trending.png";
import img8 from "../../assets/trending3.png";
import fire from "../../assets/fire.png";
import chart from "../../assets/chart.png";
import { Link } from "react-router-dom";
const imageData = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
  { src: img7, alt: "Image 7" },
  { src: img8, alt: "Image 8" },
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
];

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "Illustration" },
  { id: 3, name: "AI" },
  { id: 4, name: "Photography" },
];
const Trending = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [mainTab, setMainTab] = useState(1);
  return (
    <>
      <div className="container">
        <div className="trending all_mb">
          <div className="trendingHeader d-flex justify-content-start align-items-center">
            <div className="allBtn">
              <button
                onClick={() => setMainTab(1)}
                className={mainTab === 1 && "allBtnActive"}
              >
                Trending
              </button>
              <button
                onClick={() => setMainTab(2)}
                className={mainTab === 2 && "allBtnActive"}
              >
                New
              </button>
            </div>
            <h1 className="wallpaper-title d-md-none">Wallpapers</h1>
            <div className="allBtn d-flex justify-content-between align-items-center gap-2 d-none d-md-block">
              {tabs?.map((t, i) => (
                <button
                  onClick={() => setSelectedTab(t.id)}
                  className={`${
                    selectedTab === t.id ? "allBtnActive" : "acs-dactive-btn"
                  }`}
                  key={i}
                >
                  {t?.name}
                </button>
              ))}
            </div>
          </div>
          <div className="trendingInner mb-4 px-1">
            <div className="row">
              {imageData.map((image, index) => (
                <div
                  key={index}
                  className="col-4 col-md-3 px-1 px-md-3 tredImg mb-3 mb-md-5"
                >
                  <Link to="wallpaper">
                    <img
                      className="img-fluid w-100"
                      src={image.src}
                      alt={image.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <button className="moreBtn">More Wallpapers</button>
        </div>
      </div>
    </>
  );
};

export default Trending;
