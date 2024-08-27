"use client";

import React from "react";

type FilterOption =
  | "everything"
  | "articles"
  | "extension"
  | "ios"
  | "android"
  | "youtube";

interface BlogFiltersProps {
  filterSelected: FilterOption;
  setFilterSelected: React.Dispatch<React.SetStateAction<FilterOption>>;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  filterSelected,
  setFilterSelected,
}) => {
  return (
    <ul className="font-extrabold flex flex-wrap justify-center items-center gap-5 ">
      <li
        onClick={() => setFilterSelected("everything")}
        className={`${
          filterSelected === "everything"
            ? "bg-white shadow-xl border dark:border-none dark:bg-[#2B2B60]  rounded-3xl"
            : ""
        } px-4 py-2  hover:scale-110 transition-transform duration-200 cursor-pointer text-migaku-dark-text dark:text-white`}
      >
        EVERYTHING
      </li>
      <li
        onClick={() => setFilterSelected("articles")}
        className={`${
          filterSelected === "articles"
            ? "bg-white shadow-xl border dark:border-none dark:bg-[#2B2B60] rounded-3xl"
            : ""
        } px-4 py-2  hover:scale-110 transition-transform duration-200 cursor-pointer text-migaku-dark-text dark:text-white`}
      >
        ARTICLES
      </li>
      <li
        onClick={() => setFilterSelected("extension")}
        className={`${
          filterSelected === "extension"
            ? "bg-white shadow-xl border dark:border-none dark:bg-[#2B2B60]  rounded-3xl"
            : ""
        } px-4 py-2 hover:scale-110 transition-transform duration-200 cursor-pointer text-migaku-dark-text dark:text-white`}
      >
        EXTENSION
      </li>
      <li
        onClick={() => setFilterSelected("ios")}
        className={`${
          filterSelected === "ios"
            ? "bg-white shadow-xl border dark:border-none dark:bg-[#2B2B60]  rounded-3xl"
            : ""
        } px-4 py-2 hover:scale-110 transition-transform duration-200 cursor-pointer text-migaku-dark-text dark:text-white`}
      >
        IOS
      </li>
      <li
        onClick={() => setFilterSelected("android")}
        className={`${
          filterSelected === "android"
            ? "bg-white shadow-xl border dark:border-none dark:bg-[#2B2B60]  rounded-3xl"
            : ""
        } px-4 py-2 hover:scale-110 transition-transform duration-200 cursor-pointer text-migaku-dark-text dark:text-white`}
      >
        ANDROID
      </li>
      <li
        onClick={() => setFilterSelected("youtube")}
        className={`${
          filterSelected === "youtube"
            ? "bg-white shadow-xl border dark:border-none dark:bg-[#2B2B60]  rounded-3xl"
            : ""
        } px-4 py-2 hover:scale-110 transition-transform duration-200 cursor-pointer text-migaku-dark-text dark:text-white`}
      >
        YOUTUBE
      </li>
    </ul>
  );
};

export default BlogFilters;
