import React from "react";
import "./SearchPage.css";

import SearchImages from "./SearchImages";
import Footer from "../../Shared/Footer/Footer";
import SearchHeader from "./SearchHeader";
import SearchTrending from "./SearchTrending";

const SearchPage = () => {
  return (
    <div className="container">
      <SearchHeader />
      <SearchTrending />
      <hr className="w-100" />
      <section className="search_Container">
        <div className="row gy-3 mx-auto">
          <SearchImages />
        </div>
        <span className="d-block text-center mt-4">
          <button className="loadBtn fontBak">Load More</button>
        </span>
      </section>
      <Footer />
    </div>
  );
};

export default SearchPage;
