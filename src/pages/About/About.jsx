import React from "react";
import AboutUi from "../../components/about-ui/AboutUi";
import "../../styles/about.css";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const About = () => {
  return (
    <div className="wallpaper_bg">
      <Header />
      <AboutUi />
      <Footer />
    </div>
  );
};

export default About;
