"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const texts = [
  {
    watching: "watching Netflix",
    colorFrom: "from-primary-gradient-bluegreen",
    colorTo: "to-primary-gradient-lima",
  },
  {
    watching: "reading Reddit",
    colorFrom: "from-primary-gradient-softblue",
    colorTo: "to-primary-gradinet-lightblue",
  },
  {
    watching: "watching Netflix",
    colorFrom: "from-primary-gradient-bluegreen",
    colorTo: "to-primary-gradient-lima",
  },
  {
    watching: "reading novels",
    colorFrom: "from-primary-gradient-softblue",
    colorTo: "to-primary-gradinet-lightblue",
  },
  {
    watching: "watching Viki",
    colorFrom: "from-primary-gradient-bluegreen",
    colorTo: "to-primary-gradient-lima",
  },
  {
    watching: "reading articles",
    colorFrom: "from-primary-gradient-softblue",
    colorTo: "to-primary-gradinet-lightblue",
  },
  {
    watching: "reading X.com",
    colorFrom: "from-primary-gradient-softblue",
    colorTo: "to-primary-gradinet-lightblue",
  },
  {
    watching: "watching Disney+",
    colorFrom: "from-primary-gradient-bluegreen",
    colorTo: "to-primary-gradient-lima",
  },
];

const languages = [
  {
    language: "Japanese",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "Spanish",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "German",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "Portuguese",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "Mandarin",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "Cantonese",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "Korean",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
  {
    language: "French",
    colorFrom: "from-primary-gradient-orange",
    colorTo: "to-primary-gradient-red",
  },
];

const Title = (props: Props) => {
  const [index, setIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const frameRef = useRef<number>();

  useEffect(() => {
    let start: number;
    let nextFrame: number;

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed >= 3000) {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        start = timestamp;
        setIsFirstRender(false);
      }

      nextFrame = requestAnimationFrame(tick);
    };

    nextFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(nextFrame);
  }, []);

  return (
    <h1 className="text-white mt-10 font-GTMaruBlack font-extrabold text-center text-5xl max-[414px]:text-4xl sm:text-[48px] md:text-[70px] lg:text-[90px]">
      Start{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={isFirstRender ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-transparent bg-gradient-to-b bg-clip-text ${texts[index].colorFrom} ${texts[index].colorTo}`}
        >
          {texts[index].watching}
        </motion.span>
      </AnimatePresence>{" "}
      in{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={`lang-${index}`}
          initial={isFirstRender ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-transparent bg-gradient-to-b bg-clip-text ${languages[index].colorFrom} ${languages[index].colorTo}`}
        >
          {languages[index].language}
        </motion.span>
      </AnimatePresence>{" "}
      in 3 months
    </h1>
  );
};

export default Title;
