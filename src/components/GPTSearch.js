/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMAGE_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-[100%]">
        <img
          className="w-full h-screen object-cover"
          src={BG_IMAGE_URL}
          alt="background-image"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
