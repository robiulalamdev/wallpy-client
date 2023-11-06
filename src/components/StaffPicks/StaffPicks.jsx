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
        <h2 className="mb-4">
          The <span style={{ color: "#FDF516" }}>WPS</span> Staff Picks
        </h2>
        <div className="row gy-4">
          <div className="col-12 col-md-6">
            <div className="staff" style={{ height: "535px" }}>
              <Link to="#">
                <img
                  className="img-fluid"
                  src={staff}
                  alt="Img"
                  style={{ height: "535px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-4">
              <div className="staff">
                <Link to="#">
                  <img
                    className="img-fluid w-100"
                    src={staff2}
                    alt="Img"
                    style={{ height: "253px" }}
                  />
                </Link>
              </div>
              <div className="staff">
                <Link to="#">
                  <img
                    className="img-fluid w-100"
                    src={staff3}
                    alt="Img"
                    style={{ height: "253px" }}
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
