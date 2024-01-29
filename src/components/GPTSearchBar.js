import React from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12  rounded-lg">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
