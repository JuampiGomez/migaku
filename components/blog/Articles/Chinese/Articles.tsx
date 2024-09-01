"use client";

import { useRef, useEffect } from "react";
import GoodMorningTable from "./GoodMorningTable";
import KeyDefinitions from "./KeyDefinitions";
import Image from "next/image";

type AudioRefs = {
  [key: string]: HTMLAudioElement | null;
};

const Articles = () => {
  const audioRefs = useRef<AudioRefs>({
    早上好: null,
    早安: null,
    早: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Solo se ejecuta en el navegador
      audioRefs.current["早上好"] = new Audio("/audios/早上好.mp3");
      audioRefs.current["早安"] = new Audio("/audios/早安.mp3");
      audioRefs.current["早"] = new Audio("/audios/早.mp3");
    }
  }, []);

  const playAudio = (audioKey: string) => {
    const audio = audioRefs.current[audioKey];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <>
      <div className=" max-w-[800px] mx-auto">
        <p className="mt-12 font-medium text-lg md:text-2xl">
          Whether you&apos;re traveling abroad, want to make an impression on a
          Chinese speaker, or simply want to impress your friends, we&apos;ve
          got you covered with this detailed breakdown of the main ways to say
          good morning in Mandarin Chinese. We&apos;ll provide you with
          everything you need to know.
        </p>

        <article className="w-full">
          <h2 className="text-migaku-dark-text dark:text-white mt-10 font-extrabold text-2xl md:text-4xl mb-4">
            Overview
          </h2>

          <GoodMorningTable />

          <p className=" mt-5 rounded-2xl p-6 md:text-lg font-medium bg-[#EDE3FF] dark:bg-[#36206D] text-migaku-dark-text dark:text-white">
            Note: In this case, the listed terms are the same in both the
            Simplified and Traditional character sets.
          </p>

          <KeyDefinitions />
        </article>

        <article className="w-full">
          <h2 className="text-2xl md:text-4xl font-extrabold mt-12 mb-6 text-migaku-dark-text dark:text-white">
            Good Morning in Chinese
          </h2>
          <p className="md:text-lg">
            The greeting &quot;good morning&quot; is not as common as it is in
            the United States, but it&apos;s certainly used. You can use any of
            the following from the early morning until just before noon.
            Let&apos;s cover the 3 ways to say good morning and explore some of
            their differences.
          </p>{" "}
          <section>
            <h3 className="flex flex-wrap items-center gap-2 mt-5 font-extrabold text-migaku-dark-text dark:text-white text-xl md:text-2xl">
              Good Morning -{" "}
              <ruby className="">
                <ul>
                  <span className="text-[#38B8A1]">早</span>
                  <span className="text-[#626297]">上</span>
                  <span className="text-[#38B8A1]">好</span>
                </ul>
                <rt>
                  <span className="text-[#38B8A1]">zǎo</span>
                  <span className="text-[#626297]">shang</span>
                  <span className="text-[#38B8A1]">hǎo</span>
                </rt>
              </ruby>
              <Image
                onClick={() => playAudio("早上好")}
                src={"/audioActiveRose.svg"}
                width={40}
                height={40}
                alt="play audio"
                className="bg-[#EDE3FF] dark:bg-[#493085] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </h3>
            <div className="grid gap-1 my-5 md:text-lg">
              <p>
                <span className="font-extrabold">Literally: </span>
                early morning good
              </p>
              <p>
                <span className="font-extrabold">Sounds like: </span>
                &quot;zow shang how&quot;
              </p>
            </div>
            <p className="md:text-lg">
              This is the standard expression for good morning in mainland
              China. It&apos;s not overly formal or casual. This is rarely used
              in Taiwan.
            </p>
          </section>
          <section>
            <h3 className="flex flex-wrap items-center gap-2 mt-5 font-extrabold text-migaku-dark-text dark:text-white text-xl md:text-2xl">
              Good Morning -{" "}
              <ruby className="">
                <ul>
                  <span className="text-[#38B8A1]">早</span>
                  <span className="text-red-500">安</span>
                </ul>
                <rt>
                  <span className="text-[#38B8A1]">zǎo</span>
                  <span className="text-red-500">hǎn</span>
                </rt>
              </ruby>
              <Image
                onClick={() => playAudio("早安")}
                src={"/audioActiveRose.svg"}
                width={40}
                height={40}
                alt="play audio"
                className="bg-[#EDE3FF] dark:bg-[#493085] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </h3>
            <div className="grid gap-1 my-5 md:text-lg">
              <p>
                <span className="font-extrabold">Literally: </span>
                early peaceful
              </p>
              <p>
                <span className="font-extrabold">Sounds like: </span>
                &quot;zow ahn&quot;
              </p>
            </div>
            <p className="md:text-lg">
              This expression for good morning is highly regional. In Taiwan
              it&apos;s far more common than 早上好 . In the mainland it is
              still used but may be seen as more formal or literary.
            </p>
          </section>
          <section>
            <h3 className="flex flex-wrap items-center gap-2 mt-5 font-extrabold text-migaku-dark-text dark:text-white text-xl md:text-2xl">
              Mornin&apos; -{" "}
              <ruby className="">
                <ul>
                  <span className="text-[#38B8A1]">早</span>
                </ul>
                <rt>
                  <span className="text-[#38B8A1]">zǎo</span>
                </rt>
              </ruby>
              <Image
                onClick={() => playAudio("早")}
                src={"/audioActiveRose.svg"}
                width={40}
                height={40}
                alt="play audio"
                className="bg-[#EDE3FF] dark:bg-[#493085] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </h3>
            <div className="grid gap-1 my-5 md:text-lg">
              <p>
                <span className="font-extrabold">Literally: </span>
                early
              </p>
              <p>
                <span className="font-extrabold">Sounds like: </span>
                &quot;zow&quot;
              </p>
            </div>
            <p className="md:text-lg">
              This is the more casual version of the above. It simply consists
              of the character for &quot;early.&quot; It will often be followed
              by the sentence final particles 呀 or 啊 . These particles in
              particular don&apos;t really add much meaning to the phrase but
              may make the phrase sound slightly less abrupt, or in other words,
              more polite.
            </p>
            <p className="md:text-lg mt-5">
              Now you know how to say good morning in Mandarin Chinese! If that
              didn&apos;t quite scratch your itch, we have a comprehensive
              approach for learning Chinese from the basics all the way to
              fluency. It consists of an advanced software suite and in-depth
              courses for all your Mandarin needs. Start your free trial today!
            </p>
          </section>
        </article>
      </div>
    </>
  );
};

export default Articles;
