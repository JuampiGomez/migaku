"use client";
import Image from "next/image";
import "./card.css";
import { useState, useEffect } from "react";

type Props = {
  level: 5 | 4;
  position: string;
  hiddenClasses: string;
};

const Card = ({ level, position, hiddenClasses }: Props) => {
  const [isTracking, setIsTracking] = useState(false);

  return (
    <div
      className={`${position} ${hiddenClasses}  bg-white  max-w-[450px] w-full p-3 rounded-2xl absolute z-20 hover:block`}
    >
      <header className="max-h-[330px]  overflow-y-auto no-scroll">
        <nav className="flex justify-between items-center">
          <h3 className=" text-[#3F3F82] font-medium text-xl">heck</h3>
          <ul className="flex gap-2 mr-2">
            <li className="bg-[#EDE3FF] rounded-full hover:scale-110 cursor-pointer transition-transform duration-300">
              <Image
                src={"/search.svg"}
                className="h-[40px] p-1.5"
                alt="search"
                width={40}
                height={40}
              />
            </li>
            <li className="  bg-gradient-to-b from-primary-gradient-orange to-primary-gradient-red rounded-full hover:scale-110 cursor-pointer transition-transform duration-300 ">
              <Image
                src={"/cardCreator.svg"}
                alt="create card"
                className="p-1.5"
                width={40}
                height={40}
              />
            </li>
          </ul>
        </nav>
        <div>
          <div className=" flex gap-3 mb-4 items-center">
            <span className="text-[#2C2C76] font-extrabold">noun</span>
            <span
              className={`font-extrabold flex gap-1 items-center p-0.5 px-1.5 rounded-lg  ${
                level === 5
                  ? "text-[#00C7A4] bg-[#c9f7ee]"
                  : " text-[#3C91FF] bg-[#DFF4FF] "
              }`}
            >
              Netflix 5
              <Image
                src={`${
                  level === 5 ? "/starGreenLight.svg" : "/starBlueLight.svg"
                }`}
                alt=""
                width={14}
                height={14}
              />
            </span>
          </div>
          <ul className="text-[#39397F] font-medium ml-5 pl-2 list-disc flex flex-col gap-2.5">
            <li>A milder term expressing surprise, emphasis, or frustration</li>
          </ul>
        </div>

        <ul className="flex gap-3 my-5 ml-2 ">
          <li className="">
            <Image
              className="p-1.5 bg-[#EDEDF3]   rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-sm shadow-black/60"
              src={"/play.svg"}
              alt="play sound"
              width={40}
              height={40}
            />
          </li>
          <li className="">
            <Image
              className="p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer  shadow-sm shadow-black/60"
              src={"/showImage.svg"}
              alt="show image examples"
              width={40}
              height={40}
            />
          </li>
          <li className="">
            <Image
              className="p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer  shadow-sm shadow-black/60"
              src={"/showExamples.svg"}
              alt=" show examples"
              width={40}
              height={40}
            />
          </li>
          <li className="">
            <Image
              className="p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer  shadow-sm shadow-black/60"
              src={"/AI.svg"}
              alt="AI meaning"
              width={40}
              height={40}
            />
          </li>
          <li className="">
            <Image
              className="p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer  shadow-sm shadow-black/60"
              src={"/Link.svg"}
              alt="link to examples"
              width={40}
              height={40}
            />
          </li>
        </ul>
      </header>
      <div className=" border-t-2  border-t-black/20 shadow-sm    pt-2  flex  justify-end gap-3  items-center">
        <span
          onClick={() => {
            setIsTracking((prev) => !prev);
          }}
          className=" flex items-center gap-2 select-none text-migaku-purple bg-[#EDE3FF] font-extrabold px-2 py-0.5 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300                                                                                    
        "
        >
          {isTracking ? (
            <Image src={"/dogPaw.svg"} width={20} height={20} alt="" />
          ) : null}
          {isTracking ? "TRACKING" : "TRACK"}
        </span>
        <span
          className="flex gap-2  text-[#FE698B] bg-[#FFE0E7]  font-extrabold px-2 py-1 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300
        "
        >
          <Image src={"/questionMark.svg"} alt="" height={20} width={20} />
          UNKNOWN
        </span>
      </div>
    </div>
  );
};

export default Card;
