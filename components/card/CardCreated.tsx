"use client";

import Image from "next/image";

import { useState, useRef } from "react";
import "./card.css";
import { Button } from "../ui/button";

type Props = {
  hidden: boolean;
};

const CardCreated = ({ hidden }: Props) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Referencia al audio

  function playAudio(src: string) {
    if (audioRef.current) {
      audioRef.current.pause(); // Pausa cualquier reproducción en curso
      audioRef.current.currentTime = 0; // Reinicia el audio desde el principio
      audioRef.current.src = src; // Establece la nueva fuente
      audioRef.current.play(); // Reproduce el audio
    } else {
      const audio = new Audio(src);
      audioRef.current = audio;
      audio.play();
    }
  }

  return (
    <>
      <div
        className={`${
          hidden ? "hidden" : "block"
        } bg-white max-h-[425px] sm:max-h-[520px] overflow-y-auto no-scroll  max-w-[306px] sm:max-w-[350px]  px-4 pt-8 pb-4 rounded-[28px] relative z-20`}
      >
        <h3 className="text-[#3C91FF] text-3xl sm:text-[32px] mb-3 font-extrabold text-center">
          Anfang
        </h3>
        <p className="font-bold text-center  text-[18px] sm:text-[20px]  leading-6">
          <span className="text-black">Der</span>{" "}
          <span className="text-[#3C91FF]">Anfang</span>{" "}
          <span className="text-black">ist das</span>{" "}
          <span className="text-gray-500">Ende</span>{" "}
          <span className="text-black">und das</span>{" "}
          <span className="text-gray-500">Ende</span>{" "}
          <span className="text-black">ist der</span>{" "}
          <span className="text-[#3C91FF]">Anfang</span>.
        </p>

        <div className=" flex justify-center gap-2 my-2.5">
          <div
            onClick={() => playAudio("/audios/AnfangSentence.mp3")}
            className="flex gap-2 bg-[#EDE3FF] p-2 rounded-full cursor-pointer  transition hover:scale-110 duration-300"
          >
            <Image
              src={"/audioActive.svg"}
              width={20}
              height={26}
              alt="play word"
            />

            <div className=" flex flex-col  justify-center gap-0.5">
              <span className="bg-[#672FC3] w-3  h-0.5 sm:h-[3px]"></span>
              <span className="bg-[#672FC3] w-4 h-0.5 sm:h-[3px]"></span>
              <span className="bg-[#672FC3] w-2 h-0.5 sm:h-[3px]"></span>
            </div>
          </div>

          <Image
            src={"/audioActive.svg"}
            width={36}
            height={36}
            alt="play word"
            className=" bg-[#EDE3FF] p-2 rounded-full cursor-pointer transition hover:scale-110 duration-300 md:"
            onClick={() => playAudio("/audios/Anfang.mp3")}
          />
        </div>
        {showTranslation ? (
          <span className="text-[12px]  sm:text-sm font-medium text-gray-700 text-center block max-w-[170px] sm:max-w-[200px] mx-auto">
            The Beginning is the End and the End is the Beginning.
          </span>
        ) : (
          <button
            onClick={() => setShowTranslation(true)}
            className="font-bold font-GTMaru text-[12px] block mx-auto text-black p-2 shadow-xl  border rounded-xl transition hover:scale-105 duration-300 sm:text-base"
          >
            SEE TRANSLATION
          </button>
        )}

        <div className="w-full border shadow-md mt-3"></div>

        <aside className="mt-2 text-black">
          <span className="text-[#00005A] font-semibold">Anfang★★★★</span>
          <ul className=" text-[#00005A] font-semibold list-decimal pl-5 mt-1 text-[13px] md:text-base flex flex-col gap-2">
            <li>Beginning - the start or commencement of something</li>
            <li>Start - the point at which something begins</li>
            <li>Onset - the beginning or start of something</li>
          </ul>

          <Image
            src={"/netflixScene.avif"}
            className="w-full rounded-2xl mt-4 "
            width={400}
            height={400}
            alt=""
          />
        </aside>
      </div>
      <div className="absolute top-0  rotate-12  z-10   bg-[#BEBEC4] max-h-[425px] sm:max-h-[520px]  h-[425px] sm:h-[520px] w-[290px]  min-[408px]:w-[306px] max-w-[306px] sm:max-w-[350px] sm:w-[350px]  rounded-[28px]  "></div>
      <div className="absolute top-0  -rotate-12   z-[5]   bg-[#6B657F] max-h-[425px] sm:max-h-[520px]  h-[425px] sm:h-[520px] w-[290px]  min-[408px]:w-[306px] max-w-[306px] sm:max-w-[350px] sm:w-[350px]  rounded-[28px]  "></div>
    </>
  );
};

export default CardCreated;
