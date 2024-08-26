import { GoogleExtension, MobileApp } from "@/components/download/Cards";
import CardWithAnimatedHeight from "@/components/download/CardWithAnimatedHeight";
import JoinEarlyAccess from "@/components/download/JoinEarlyAccess";
import { Button } from "@/components/ui/button";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "@/components/ui/cardBorder3d";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download - Migaku",
};

const page = () => {
  return (
    <>
      <main className="px-6">
        <h1 className=" text-migaku-dark-text dark:text-white font-extrabold text-center  text-2xl md:text-4xl md:max-w-[570px] md:mx-auto mt-10 mb-24">
          Download the tools you need and start learning:
        </h1>

        <section className="grid gap-24 md:gap-5 md:grid-cols-2 md:max-w-[1060px] md:mx-auto">
          <MobileApp />
          <GoogleExtension />
        </section>
        <JoinEarlyAccess />

        <section className="md:grid grid-cols-2 gap-4 items-start md:max-w-[1060px] md:mx-auto">
          <CardWithAnimatedHeight
            title="Legacy Extension"
            mainParagraphs={[
              "An older version of the Migaku extension. This less-user friendly version will be available until all main features are added to the latest extension.",
            ]}
            mainButton={{
              text: "GET THE EXTENSION",
              href: "https://chromewebstore.google.com/detail/migaku-legacy/acpchjgielgmkgkplljakcibfbjjppbk",
            }}
            subtitle="ADDITIONAL RESOURCES"
            secondaryParagraph="Convert local video files to be compatible with the extension's built-in media player"
            secondaryButton={{
              text: "DOWNLOAD",
              href: "https://github.com/migaku-official/migaku-player-converter",
            }}
          />

          <CardWithAnimatedHeight
            title="Using Anki"
            mainParagraphs={[
              "An alternative to the Migaku flashcard app, Anki works with both the newest extension and older legacy extension.",
              "Install this add-on to use Anki on desktop:",
            ]}
            mainButton={{
              text: "DOWNLOAD ADD-ON",
              href: "https://ankiweb.net/shared/info/1846879528",
            }}
            subtitle="For Japanese learners
"
            secondaryParagraph="Optimize your kanji-learning with the Kanji God Anki add-on.
"
            secondaryButton={{
              text: "DOWNLOAD",
              href: "https://ankiweb.net/shared/info/1872210448",
            }}
          />
        </section>

        <div className="mx-auto md:max-w-[1060px]">
          <section className="relative bg-[#FFFFFF] dark:bg-[#202047]  mt-10 p-4 md:p-8 grid  gap-7  mr-3    ">
            <div className="">
              <h2 className="font-extrabold text-2xl md:text-4xl mb-3 ">
                Try our trainer apps
              </h2>
              <p className=" md:text-lg">
                A small daily investment of 5-10 minutes will contribute to a
                more native-like pronunciation of over time.
              </p>
            </div>

            <article className="flex flex-col gap-10 lg:flex-row lg:justify-between">
              <aside className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center md:gap-5 lg:gap-20">
                <div className="flex gap-4">
                  <Image
                    src={"/japaneseCircleFlag.svg"}
                    width={40}
                    height={40}
                    alt=""
                    className=" shadow-lg"
                  />
                  <p className="font-extrabold text-[12px] md:text-sm">
                    PITCH TRAINER FOR JAPANESE
                    <span className="block font-medium text-sm md:text-base text-gray-700  dark:text-gray-400">
                      Practice pitch accents
                    </span>
                  </p>
                </div>
                <a
                  className="max-w-max"
                  href="https://pitch.migaku.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-3 md:mt-0 flex gap-1"
                    variant={"purple"}
                  >
                    STUDY
                    <svg
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 25 24"
                      role="img"
                      className="-rotate-45"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.25 12c0-.69.56-1.25 1.25-1.25h9.145l-3.602-3.902a1.25 1.25 0 0 1 1.837-1.696l5.539 6a1.25 1.25 0 0 1 0 1.696l-5.539 6a1.25 1.25 0 1 1-1.837-1.696l3.602-3.902H6.5c-.69 0-1.25-.56-1.25-1.25"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </a>
              </aside>
              <aside className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center lg:gap-20">
                <div className="flex gap-4">
                  <Image
                    src={"/chineseCircleFlag.svg"}
                    width={40}
                    height={40}
                    alt=""
                  />
                  <p className="font-extrabold text-[12px] md:text-sm">
                    TONE TRAINER FOR MANDARIN
                    <span className="block font-medium text-sm md:text-base text-gray-700 dark:text-gray-400">
                      Practice tones
                    </span>
                  </p>
                </div>
                <a
                  className="max-w-max"
                  href="https://tones.migaku.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-3 md:mt-0 flex gap-1"
                    variant={"purple"}
                  >
                    STUDY
                    <svg
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 25 24"
                      role="img"
                      className="-rotate-45"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.25 12c0-.69.56-1.25 1.25-1.25h9.145l-3.602-3.902a1.25 1.25 0 0 1 1.837-1.696l5.539 6a1.25 1.25 0 0 1 0 1.696l-5.539 6a1.25 1.25 0 1 1-1.837-1.696l3.602-3.902H6.5c-.69 0-1.25-.56-1.25-1.25"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </a>
              </aside>
            </article>

            <CardBorder3dBottom bg="bg-white dark:bg-[#2B2B60]" />
            <CardBorder3dRight bg="bg-white dark:bg-[#2B2B60]" />
            <CardBorderLeftAndTop />
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
