import Section from "@/components/blog/Section";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog - Migaku",
};

const page = () => {
  return (
    <main className="relative">
      <h1 className="text-center font-extrabold text-5xl md:text-8xl my-10 relative z-10">
        Blog
      </h1>

      <Section />

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
