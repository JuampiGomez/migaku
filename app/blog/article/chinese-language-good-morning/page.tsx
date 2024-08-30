import GoodMorningTable from "@/components/blog/Articles/Chinese/GoodMorningTable";
import KeyDefinitions from "@/components/blog/Articles/Chinese/KeyDefinitions";
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

            <p className=" mt-5 rounded-2xl p-6 md:text-lg font-medium bg-[#EDE3FF] dark:bg-[#36206D] text-migaku-dark-text dark:text-white">
              Note: In this case, the listed terms are the same in both the
              Simplified and Traditional character sets.
            </p>

            <KeyDefinitions />
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
