/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMAGE_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img className="absolute -z-10" src={BG_IMAGE_URL} alt="background-image" />
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
