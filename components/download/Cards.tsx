"use client";
import Image from "next/image";
import SuportedSitesCard from "../homeComponents/SuportedSitesCard";
import { Button } from "../ui/button";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "../ui/cardBorder3d";
import { useState } from "react";

export const MobileApp = () => {
  return (
    <aside
      className="bg-[#EDE3FF] dark:bg-[#202047]  p-8 relative mr-3  md:order-2
    "
    >
      <h2 className="text-migaku-dark-text dark:text-white font-extrabold text-2xl md:text-4xl mb-4">
        Migaku <br /> mobile app
      </h2>
      <p className="text-migaku-dark-text dark:text-white font-medium md:text-lg">
        Study and create flashcards on the go. Migaku fits into your pace of
        life.
      </p>

      <div className="grid gap-4 mt-3">
        <a
          href="https://apps.apple.com/us/app/migaku-really-learn-languages/id1664096855"
          target="_blank"
          className="w-full block md:max-w-[170px]"
        >
          <Button className="w-full flex gap-2 md:max-w-[170px]">
            <svg
              className="w-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.757 3.682c.292-.2.638-.307.992-.307a1.25 1.25 0 1 0 .002-2.5 4.25 4.25 0 0 0-3.97 2.723 1.25 1.25 0 1 0 2.332.898 1.75 1.75 0 0 1 .644-.814Zm-.923 4.933a4.43 4.43 0 0 1 3.3-1.1 4.422 4.422 0 0 1 2.17.81 5.79 5.79 0 0 0-1.548 4.15A5.794 5.794 0 0 0 18.99 16.8a7.92 7.92 0 0 1-.652 1.29c-.685 1.08-1.63 1.91-2.964 1.91-.838 0-1.866-.14-2.549-.69a1.25 1.25 0 0 0-1.639-.01l-.005.004c-.086.066-.92.695-2.592.695-.984 0-2.14-.61-3.102-1.923-.947-1.292-1.613-3.16-1.613-5.35 0-3.018 1.921-5.041 4.023-5.21a4.417 4.417 0 0 1 3.269 1.1 1.25 1.25 0 0 0 1.667-.002Zm8.21 6.54c.52.26.792.845.655 1.41-.718 2.964-3.042 5.935-6.324 5.935-1.329 0-2.346-.292-3.053-.609a5.953 5.953 0 0 1-.329-.16 6.01 6.01 0 0 1-.339.163c-.712.314-1.735.606-3.064.606-2.022 0-3.849-1.214-5.118-2.945-1.283-1.75-2.097-4.144-2.097-6.829 0-4.033 2.654-7.406 6.322-7.702A6.923 6.923 0 0 1 12 6.116a6.938 6.938 0 0 1 4.35-1.091 6.93 6.93 0 0 1 4.808 2.6 1.25 1.25 0 0 1-.337 1.842 3.288 3.288 0 0 0-1.567 2.91 3.288 3.288 0 0 0 1.79 2.777Z"
                clipRule="evenodd"
              ></path>
            </svg>
            IOS
          </Button>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.migaku.android"
          target="_blank"
          className="w-full md:max-w-[170px]"
        >
          <Button className="w-full flex gap-2  md:max-w-[170px]">
            <svg
              className="w-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m5.494 1.273 15.71 8.997c1.338.732 1.338 2.727 0 3.46l-15.71 8.997c-1.294.76-3-.225-3.014-1.718V2.98C2.495 1.474 4.193.509 5.495 1.274Zm1.9 17.485 4.503-2.579-1.363-1.977-3.14 4.556ZM9.016 12 4.98 17.854V6.146L9.016 12Zm3.036 0 2.022 2.932L19.194 12l-5.12-2.933L12.051 12Zm-.155-4.18-1.363 1.977-3.14-4.555 4.503 2.579Z"
                clipRule="evenodd"
              ></path>
            </svg>
            ANDROID
          </Button>
        </a>
      </div>

      <p className="text-sm md:text-base  font-medium text-migaku-dark-text dark:text-white mt-5 ">
        You can also study in your browser at{" "}
        <a
          href="https://study.migaku.com/"
          target="_blank"
          className=" underline"
        >
          study.migaku.com
        </a>
      </p>
      <CardBorder3dBottom bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorder3dRight bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorderLeftAndTop />

      <svg
        width="67"
        className="absolute -top-14 right-36"
        height="56"
        viewBox="0 0 67 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <path
          d="M1.93543 54.8674H65.8887L48.0359 10.7695C43.0478 -1.55513 25.638 -1.65827 20.4982 10.5996L1.93543 54.8674Z"
          fill="url(#b6a585e692d--paint0_linear_157_40100)"
        ></path>
        <path
          d="M31.6031 1.69799C38.0476 0.57536 45.1353 3.60342 48.0359 10.7639L65.8887 54.8619H60.6336L42.7808 10.7639C40.663 5.53919 36.306 2.5172 31.6031 1.69799Z"
          fill="url(#b6a585e692d--paint1_linear_157_40100)"
        ></path>
        <path
          d="M18.3561 15.594C18.3561 15.594 17.8827 17.3356 18.6716 18.5978C19.4605 19.8661 22.8951 24.5507 22.8951 24.5507L28.2655 16.5346L33.2961 24.1988L39.5524 17.014L45.1049 24.1988L49.207 17.8029C49.207 17.8029 51.1064 17.3295 49.5226 14.3197C47.9388 11.3159 45.7239 6.56446 45.7239 6.56446C45.7239 6.56446 41.6096 1.02414 34.3338 1.50353C27.0579 1.98292 22.7859 7.04384 22.7859 7.04384L21.3598 9.25876L18.3561 15.594Z"
          fill="url(#b6a585e692d--paint2_linear_157_40100)"
        ></path>
        <path
          d="M1.93543 54.8674H65.8887L48.0359 10.7695C43.0478 -1.55513 25.638 -1.65827 20.4982 10.5996L1.93543 54.8674Z"
          stroke="#00005A"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M50.178 16.5347L45.111 24.1989L39.4008 16.5347L33.3022 24.1989L28.2716 16.5347L22.9012 24.5508L17.8342 16.9534"
          stroke="#00005A"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <defs>
          <linearGradient
            id="b6a585e692d--paint0_linear_157_40100"
            x1="65.8873"
            y1="28.1648"
            x2="1.93847"
            y2="28.1648"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C5BB43"></stop>
            <stop offset="1" stopColor="#FFCA00"></stop>
          </linearGradient>
          <linearGradient
            id="b6a585e692d--paint1_linear_157_40100"
            x1="65.8873"
            y1="28.1695"
            x2="31.6018"
            y2="28.1695"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF300"></stop>
            <stop offset="0.0876" stopColor="#F8F300"></stop>
            <stop offset="0.2166" stopColor="#E4F400"></stop>
            <stop offset="0.3713" stopColor="#C3F600"></stop>
            <stop offset="0.5459" stopColor="#96F800"></stop>
            <stop offset="0.737" stopColor="#5CFB00"></stop>
            <stop offset="0.9392" stopColor="#16FE00"></stop>
            <stop offset="1" stopColor="#00FF00"></stop>
          </linearGradient>
          <linearGradient
            id="b6a585e692d--paint2_linear_157_40100"
            x1="50.1578"
            y1="13.0168"
            x2="18.2172"
            y2="13.0168"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFF99"></stop>
            <stop offset="1" stopColor="#C4FFFF"></stop>
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="103"
        height="83"
        viewBox="0 0 103 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-[83px] right-5"
        role="img"
      >
        <path
          d="M101.444 81.8669L76.4128 11.275C71.8738 -1.51685 53.6933 -1.26198 49.5183 11.6573L38.7836 44.8931C36.8478 50.8885 28.5526 51.38 25.925 45.6516L24.7478 43.0847C22.6057 38.4243 15.8578 38.8248 14.2801 43.7037L1.96759 81.8669H101.444Z"
          fill="url(#6a585e692d8--paint0_linear_157_40106)"
        ></path>
        <path
          d="M20.6762 45.6458L19.499 43.0789C18.9346 41.847 18.0366 40.9793 17.011 40.4392C19.6568 39.0678 23.2916 39.8809 24.7541 43.0789L25.9313 45.6458C26.7323 47.3934 28.0613 48.5585 29.5723 49.1653C26.3925 50.4397 22.3632 49.3292 20.6762 45.6458Z"
          fill="url(#6a585e692d8--paint1_linear_157_40106)"
        ></path>
        <path
          d="M60.417 2.06375C66.7644 0.916851 73.8217 3.95704 76.4189 11.2753L101.45 81.8672H96.1953L71.1638 11.2753C69.2766 5.95349 65.0288 2.90117 60.417 2.06375Z"
          fill="url(#6a585e692d8--paint2_linear_157_40106)"
        ></path>
        <path
          d="M44.4394 27.3072C44.4394 27.3072 44.4091 27.4893 44.397 27.7806C44.3666 28.4238 44.4213 29.601 45.0766 30.4749C46.0233 31.7431 50.3317 37.9691 50.3317 37.9691L56.5699 28.6544L62.4136 37.5626L69.4952 28.6544L76.1278 37.5626L81.6196 29.3644C81.6196 29.3644 82.4085 27.9383 81.4618 25.7234C80.5152 23.5085 74.9749 8.63522 74.9749 8.63522C74.9749 8.63522 71.8133 2.14829 63.9003 1.83275C55.9873 1.5172 51.3997 7.68858 51.3997 7.68858L49.5246 11.6572L44.4394 27.3072Z"
          fill="url(#6a585e692d8--paint3_linear_157_40106)"
        ></path>
        <path
          d="M82.0137 28.6545L76.1275 37.5566L69.4888 28.6545L62.4072 37.5566L56.5635 28.6545L50.3192 37.9693L44.4391 29.14"
          stroke="#00005A"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M101.444 81.8669L76.4128 11.275C71.8738 -1.51685 53.6933 -1.26198 49.5183 11.6573L38.7836 44.8931C36.8478 50.8885 28.5526 51.38 25.925 45.6516L24.7478 43.0847C22.6057 38.4243 15.8578 38.8248 14.2801 43.7037L1.96759 81.8669H101.444V81.8669Z"
          stroke="#00005A"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <defs>
          <linearGradient
            id="6a585e692d8--paint0_linear_157_40106"
            x1="101.447"
            y1="41.8433"
            x2="1.97014"
            y2="41.8433"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C5BB43"></stop>
            <stop offset="1" stopColor="#FFCA00"></stop>
          </linearGradient>
          <linearGradient
            id="6a585e692d8--paint1_linear_157_40106"
            x1="29.5733"
            y1="44.7395"
            x2="17.0071"
            y2="44.7395"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF300"></stop>
            <stop offset="0.0876" stopColor="#F8F300"></stop>
            <stop offset="0.2166" stopColor="#E4F400"></stop>
            <stop offset="0.3713" stopColor="#C3F600"></stop>
            <stop offset="0.5459" stopColor="#96F800"></stop>
            <stop offset="0.737" stopColor="#5CFB00"></stop>
            <stop offset="0.9392" stopColor="#16FE00"></stop>
            <stop offset="1" stopColor="#00FF00"></stop>
          </linearGradient>
          <linearGradient
            id="6a585e692d8--paint2_linear_157_40106"
            x1="101.447"
            y1="41.8475"
            x2="60.4145"
            y2="41.8475"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF300"></stop>
            <stop offset="0.0876" stopColor="#F8F300"></stop>
            <stop offset="0.2166" stopColor="#E4F400"></stop>
            <stop offset="0.3713" stopColor="#C3F600"></stop>
            <stop offset="0.5459" stopColor="#96F800"></stop>
            <stop offset="0.737" stopColor="#5CFB00"></stop>
            <stop offset="0.9392" stopColor="#16FE00"></stop>
            <stop offset="1" stopColor="#00FF00"></stop>
          </linearGradient>
          <linearGradient
            id="6a585e692d8--paint3_linear_157_40106"
            x1="81.9282"
            y1="19.8943"
            x2="44.3863"
            y2="19.8943"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFF99"></stop>
            <stop offset="1" stopColor="#C4FFFF"></stop>
          </linearGradient>
        </defs>
      </svg>
    </aside>
  );
};

