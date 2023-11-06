import React from "react";
import Trending from "../Trending/Trending";
import Featured from "../Featured/Featured";
import Artist from "../Artist/Artist";
import StaffPicks from "./../StaffPicks/StaffPicks";
import Sponsors from "../Sponsors/Sponsors";
import OfficialWallpapers from "../OfficialWallpapers/OfficialWallpapers";

const Home = () => {
  return (
    <>
      <Trending />
      <OfficialWallpapers />
      <Featured />
      <Artist />
      <StaffPicks />
      <Sponsors />
    </>
  );
};

export default Home;
