"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "/allDecksBg.jpeg",
    alt: "all decks",
    text: "Enjoy studying like a pro anytime, anywhere",
  },
  {
    src: "/exampleCardOpen.jpeg",
    alt: "example card open",
    text: "Customize cards to show coloring, translations",
  },
  {
    src: "/exampleCardKorean.jpeg",
    alt: "example card Korean",
    text: "Navigate with buttons...or swipe like Tinder <3",
  },
  {
    src: "/exampleCardNetflix.jpeg",
    alt: "example card Netflix",
    text: "Keep your cards neat and organized",
  },
];

const PhoneSlider = () => {
  const [activeImage, setActiveImage] = useState(1);

  function handleActiveImage() {
    setActiveImage((prev) => (prev < images.length ? prev + 1 : 1));
  }

  return (
    <>
      <Image
        src="/redPhoneBg.png"
        width={266}
        height={548}
        alt=""
        className="relative z-10 select-none cursor-pointer no-drag md:w-[340px]"
        onClick={handleActiveImage}
      />

      <motion.div
        className="slider absolute top-3 left-3.5 w-[90%] no-drag"
        key={activeImage}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={images[activeImage - 1].src}
          alt={images[activeImage - 1].alt}
          className="rounded-2xl select-none no-drag w-full"
          width={246}
          height={500}
        />
      </motion.div>

      <span className="text-[12px] text-gray-300 block mt-4 text-center max-w-[305px] mx-auto">
        {images[activeImage - 1].text}
      </span>

      <ul className="flex justify-center items-center gap-4 py-5">
        {images.map((_, index) => (
          <li key={index} className="flex">
            <motion.span
              onClick={() => setActiveImage(index + 1)}
              className={`${
                activeImage === index + 1
                  ? "bg-white p-2.5"
                  : "bg-[#5F5974] p-2 hover:scale-125 transition-transform duration-200 cursor-pointer"
              } rounded-full`}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: activeImage === index + 1 ? 1.1 : 1,
                backgroundColor:
                  activeImage === index + 1 ? "#FFFFFF" : "#5F5974",
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhoneSlider;
