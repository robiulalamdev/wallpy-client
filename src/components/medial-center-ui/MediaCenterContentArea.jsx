import React from "react";
import img1 from "../../assets/images/media-center/img1.png";

const MediaCenterContentArea = ({ open }) => {
  return (
    <div className="w-100">
      {open === 0 && (
        <section className="row">
          <div className="col-6 col-md-4 col-lg-3 mc-card ps-0 mb-3">
            <img
              className="w-100 h-100"
              src={img1}
              alt=""
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3 mc-card ps-0 mb-3">
            <img
              className="w-100 h-100"
              src={img1}
              alt=""
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </section>
      )}
      {open === 1 && (
        <section className="row">
          <div className="col-6 col-md-4 col-lg-3  mb-3">
            <div className=" mc-card row">
              <div className="col-6 p-0">
                <img className="w-100 h-100" src={img1} alt="" />
              </div>
              <div className="col-6 p-0">
                <img className="w-100 h-100" src={img1} alt="" />
              </div>
              <div className="col-6 p-0">
                <img className="w-100 h-100" src={img1} alt="" />
              </div>
              <div className="col-6 p-0">
                <img className="w-100 h-100" src={img1} alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MediaCenterContentArea;
