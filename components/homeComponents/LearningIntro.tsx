"use client";
import Image from "next/image";
import Card from "../card/Card";
import { useState } from "react";

export function LearningIntro() {
  const [isHover, setIsHover] = useState(false);

  return (
    <section className="px-6  pt-20  pb-12 relative bg-[#0A002A] z-20 ">
      <div className="learningIntro "> </div>
      <div className="pt-10">
        <div className="relative max-w-[960px] md:mx-auto ">
          <h2 className="text-center font-bold  font-GTMaru text-white text-[32px] z-10 md:text-5xl lg:text-6xl  ">
            What the{" "}
            <span
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  setIsHover(false);
                }, 350);
              }}
              className="underline  underline-offset-4  decoration-red-500 decoration-2 cursor-pointer group "
            >
              heck
            </span>{" "}
            is Migaku?
          </h2>
          <Image
            src={"/starYellow.svg"}
            alt=""
            width={40}
            height={40}
            className="absolute  -top-2 left-0 -z-10 lg:w-[70px] lg:-left-4  xl:-left-16 xl:-top-10 xl:w-[86px]"
          />
          <Image
            src={"/starYellow.svg"}
            alt=""
            width={40}
            height={40}
            className="absolute -top-2 right-0  transform -rotate-90 -z-10 lg:w-[70px] lg:-right-4 xl:-right-16  xl:-top-10 xl:w-[86px] "
          />
          <Card
            position="top-14 lg:top-16 left-1/2 transform -translate-x-1/2 "
            level={5}
            hiddenClasses={`${isHover ? "block" : "hidden"}`}
          />
        </div>
        <p className="text-white text-center my-7 text-[20px] font-medium md:text-2xl md:max-w-[850px] md:mx-auto lg:text-3xl">
          Migaku is a powerful Chrome extension that turns your favorite
          websites into simple and effective learning materials
        </p>

        <div className=" relative  max-w-[640px] mx-auto">
          <Image
            src={"/migakuOnPc.avif"}
            alt="migaku on PC"
            width={1329}
            height={766}
            className=" w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
