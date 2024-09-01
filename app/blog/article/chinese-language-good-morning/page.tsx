import Articles from "@/components/blog/Articles/Chinese/Articles";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Chinese Words for "Good Morning" - Migaku',
};

const page = () => {
  return (
    <main className="relative">
      <section className=" relative z-10 px-6">
        <Intro />
        <Articles />
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

function Intro() {
  return (
    <>
      <h1 className="text-migaku-dark-text dark:text-white text-center font-extrabold my-10 text-3xl md:text-6xl ">
        Chinese Words for &quot;Good Morning&quot;
      </h1>

      <span className="text-center md:text-lg  font-bold text-[#00005A99] dark:text-[#FFFFFF99] block mb-3 ">
        August 26, 2024
      </span>
    </>
  );
}
