import React, { useState } from "react";
import "./SearchPage.css";
import profile from "../../assets/profile.png";
import img from "../../assets/icons/mixer.png";

import SearchImages from "./SearchImages";
import SearchTrending from "./SearchTrending";
import SearchPageSidebar from "./SearchPageSidebar";

const SearchPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="container">
      <h1 className="fontBak text-center d-none d-md-block">
        THE WALLPAPER SOCIETY
      </h1>
      <form action="" className="mx-auto mt-md-3 mb-4">
        <div className="searchNav mx-auto">
          <input
            className="w-100"
            type="search"
            placeholder="Find more wallpapers..."
          />
        </div>
      </form>
      <SearchTrending />
      <hr className="w-100" />
      <div className="mb-4 d-flex gap-0 mt-3">
        <div className="allBtn">
          <button
            onClick={() => setSelectedTab(1)}
            className={selectedTab === 1 && "allBtnActive"}
          >
            Trending
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={selectedTab === 2 && "allBtnActive"}
          >
            New
          </button>
        </div>
        <img
          onClick={() => setOpen(!open)}
          className="d-md-none"
          style={{ width: "57px" }}
          src={img}
          alt=""
        />
      </div>
      <section className="search_Container">
        <div className="row gy-3 mx-auto">
          <SearchImages />
        </div>
        <span className="d-block text-center mt-4">
          <button className="loadBtn fontBak">Load More</button>
        </span>
      </section>

      <SearchPageSidebar
        open={open}
        setOpen={setOpen}
        {...{
          scroll: false,
          backdrop: false,
        }}
      />
    </div>
  );
};

export default SearchPage;
