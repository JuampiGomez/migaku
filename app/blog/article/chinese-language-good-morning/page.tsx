import GoodMorningTable from "@/components/blog/Articles/Chinese/GoodMorningTable";
import { Minus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Chinese Words for "Good Morning" - Migaku',
};

const page = () => {
  return (
    <main className="relative">
      <section className=" relative z-10 px-6">
        <h1 className="text-migaku-dark-text dark:text-white text-center font-extrabold my-10 text-3xl md:text-6xl ">
          Chinese Words for &quot;Good Morning&quot;
        </h1>

        <span className="text-center md:text-lg  font-bold text-[#00005A99] dark:text-[#FFFFFF99] block mb-3 ">
          August 26, 2024
        </span>
        <div className=" max-w-[800px] mx-auto">
          <p className="mt-12 font-medium text-lg md:text-2xl">
            Whether you&apos;re traveling abroad, want to make an impression on
            a Chinese speaker, or simply want to impress your friends,
            we&apos;ve got you covered with this detailed breakdown of the main
            ways to say good morning in Mandarin Chinese. We&apos;ll provide you
            with everything you need to know.
          </p>

          <article className="w-full">
            <h2 className="text-migaku-dark-text dark:text-white mt-10 font-extrabold text-2xl md:text-4xl mb-4">
              Overview
            </h2>

            <GoodMorningTable />

            <p className=" mt-5 rounded-2xl p-6 md:text-lg font-medium bg-[#EDE3FF] dark:bg-[#36206D] text-migaku-dark-text dark:text-white">
              Note: In this case, the listed terms are the same in both the
              Simplified and Traditional character sets.
            </p>

            <section>
              <div className="mt-10 flex gap-5 items-center cursor-pointer">
                <svg
                  width={40}
                  className="text-[#36206D] dark:text-[#B272FF] bg-[#EDE3FF] dark:bg-[#36206D] p-2 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 5.75c.69 0 1.25.56 1.25 1.25v3.75H17a1.25 1.25 0 1 1 0 2.5h-3.75V17a1.25 1.25 0 1 1-2.5 0v-3.75H7a1.25 1.25 0 1 1 0-2.5h3.75V7c0-.69.56-1.25 1.25-1.25"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* <svg
                  width={40}
                  className="text-[#36206D] dark:text-[#B272FF] bg-[#EDE3FF] dark:bg-[#36206D] p-2 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <rect
                    width="12.5"
                    height="2.6"
                    x="6"
                    y="10.7"
                    fill="currentColor"
                    rx="1.3"
                  ></rect>
                </svg> */}
                <h3 className="font-bold text-migaku-dark-text dark:text-white text-xl">
                  Key Definitions
                </h3>
              </div>

              <ul className=" list-disc pl-5 ml-6 mt-5 grid gap-1 max-h-0 overflow-hidden">
                <li>
                  <strong>Hanzi:</strong> Chinese characters.
                </li>
                <li>
                  <strong>Tone:</strong> the pitch of a word, of which there are
                  4 distinct patterns represented by 4 different diacritics
                  (accent marks); if there is no diacritic, it indicates a
                  neutral or absent tone.
                </li>
                <li>
                  <strong>Simplified:</strong> Chinese character set with less
                  strokes.
                </li>
                <li>
                  <strong>Traditional:</strong> Chinese character set with more
                  strokes.
                </li>
              </ul>
            </section>
          </article>
        </div>
      </section>

      <Image
        src={"/careersGradient.svg"}
        width={600}
        height={300}
        className="top-36 sm:-top-32 w-full  absolute opacity-50 dark:opacity-20  select-none no-drag"
        alt=""
      />
    </main>
  );
};

export default page;
