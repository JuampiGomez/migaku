import Image from "next/image";
import Link from "next/link";

type ExtensionArticleProps = {
  date: string;
  title: string;
  href: string;
  thumnaildSrc: string;
  paragraph: string;
};

const YoutubeArticle = ({
  title,
  date,
  href,
  thumnaildSrc,
  paragraph,
}: ExtensionArticleProps) => {
  return (
    <article className="relative bg-white shadow-xl border border-black/10  rounded-2xl dark:bg-[#202047] p-4 ">
      <span className="text-[12px] md:text-sm font-bold text-[#00005A99] dark:text-[#FFFFFF99] block mb-3 uppercase">
        {date}
      </span>
      <h2 className="text-2xl md:text-4xl font-extrabold text-migaku-dark-text dark:text-white mb-3">
        {title}
      </h2>
      <p className=" text-migaku-dark-text dark:text-white font-medium md:text-lg">
        {paragraph}
      </p>

      <figure className="relative mt-7 rounded-2xl opacity-80 hover:opacity-60 duration-300 cursor-pointer">
        <Link href={href}>
          <Image
            src={thumnaildSrc}
            alt="video thumbnail"
            className="rounded-2xl"
            width={750}
            height={400}
          />

          <div className=" rounded-2xl w-[130px] h-[90px] flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 px-5 py-10">
            <svg
              className="w-[40px] h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 41 47"
              role="img"
            >
              <path
                fill="#fff"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.15"
                d="M37.627 21.977 5.245 2.267a1.806 1.806 0 0 0-2.496.616 1.785 1.785 0 0 0-.249.907v39.42a1.785 1.785 0 0 0 .924 1.563 1.808 1.808 0 0 0 1.821-.04l32.382-19.71A1.773 1.773 0 0 0 38.5 23.5a1.763 1.763 0 0 0-.873-1.523Z"
              ></path>
            </svg>
          </div>
        </Link>
      </figure>
    </article>
  );
};

export default YoutubeArticle;
