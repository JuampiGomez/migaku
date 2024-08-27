import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Article = {
  date: string;
  title: string;
  paragraph: string;
  hrefToArticle: string;
};

const ArticlePreview = ({ date, title, paragraph, hrefToArticle }: Article) => {
  return (
    <article className="relative bg-white shadow-xl border border-black/10  rounded-2xl dark:bg-[#202047] p-4 ">
      <span className="text-[12px] md:text-sm font-bold text-[#00005A99] dark:text-[#FFFFFF99] block mb-3 uppercase">
        {date}
      </span>
      <h2 className="text-2xl md:text-4xl font-extrabold text-migaku-dark-text dark:text-white mb-3">
        {title}
      </h2>
      <p className=" md:text-lg font-medium text-migaku-dark-text dark:text-white">
        {paragraph}
      </p>

      {/* TODO: ADD HREF */}
      <Link
        href={hrefToArticle}
        className="max-w-max block mx-auto relative z-10"
      >
        <Button className="mx-auto block mt-5 md:py-2 md:px-5">
          SEE THE FULL ARTICLE
        </Button>
      </Link>

      <span className="text-xl md:text-2xl font-semibold text-gray-400  opacity-60 absolute bottom-4">
        Overview
      </span>
    </article>
  );
};

export default ArticlePreview;
