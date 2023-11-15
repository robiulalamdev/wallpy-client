import React from "react";
import staff from "../../assets/staff.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import { Link } from "react-router-dom";
const OfficialWallpapers = () => {
  return (
    <>
      <div className="container all_mb">
        <h2 className="mb-4 home-section-title">Official Wallpapers</h2>
        <div className="row gy-4">
          <div className="col-6 " style={{ height: "fit-content" }}>
            <div className="staff">
              <Link to="#">
                <img
                  className="img-fluid first-img"
                  src={staff}
                  alt="Img"
                  style={{ height: "fit-content" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-6" style={{ height: "fit-content" }}>
            <div className="d-flex flex-column gap-4">
              <div className="staff">
                <Link to="#">
                  <img
                    className="img-fluid w-100 second-img"
                    src={staff2}
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="staff d-none d-md-block">
                <Link to="#">
                  <img
                    className="img-fluid w-100"
                    src={staff3}
                    alt="Img"
                    style={{ height: "fit-content" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="staff d-md-none mt-3">
          <Link to="#">
            <img
              className="img-fluid w-100"
              src={staff3}
              alt="Img"
              // style={{ height: "253px" }}
            />
          </Link>
        </div>
        <button className="moreBtn mt-4">More Official Wallpapers</button>
      </div>
    </>
  );
};

export default OfficialWallpapers;
