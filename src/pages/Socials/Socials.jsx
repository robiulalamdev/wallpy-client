import React from "react";
import "../../styles/socials.css";
import banner from "../../assets/images/socials/banner.png";
import icon1 from "../../assets/images/socials/icon1.png";
import icon2 from "../../assets/images/socials/icon2.png";
import icon3 from "../../assets/images/socials/icon3.png";
import icon4 from "../../assets/images/socials/icon4.png";
import icon5 from "../../assets/images/socials/icon5.png";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const items = [icon1, icon2, icon3, icon4, icon5];

const Socials = () => {
  return (
    <div className="wallpaper_bg">
      <Header />
      <div className="container mx-auto socials-container">
        <h1 className="title">Socials</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />

        <div className="position-relative">
          <img src={banner} style={{ maxHeight: "294px" }} alt="" />
          <div className="socials-img-overlay"></div>
        </div>

        <section className="row">
          {items?.map((item, index) => (
            <div key={index} className="col-4 p-2 p-md-4 mt-0 mt-md-4">
              <img src={item} className="" alt="" />
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Socials;
