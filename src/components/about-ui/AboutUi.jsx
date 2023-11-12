import React from "react";
import banner from "../../assets/images/about/banner.png";

const AboutUi = () => {
  return (
    <div className="container about-container">
      <h1 className="title">About WPS</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      <h1 className="about-title d-md-none">THE WALLPER SOCIETY </h1>
      <div className="row mt-4">
        <div className="col-6 col-md-4">
          <img
            className="w-100 about-img"
            src={banner}
            style={{ objectFit: "cover" }}
            alt=""
          />
          <h1 className="wps-title d-md-none">WPS</h1>
        </div>
        <div className="col-6 col-md-8 about-content text-center text-md-start">
          <h1 className="d-none d-md-block">THE WALLPER SOCIETY </h1>
          <h6>Hello from the WPS</h6>
          <p>
            Our journey is in its early stages, but it all began with a simple
            yet pressing need for a wallpapers website that places a premium on
            top-notch content, community interaction, and a user experience
            devoid of traditional advertisements and annoying pop-ups.
          </p>

          <p>
            In essence, our story embodies the determination of a small yet
            dedicated team who transformed a brilliant concept into a reality.
            As you navigate through our website, we hope you thoroughly enjoy
            your time here. We extend our sincere thanks to you for becoming an
            integral part of our growing community.
          </p>

          <p>
            At WPS, our commitment lies in providing an exceptional wallpaper
            experience, fostering connections, and curating the highest quality
            content. Join us on this exciting journey, and together, let's
            redefine the digital aesthetic world. We appreciate your
            contribution to our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUi;
