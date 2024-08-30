"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const KeyDefinitions = () => {
  const [definitionIsActive, setDefinitionIsActive] = useState(false);

  return (
    <section>
      <div
        onClick={() => setDefinitionIsActive((prev) => !prev)}
        className="mt-10 flex gap-5 items-center cursor-pointer group"
      >
        {definitionIsActive ? (
          <svg
            width={40}
            className="text-[#36206D] dark:text-[#B272FF] bg-[#EDE3FF] dark:bg-[#36206D] p-2 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="img"
          >
            <rect
              width="12.5"
              height="2.6"
              x="6"
              y="10.7"
              fill="currentColor"
              rx="1.3"
            ></rect>
          </svg>
        ) : (
          <svg
            width={40}
            className="text-[#36206D] dark:text-[#B272FF] bg-[#EDE3FF] dark:bg-[#36206D] p-2 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="img"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 5.75c.69 0 1.25.56 1.25 1.25v3.75H17a1.25 1.25 0 1 1 0 2.5h-3.75V17a1.25 1.25 0 1 1-2.5 0v-3.75H7a1.25 1.25 0 1 1 0-2.5h3.75V7c0-.69.56-1.25 1.25-1.25"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
        <h3 className=" group-hover:underline underline-offset-2 select-none font-bold text-migaku-dark-text dark:text-white text-xl md:text-2xl">
          Key Definitions
        </h3>
      </div>

      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: definitionIsActive ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:text-lg list-disc pl-5 ml-6 mt-5 grid gap-2 overflow-hidden"
      >
        <li>
          <strong>Hanzi:</strong> Chinese characters.
        </li>
        <li>
          <strong>Tone:</strong> the pitch of a word, of which there are 4
          distinct patterns represented by 4 different diacritics (accent
          marks); if there is no diacritic, it indicates a neutral or absent
          tone.
        </li>
        <li>
          <strong>Simplified:</strong> Chinese character set with less strokes.
        </li>
        <li>
          <strong>Traditional:</strong> Chinese character set with more strokes.
        </li>
      </motion.ul>

      <Image
        className="mt-5"
        src={"/chineseWall.AVIF"}
        alt="chinese wall"
        width={852}
        height={480}
      />
    </section>
  );
};

export default KeyDefinitions;
