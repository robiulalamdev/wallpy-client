import React from "react";
import "./StaffPicks.css";
import staff from "../../assets/staff.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import { Link } from "react-router-dom";

const StaffPicks = () => {
  return (
    <>
      <div className="container all_mb">
        <h2 className="my-4 home-section-title">
          The <span style={{ color: "#FDF516" }}>WPS</span> Staff Picks
        </h2>
        <div className="row gy-2 gy-md-4">
          <div className="col-6 px-1 px-md-2">
            <div className="staff" style={{ maxHeight: "535px" }}>
              <Link to="#">
                <img
                  className="img-fluid object-fit-cover"
                  src={staff}
                  alt="Img"
                  style={{ maxHeight: "535px", minHeight: "115px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column gap-2 gap-md-4">
              <div className="staff">
                <Link to="#">
                  <img
                    className="img-fluid w-100 object-fit-cover"
                    src={staff2}
                    alt="Img"
                    // style={{ height: "253px" }}
                  />
                </Link>
              </div>
              <div className="staff">
                <Link to="#">
                  <img
                    className="img-fluid w-100 object-fit-cover"
                    src={staff3}
                    alt="Img"
                    // style={{ height: "253px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPicks;
