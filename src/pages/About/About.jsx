import React from "react";
import AboutUi from "../../components/about-ui/AboutUi";
import Footer from "../../Shared/Footer/Footer";
import "../../styles/about.css"
import Header from "../../Shared/Header/Header";

const About = () => {
  return (
    <>
    <Header/>
      <AboutUi />
      <Footer />
    </>
  );
};

export default About;
