"use client";
import Image from "next/image";
import "./card.css";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

type DictionarySource = {
  text: string;
  href: string;
};

type Audio = {
  text: string;
  href: string;
};

type Props = {
  level: 5 | 4;
  position: string;
  hiddenClasses: string;
  cardStatus: string;
  setCardStatus: React.Dispatch<React.SetStateAction<string>>;
  word: string;
  wordType: "noun" | "verb" | "particle";
  meanings: string[];
  meaningInContext: string;
  dictionarySource: DictionarySource[];
  examples: string[];
  imagesExamplesHref: string[];
  audioProps: Audio[];
};

const Card = ({
  level,
  position,
  hiddenClasses,
  cardStatus,
  setCardStatus,
  word,
  wordType,
  meanings,
  meaningInContext,
  dictionarySource,
  examples,
  imagesExamplesHref,
  audioProps,
}: Props) => {
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<
    "AI" | "audio" | "images" | "examples" | "links"
  >("AI");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (href: string) => {
    audioRef.current = new Audio(href);
    if (audioRef.current) {
      // Verifica que audioRef.current no sea null
      audioRef.current.currentTime = 0; // Reinicia el audio desde el principio
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`${position} ${hiddenClasses} bg-white max-w-[450px] w-full p-3 rounded-2xl absolute z-20 hover:block`}
    >
      <header className="max-h-[330px] overflow-y-auto no-scroll">
        <nav className="flex justify-between items-center">
          <h3 className="text-[#3F3F82] font-bold text-xl">{word}</h3>
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
            <li className="bg-gradient-to-b from-primary-gradient-orange to-primary-gradient-red rounded-full hover:scale-110 cursor-pointer transition-transform duration-300">
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
          <div className="flex gap-3 mb-4 items-center">
            <span className="text-[#2C2C76] font-extrabold">{wordType}</span>
            <span
              className={`font-extrabold flex gap-1 items-center p-0.5 px-1.5 rounded-lg ${
                level === 5
                  ? "text-[#00C7A4] bg-[#c9f7ee]"
                  : "text-[#3C91FF] bg-[#DFF4FF]"
              }`}
            >
              {level === 5 ? "Netflix 5" : "Netflix 4"}
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
            {meanings.map((meaning, i) => (
              <li key={i}>{meaning}</li>
            ))}
          </ul>
        </div>

        <ul className="flex gap-3 my-5 ml-2">
          <li className="">
            <Image
              className={`${
                activeOption === "audio" ? "bg-[#EDE3FF] " : "bg-[#EDEDF3]"
              } p-1.5 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-sm shadow-black/60`}
              src={`${
                activeOption === "audio" ? "/playActive.svg" : "/play.svg"
              }`}
              alt="play sound"
              width={40}
              height={40}
              onClick={() => setActiveOption("audio")}
            />
          </li>
          <li className="">
            <Image
              className={`${
                activeOption === "images" ? "bg-[#EDE3FF] " : "bg-[#EDEDF3]"
              } p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-sm shadow-black/60`}
              src={`${
                activeOption === "images"
                  ? "showImageActive.svg"
                  : "/showImage.svg"
              }`}
              alt="show image examples"
              width={40}
              height={40}
              onClick={() => setActiveOption("images")}
            />
          </li>
          <li className="">
            <Image
              className={`${
                activeOption === "examples" ? "bg-[#EDE3FF] " : "bg-[#EDEDF3] "
              } p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-sm shadow-black/60`}
              src={`${
                activeOption === "examples"
                  ? "/showExamplesActive.svg"
                  : "/showExamples.svg"
              }`}
              alt="show examples"
              width={40}
              height={40}
              onClick={() => setActiveOption("examples")}
            />
          </li>
          <li className="">
            <Image
              className={`${
                activeOption === "AI" ? "bg-[#EDE3FF] " : "bg-[#EDEDF3] "
              } p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-sm shadow-black/60`}
              src={`${activeOption === "AI" ? "/AIactive.svg" : "/AI.svg"}`}
              alt="AI meaning"
              width={40}
              height={40}
              onClick={() => setActiveOption("AI")}
            />
          </li>
          <li className="">
            <Image
              className="p-1.5 bg-[#EDEDF3] rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-sm shadow-black/60"
              src={`${
                activeOption === "links" ? "/LinkActive.svg" : "/Link.svg"
              }`}
              alt="link to examples"
              width={40}
              height={40}
              onClick={() => setActiveOption("links")}
            />
          </li>
        </ul>

        <div className="pl-3">
          {activeOption === "AI" ? (
            <motion.div
              key="AI" // Clave única para que Framer Motion maneje las animaciones al cambiar de opción
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#2C2C76] font-extrabold">
                What does this word mean in context?
              </span>
              <p className="mt-5 mb-3 text-[#39397F] font-medium">
                {meaningInContext}
              </p>

              <span className=" font-light text-sm">Sourced from chatGPT</span>
            </motion.div>
          ) : activeOption === "audio" ? (
            <motion.div
              key="audio" // Clave única para que Framer Motion maneje las animaciones al cambiar de opción
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="flex gap-3 items-center pb-10"
            >
              <ul className="flex flex-col gap-5">
                {audioProps.map((audioProp, i) => (
                  <li className="flex gap-3" key={i}>
                    <Image
                      src={"/playAudio.svg"}
                      height={20}
                      width={20}
                      alt="play audio"
                      className=" cursor-pointer"
                      onClick={() => playAudio(audioProp.href)}
                    />
                    <span className="text-[#575774] font-bold">
                      {audioProp.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : activeOption === "examples" ? (
            <motion.div
              key="examples"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className=""
            >
              <ul className="grid gap-3 font-bold text-[#2C2C76] pb-5  ">
                {examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </motion.div>
          ) : activeOption === "links" ? (
            <motion.div
              key="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className=""
            >
              <ul className="grid gap-3 font-bold text-[#2C2C76] pb-5 ">
                {dictionarySource.map((source, i) => (
                  <li
                    key={i}
                    className="flex gap-1 hover:underline cursor-pointer underline-offset-2 max-w-max"
                  >
                    <a href={source.href} target="_blank">
                      {source.text}
                    </a>
                    <Image
                      className=" -rotate-45"
                      src={"/arrow.svg"}
                      alt="go to source"
                      width={20}
                      height={20}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className=""
            >
              <ul className="flex overflow-x-auto gap-1 scrollbar-custom select-none">
                {imagesExamplesHref.map((imageHref, i) => (
                  <li key={i} className="flex-shrink-0 select-none">
                    <Image
                      src={imageHref}
                      alt="image example"
                      width={250}
                      height={115}
                      className=" rounded-2xl object-cover h-[115px] select-none"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </header>
      <div className="border-t-2 border-t-black/20 shadow-sm pt-2 flex justify-end gap-3 items-center">
        {cardStatus === "unknown" && (
          <span
            onClick={() => {
              setIsTracking((prev) => !prev);
            }}
            className="flex items-center gap-2 select-none text-migaku-purple bg-[#EDE3FF] font-extrabold px-2 py-0.5 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {isTracking ? (
              <Image src={"/dogPaw.svg"} width={20} height={20} alt="" />
            ) : null}
            {isTracking ? "TRACKING" : "TRACK"}
          </span>
        )}
        {cardStatus === "unknown" ? (
          <span
            onClick={() => setCardStatus("known")}
            className="flex gap-2 text-[#FE698B] bg-[#FFE0E7] font-extrabold px-2 py-1 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 select-none"
          >
            <Image src={"/questionMark.svg"} alt="" height={20} width={20} />
            UNKNOWN
          </span>
        ) : cardStatus === "known" ? (
          <span
            onClick={() => setCardStatus("ignored")}
            className="flex gap-2 font-extrabold px-2 py-1 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#DDFFF9] text-[#4DDAD1] select-none"
          >
            <Image src={"/known.svg"} alt="" height={20} width={20} />
            KNOWN
          </span>
        ) : (
          <span
            onClick={() => setCardStatus("unknown")}
            className="flex gap-2 font-extrabold px-2 py-1 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#EDEDF3] text-[#64649A] select-none"
          >
            <Image src={"/ignored.svg"} alt="" height={20} width={20} />
            IGNORED
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
