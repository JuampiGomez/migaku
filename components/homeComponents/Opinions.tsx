"use client";

import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const opinions = [
  "“In 3 months, I feel farther than I got in my first 3 years of traditional study”",
  "“The essential app for anyone seriously wanting to learn a language, period”",
  "“I have Migaku’s products to thank for getting me to JLPT N2 level Japanese”",
];

export const OpinionsDinamic = () => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const intervalRef = useRef<number>();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Verifica el tamaño inicial de la pantalla

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let start: number;
    let nextFrame: number;

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed >= 3000) {
        setIndex((prevIndex) => (prevIndex + 1) % opinions.length);
        start = timestamp;
        setIsFirstRender(false);
      }

      nextFrame = requestAnimationFrame(tick);
    };

    if (isSmallScreen) {
      nextFrame = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(nextFrame);
  }, [isSmallScreen]);

  if (!isSmallScreen) {
    return null;
  }

  return (
    <div className=" lg:hidden">
      <div className="flex gap-1 justify-center">
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
      </div>

      <div className="text-white max-w-[280px] mx-auto text-center leading-6 mt-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={isFirstRender ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className=" text-[18px] font-medium"
          >
            {opinions[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
type opinionProp = {
  text: string;
};

export const Opinion = ({ text }: opinionProp) => {
  return (
    <div>
      <div className="flex gap-1 justify-center">
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
        <Image src={"/star.svg"} width={21} height={21} alt="star" />
      </div>

      <div className="text-white max-w-[280px] text-center leading-6 mt-4">
        <p className=" text-[18px]  font-medium">{text}</p>
      </div>
    </div>
  );
};
