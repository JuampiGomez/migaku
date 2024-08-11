"use client";

import Image from "next/image";
import {
  LearningStepsBgcard,
  LearningStepsCard,
} from "../LearningStepsCard/LearningStepsCard";
import { CardBorder3dBottom, CardBorder3dRight } from "../ui/cardBorder3d";
import Card from "../card/Card";
import { useState } from "react";
import Panel from "./Panel";

const LearningSteps = () => {
  const [isHover, setIsHover] = useState("");
  const [cardOneStatus, setCardOneStatus] = useState<string>("unknown");
  const [cardTwoStatus, setCardTwoStatus] = useState<string>("known");
  const [cardThreeStatus, setCardThreeStatus] = useState<string>("unknown");
  const [cardFourStatus, setCardFourStatus] = useState<string>("known");
  const [cardFiveStatus, setCardFiveStatus] = useState<string>("unknown");
  const [cardSixStatus, setCardSixStatus] = useState<string>("knowm");

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHover(""); // Resetea el estado cuando el mouse deja de estar sobre cualquier span
    }, 500);
  };

  return (
    <>
      <section className="bg-[#0A002A] pt-10  px-6 grid gap-20 lg:grid-cols-2 lg:gap-5  xl:px-36  ">
        <aside className=" relative max-w-[520px] mx-auto ">
          <div
            className="
        bg-[#1E2F5C] max-w-[480px] px-4 py-6 md:py-16 md:px-12
        "
          >
            <span className="text-[#EB446E] font-extrabold">
              Skip this step if you’re not a beginner!
            </span>

            <h2 className="text-white text-2xl font-extrabold mt-5 mb-4  md:text-4xl">
              Learn the most common words
            </h2>
            <p className="mb-5 leading-7 text-white font-medium max-w-[90%] md:text-lg">
              You’re unsure how to even begin watching and reading content in a
              foreign language, it all seems so overwhelming…
            </p>
            <p className=" text-white font-bold pb-6 max-w-[90%] md:text-lg">
              You first learn the most common words and grammar patterns that
              make up 80+% of the foreign language content you’ll watch and
              read. This prepares you for Step 2.
            </p>

            <span className=" absolute -top-5 left-2 bg-white px-4 py-2 le rounded-2xl font-GTMaru font-bold  tracking-widest text-[#5F41CE] text-[12px] md:text-xl">
              STEP 1
            </span>
          </div>

          <CardBorder3dRight bg="bg-[#00C7A4] " />
          <CardBorder3dBottom bg="bg-[#00C7A4] " />
        </aside>

        <aside className=" relative  max-w-[520px]  mx-auto  ">
          <LearningStepsCard />
          <LearningStepsBgcard />
          <Image
            src={"/bigStar.svg"}
            alt=""
            width={60}
            height={60}
            className=" absolute -top-8 -left-10 select-none"
          />
          <Image
            src={"/twoBigStar.svg"}
            width={80}
            height={80}
            alt=""
            className=" absolute  -rotate-90 -bottom-20 lg:bottom-0  select-none
          "
          />
          <Image
            src={"planetsDecoration1.svg"}
            width={480}
            height={480}
            className=" absolute -right-[90%] top-[42%]   rotate-[30deg]"
            alt=""
          />
        </aside>
      </section>
      <section className="grid gap-10 md:gap-24 lg:gap-10 lg:grid-cols-2 xl:grid-cols-5 lg:items-center xl:px-24   px-6 bg-[#0A002A] pt-40  ">
        <aside className=" relative max-w-[520px]  max-xl:mx-auto xl:ml-auto lg:order-2 xl:col-span-2  ">
          <div
            className="
        bg-[#1E2F5C] max-w-[480px] px-4 py-6 md:py-16 md:px-12 
        "
          >
            <h2 className="text-white text-2xl font-extrabold mt-5 mb-4  md:text-4xl">
              Watch and read real native content
            </h2>
            <p className="mb-5 leading-7 text-white font-medium max-w-[90%] md:text-lg">
              Native content seems unapproachable, you’re not even sure how you
              can start making sense of it…
            </p>
            <p className=" text-white font-bold pb-6 max-w-[90%] md:text-lg">
              Click words in websites and subtitles to look up definitions,
              pronunciations, images, and ChatGPT AI generated explanations of
              words in context.
            </p>

            <span className=" absolute -top-5 left-2 bg-white px-4 py-2 le rounded-2xl font-GTMaru font-bold  tracking-widest text-[#5F41CE] text-[12px] md:text-xl">
              STEP 2
            </span>
          </div>

          <CardBorder3dRight bg="bg-[#00C7A4] " />
          <CardBorder3dBottom bg="bg-[#00C7A4] " />
        </aside>

        <aside className="relative max-w-[480px] mx-auto lg:order-1 xl:max-w-[100%] xl:w-full xl:col-span-3">
          <div className="bg-[#252525] rounded-t-2xl flex justify-between gap-2   py-1.5 px-3">
            <figure className="flex gap-0.5 ">
              <Image
                src={"/arrowRight.svg"}
                className=" rotate-180"
                width={18}
                height={18}
                alt=""
              />

              <Image src={"/arrowRight.svg"} width={18} height={18} alt="" />

              <Image src={"/reload.svg"} alt="" width={18} height={18} />
            </figure>

            <div className="bg-[#4E4E4E] flex-grow  rounded-2xl  flex gap-2 pl-2 pr-1 py-1">
              <Image
                src={"/youtubeLogoSmall.svg"}
                width={18}
                height={18}
                alt=""
              />
              <span className="text-white text-[12px]">youtube.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src={"/dots.svg"}
                className=" rotate-90"
                alt=""
                width={18}
                height={18}
              />
              <Image src={"/chorme.avif"} alt="" width={18} height={18} />
            </div>
          </div>

          <figure className="relative xl:max-w-[540px] ">
            <Image
              src={"/bgSpaceImg.avif"}
              width={400}
              height={400}
              className="w-full "
              alt=""
            />

            <div className="absolute left-5 -bottom-[40%]   min-[380px]:left-[20%] right-0 min-[380px]:-bottom-14 flex arrow-animation lg:-bottom-20 lg:left-0 ">
              <span className="text-white font-extrabold max-[356px]:text-sm text-xl   mt-auto lg:hidden ">
                Tap the words
              </span>

              <span className="text-white font-extrabold text-2xl mt-auto hidden lg:block mb-3">
                Hover over the words
              </span>
              <div className="flex flex-col  ">
                <Image
                  className=" ml-3 "
                  src={"/greenArrow.svg"}
                  width={80}
                  height={85}
                  alt=""
                />

                <span className=" text-[#00C7A4] font-extrabold text-[12px] lg:text-lg   ml-auto">
                  Try it!
                </span>
              </div>
            </div>

            <div
              onMouseLeave={handleMouseLeave}
              className="flex justify-center gap-1 w-full absolute top-[50%]  min-[380px]:top-[50%]  sm:top-[60%] text-white  font-extrabold py-2 xl:top-[65%]"
            >
              <span
                onMouseEnter={() => {
                  setIsHover("宇宙");
                }}
                className={` text-2xl max-[356px]:text-sm cursor-pointer`}
              >
                <ruby>
                  <span
                    className={`${
                      cardOneStatus === "unknown"
                        ? "underline underline-offset-[6px] decoration-red-500"
                        : cardOneStatus === "known"
                        ? "underline underline-offset-[6px] decoration-green-500"
                        : ""
                    }  decoration-2`}
                  >
                    宇宙
                  </span>
                  <rp>(</rp>
                  <rt className=" no-underline">うちゅう</rt>
                  <rp>)</rp>
                </ruby>
              </span>

              <span
                onMouseEnter={() => {
                  setIsHover("は");
                }}
                className={`${
                  cardTwoStatus === "unknown"
                    ? "underline underline-offset-[6px] decoration-red-500"
                    : cardTwoStatus === "known"
                    ? "underline underline-offset-[6px] decoration-green-500"
                    : ""
                }   mt-auto decoration-2  max-[356px]:text-sm text-2xl cursor-pointer`}
              >
                は
              </span>

              <span
                onMouseEnter={() => {
                  setIsHover("神秘");
                }}
                className={` text-2xl max-[356px]:text-sm  cursor-pointer`}
              >
                <ruby>
                  <span
                    className={`${
                      cardThreeStatus === "unknown"
                        ? "underline underline-offset-[6px] decoration-red-500"
                        : cardThreeStatus === "known"
                        ? "underline  underline-offset-[6px] decoration-green-500"
                        : " decoration-2"
                    }`}
                  >
                    神秘
                  </span>
                  <rp>(</rp>
                  <rt>しんぴ</rt>
                  <rp>)</rp>
                </ruby>
              </span>

              <span
                onMouseEnter={() => {
                  setIsHover("に");
                }}
                className={`
                  ${
                    cardFourStatus === "unknown"
                      ? "underline underline-offset-[6px] decoration-red-500"
                      : cardFourStatus === "known"
                      ? "underline  underline-offset-[6px] decoration-green-500"
                      : " decoration-2"
                  }
                  mt-auto max-[356px]:text-sm text-2xl cursor-pointer`}
              >
                に
              </span>

              <span
                onMouseEnter={() => {
                  setIsHover("満ちて");
                }}
                className="text-2xl max-[356px]:text-sm cursor-pointer"
              >
                <ruby>
                  <span
                    className={`${
                      cardFiveStatus === "unknown"
                        ? "underline underline-offset-[6px] decoration-red-500"
                        : cardFiveStatus === "known"
                        ? "underline underline-offset-[6px] decoration-green-500"
                        : ""
                    } decoration-2`}
                  >
                    満ちて
                  </span>
                  <rp>(</rp>
                  <rt className=" pl-1 pb- max-w-max  ">み</rt>
                  <rp>)</rp>
                </ruby>
              </span>

              <span
                onMouseEnter={() => {
                  setIsHover("いる");
                }}
                className={`
                  ${
                    cardSixStatus === "unknown"
                      ? "underline underline-offset-[6px] decoration-red-500"
                      : cardSixStatus === "known"
                      ? "underline underline-offset-[6px] decoration-green-500"
                      : ""
                  } }
                 decoration-2  mt-auto text-2xl max-[356px]:text-sm cursor-pointer`}
              >
                いる
              </span>
            </div>

            <Card
              position=" 
              -bottom-[110%]  sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
              level={5}
              hiddenClasses={`${isHover === "宇宙" ? "block" : "hidden"}`}
              cardStatus={cardOneStatus}
              setCardStatus={setCardOneStatus}
              word="宇宙"
              wordType="noun"
              meanings={["universe, cosmos, space"]}
              meaningInContext={`The term refers to the universe or cosmos, implying the entirety of space, including all matter and energy, stars, planets, galaxies, and the contents of intergalactic space. The encompassment of everything from the largest scale of galaxies to the smallest subatomic particles is implied.


`}
              dictionarySource={[
                {
                  text: "Jisho Japanese-English Dictionary",
                  href: "https://jisho.org/search/%E5%AE%87%E5%AE%99",
                },
                {
                  text: "Longman Japanese-English Dictionary",
                  href: "https://www.ldoceonline.com/dictionary/japanese-english/%E5%AE%87%E5%AE%99",
                },
                {
                  text: "Weblio Monolingual Dictionary",
                  href: "https://www.weblio.jp/content/%E5%AE%87%E5%AE%99",
                },
                {
                  text: "Verbix Conjugation Dictionary",
                  href: "https://www.verbix.com/webverbix/japanese/%E5%AE%87%E5%AE%99",
                },
              ]}
              examples={[
                "宇宙は無限だ。",
                "The universe is endless.",
                "宇宙を旅するのは、私の夢の一つです。",
                "Traveling through the universe is one of my dreams.",
                "あなたは宇宙人ですか？",
                "Are you an alien?",
              ]}
              imagesExamplesHref={[
                "/space1.webp",
                "/space2.webp",
                "/space3.webp",
                "/space4.webp",
              ]}
              audioProps={[
                {
                  href: "/audios/宇宙.mp3",
                  text: "strawberrybrown (Female from Japan)",
                },
              ]}
            />

            <Card
              position=" 
              -bottom-[110%]  sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
              level={5}
              hiddenClasses={`${isHover === "は" ? "block" : "hidden"}`}
              cardStatus={cardTwoStatus}
              setCardStatus={setCardTwoStatus}
              word="は"
              wordType="particle"
              meanings={[
                "topic marker particle",
                "indicates contrast with another option (stated or unstated)",
                "adds emphasis",
                "yes, indeed, well",
              ]}
              meaningInContext={`The particle "は" serves as a topic marker in this sentence. It indicates that "the universe" (宇宙) is the subject being talked about and contrasts or emphasizes it in relation to what comes after. The sentence suggests that the universe is the scope within which the characteristic of being "full of mystery" is being highlighted.


`}
              dictionarySource={[
                {
                  text: "Jisho Japanese-English Dictionary",
                  href: "https://jisho.org/search/%E3%81%AF",
                },
                {
                  text: "Longman Japanese-English Dictionary",
                  href: "https://www.ldoceonline.com/dictionary/japanese-english/%E3%81%AF",
                },
                {
                  text: "Weblio Monolingual Dictionary",
                  href: "https://www.weblio.jp/content/%E3%81%AF",
                },
                {
                  text: "Verbix Conjugation Dictionary",
                  href: "https://www.verbix.com/webverbix/japanese/%E3%81%AF",
                },
              ]}
              examples={[
                "私は学生です。",
                "I am a student",
                "ここは図書館です。",
                "This is a library.",
                "日本語は難しいです。",
                "Japanese is difficult.",
              ]}
              imagesExamplesHref={["/ha3.webp"]}
              audioProps={[
                {
                  href: "/audios/は.mp3",
                  text: "strawberrybrown (Female from Japan)",
                },
              ]}
            />

            <Card
              position=" 
              -bottom-[110%]  sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
              level={4}
              hiddenClasses={`${isHover === "神秘" ? "block" : "hidden"}`}
              cardStatus={cardThreeStatus}
              setCardStatus={setCardThreeStatus}
              word="神秘"
              wordType="noun"
              meanings={["mystery, mysteriousness, secret"]}
              meaningInContext={`The word "神秘" implies that the universe is filled with mysteries or profound secrets that are possibly beyond human understanding. It conveys a sense of something enigmatic or supernatural, suggesting that the universe holds many secrets which are intriguing and elusive.`}
              dictionarySource={[
                {
                  text: "Jisho Japanese-English Dictionary",
                  href: "https://jisho.org/search/%E7%A5%9E%E7%A7%98",
                },
                {
                  text: "Longman Japanese-English Dictionary",
                  href: "https://www.ldoceonline.com/dictionary/japanese-english/%E7%A5%9E%E7%A7%98",
                },
                {
                  text: "Weblio Monolingual Dictionary",
                  href: "https://www.weblio.jp/content/%E7%A5%9E%E7%A7%98",
                },
                {
                  text: "Verbix Conjugation Dictionary",
                  href: "https://www.verbix.com/webverbix/japanese/%E7%A5%9E%E7%A7%98",
                },
              ]}
              examples={[
                "夜空の星、キラキラしてる！ 神秘だね。",
                "The stars in the night sky are twinkling! It's so magical.",
                "宝箱の中、何が入ってる？ 神秘な宝物かな？",
                "What's inside the treasure chest? Could it be a mysterious treasure?",
                "この光ってる石は神秘の力がある。",
                "This glowing stone has a mysterious power.",
              ]}
              imagesExamplesHref={["/mistery1.webp", "/mistery2.webp"]}
              audioProps={[
                {
                  href: "/audios/神秘.mp3",
                  text: "poyotan (Female from Japan)",
                },
              ]}
            />

            <Card
              position=" 
              -bottom-[110%]  sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
              level={5}
              hiddenClasses={`${isHover === "に" ? "block" : "hidden"}`}
              cardStatus={cardFourStatus}
              setCardStatus={setCardFourStatus}
              word="に"
              wordType="particle"
              meanings={[
                "at (place, time), in, on, during",
                "to (direction, state), toward, into",
                "for (purpose)",
                "because of (reason), for, with",
              ]}
              meaningInContext={`The particle "は" serves as a topic marker in this sentence. It indicates that "the universe" (宇宙) is the subject being talked about and contrasts The or particle emphasizes "は" it serves in as relation a to topic what marker comes in after. this The sentence. sentence It suggests indicates that that the "the universe universe" is (宇宙) the is scope the within subject which being the talked characteristic about of and being contrasts "full or of emphasizes mystery" it is in being relation highlighted. to what comes after. The sentence suggests that the universe is the scope within which the characteristic of being "full of mystery" is being highlighted.`}
              dictionarySource={[
                {
                  text: "Jisho Japanese-English Dictionary",
                  href: "https://jisho.org/search/%E3%81%AB",
                },
                {
                  text: "Longman Japanese-English Dictionary",
                  href: "https://www.ldoceonline.com/dictionary/japanese-english/%E3%81%AB",
                },
                {
                  text: "Weblio Monolingual Dictionary",
                  href: "https://www.weblio.jp/content/%E3%81%AB",
                },
                {
                  text: "Verbix Conjugation Dictionary",
                  href: "https://www.verbix.com/webverbix/japanese/%E3%81%AB",
                },
              ]}
              examples={[
                "私は毎日学校に行きます。",
                "I go to shool every day.",
                "彼は昨日パーティーに参加しました。",
                "He attended the party yesterday.",
                "町に新しい図書館ができました。",
                "A new library was built in the town.",
              ]}
              imagesExamplesHref={["/ni1.webp", "/ni2.webp", "/ni3.webp"]}
              audioProps={[
                {
                  href: "/audios/に.mp3",
                  text: "strawberrybrown (Female from Japan)",
                },
              ]}
            />

            <Card
              position=" 
              -bottom-[110%]  sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
              level={4}
              hiddenClasses={`${isHover === "満ちて" ? "block" : "hidden"}`}
              cardStatus={cardFiveStatus}
              setCardStatus={setCardFiveStatus}
              word="満ちる"
              wordType="verb"
              meanings={[
                "to be full",
                "to wax (e.g. moon)",
                "to rise (e.g. tide)",
              ]}
              meaningInContext={`The verb "満ちる" suggests the state of being full or completely filled with something. In this context, it conveys that the universe is entirely filled with mystery, implying a sense of awe and the presence of numerous, possibly unfathomable, mysteries throughout the cosmos.`}
              dictionarySource={[
                {
                  text: "Jisho Japanese-English Dictionary",
                  href: "https://jisho.org/search/%E6%BA%80%E3%81%A1%E3%81%A6",
                },
                {
                  text: "Longman Japanese-English Dictionary",
                  href: "https://www.ldoceonline.com/dictionary/japanese-english/%E6%BA%80%E3%81%A1%E3%81%A6",
                },
                {
                  text: "Weblio Monolingual Dictionary",
                  href: "https://www.weblio.jp/content/%E6%BA%80%E3%81%A1%E3%81%A6",
                },
                {
                  text: "Verbix Conjugation Dictionary",
                  href: "https://www.verbix.com/webverbix/japanese/%E6%BA%80%E3%81%A1%E3%81%A6",
                },
              ]}
              examples={[
                "春になると、公園は人々で満ちる。",
                "In spring, the park fills up with people.",
                "彼の心は愛で満ちている。",
                "His heart is filled with love.",
                "川が雨で満ちる。",
                "The river fills up with rain.",
              ]}
              imagesExamplesHref={[
                "/tobefull1.webp",
                "/tobefull2.webp",
                "/tobefull3.webp",
              ]}
              audioProps={[
                {
                  href: "/audios/満ちる.mp3",
                  text: "Google Text-to-Speech (Female)",
                },
              ]}
            />

            <Card
              position=" 
              -bottom-[110%]  sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
              level={5}
              hiddenClasses={`${isHover === "いる" ? "block" : "hidden"}`}
              cardStatus={cardSixStatus}
              setCardStatus={setCardSixStatus}
              word="いる"
              wordType="noun"
              meanings={[
                "to be (of animate objects), to exist",
                "to stay",
                "to be ...-ing, to have been ...-ing",
              ]}
              meaningInContext={`In the phrase "宇宙は神秘に満ちている", the word "いる" indicates a state of being, implying that the universe is constantly filled with mystery. It expresses the ongoing nature of the universe's state, rather than a temporary or changing condition.`}
              dictionarySource={[
                {
                  text: "Jisho Japanese-English Dictionary",
                  href: "https://jisho.org/search/%E3%81%84%E3%82%8B",
                },
                {
                  text: "Longman Japanese-English Dictionary",
                  href: "https://www.ldoceonline.com/dictionary/japanese-english/%E3%81%84%E3%82%8B",
                },
                {
                  text: "Weblio Monolingual Dictionary",
                  href: "https://www.weblio.jp/content/%E3%81%84%E3%82%8B",
                },
                {
                  text: "Verbix Conjugation Dictionary",
                  href: "https://www.verbix.com/webverbix/japanese/%E3%81%84%E3%82%8B",
                },
              ]}
              examples={[
                "彼は次の角にいる。",
                "He's at the next corner.",
                "トムは家の中にいる。",
                "Tom is in the house",
                "友達が家にいる。",
                "My friend is at home.",
              ]}
              imagesExamplesHref={["/iru1.webp", "/iru2.webp", "/iru3.webp"]}
              audioProps={[
                {
                  href: "/audios/いる.mp3",
                  text: "strawberrybrown (Female from Japan)",
                },
              ]}
            />
          </figure>
          <Panel />
        </aside>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default LearningSteps;