export const GoogleExtension = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-[#EDE3FF] dark:bg-[#202047]  p-8 relative mr-3 md:order-1 ">
      <h2 className="text-migaku-dark-text dark:text-white font-extrabold text-2xl mb-4  md:text-4xl ">
        Migaku browser extension
      </h2>
      <p className="text-migaku-dark-text dark:text-white font-medium md:text-lg ">
        Install the Migaku extension in your Chrome browser on desktop and learn
        with your favorite content on YouTube, Netflix, Disney+, Viki, X, Reddit
        and{" "}
        <span
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="underline cursor-pointer"
        >
          more.
        </span>
      </p>
      <SuportedSitesCard
        position="max-[350px]:-bottom-72 -bottom-64 left-[65%] transform -translate-x-1/2  "
        hiddenClasses={`${isOpen ? "block" : "hidden"}`}
      />
      <div className=" mt-3">
        <a
          href="https://apps.apple.com/us/app/migaku-really-learn-languages/id1664096855"
          target="_blank"
          className="w-full md:max-w-max block "
        >
          <Button className="w-full flex gap-2 md:text-base  md:max-w-max">
            GET THE EXTENSION
          </Button>
        </a>
      </div>

      <Image
        src={"/palm.svg"}
        width={76}
        height={76}
        alt=""
        className="absolute -top-20 w-[76px]"
      />

      <CardBorder3dBottom bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorder3dRight bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorderLeftAndTop />
    </aside>
  );
};
