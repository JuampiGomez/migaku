"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "../ui/cardBorder3d";
import { Button, buttonVariants } from "../ui/button";

type mainButton = {
  text: string;
  href: string;
};

type secondaryButton = {
  text: string;
  href: string;
};

type Props = {
  title: string;
  mainParagraphs: string[];
  subtitle: string;
  secondaryParagraph: string;
  mainButton: mainButton;
  secondaryButton: secondaryButton;
};

const CardWithAnimatedHeight = ({
  title,
  mainButton,
  mainParagraphs,
  secondaryButton,
  secondaryParagraph,
  subtitle,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      onClick={() => setIsOpen((prev) => !prev)}
      className="bg-[#FFFFFF] dark:bg-[#202047] relative mr-3 mt-10 p-8 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl md:text-4xl text-migaku-dark-text dark:text-white font-extrabold select-none">
          {title}
        </h3>
        <Image
          className="bg-[#EDE3FF] dark:bg-[#493085] rounded-full p-1 select-none"
          src={`${isOpen ? "/minusSymbol.svg" : "/plusSymbol.svg"}`}
          width={40}
          height={40}
          alt="see more"
        />
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className={`mt-5 flex flex-col gap-5 md:text-lg`}>
          {mainParagraphs.map((p) => (
            <p
              key={p}
              className="text-migaku-dark-text dark:text-white font-medium"
            >
              {p}
            </p>
          ))}
          <a className="max-w-max" href={mainButton.href} target="_blank">
            <Button className="max-w-max md:px-5 md:py-2" variant={"purple"}>
              {mainButton.text}
            </Button>
          </a>

          <span className="text-[12px] md:text-sm font-extrabold uppercase">
            {subtitle}
          </span>

          <p className="text-migaku-dark-text dark:text-white font-medium text-sm md:text-base">
            {secondaryParagraph}
          </p>

          <a className="max-w-max" href={secondaryButton.href} target="_blank">
            <Button className="max-w-max md:px-5 md:py-2" variant={"purple"}>
              {secondaryButton.text}
            </Button>
          </a>
        </div>
      </motion.div>

      <CardBorder3dBottom bg="bg-white dark:bg-[#2B2B60]" />
      <CardBorder3dRight bg="bg-white dark:bg-[#2B2B60]" />
      <CardBorderLeftAndTop />
    </aside>
  );
};

export default CardWithAnimatedHeight;
