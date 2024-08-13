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
import CardCreated from "../card/CardCreated";
import { Button } from "../ui/button";

const LearningSteps = () => {
  const [isHover, setIsHover] = useState("");
  const [cardOneStatus, setCardOneStatus] = useState<string>("unknown");
  const [cardTwoStatus, setCardTwoStatus] = useState<string>("known");
  const [cardThreeStatus, setCardThreeStatus] = useState<string>("unknown");
  const [cardFourStatus, setCardFourStatus] = useState<string>("known");
  const [cardFiveStatus, setCardFiveStatus] = useState<string>("unknown");
  const [cardSixStatus, setCardSixStatus] = useState<string>("knowm");
  const [cardNetflixStatus, setCardNetflixStatus] = useState<string>("unknown");

  const [cardCreatedHidden, setCardCreatedHidden] = useState<boolean>(true);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHover(""); // Resetea el estado cuando el mouse deja de estar sobre cualquier span
    }, 500);
  };

  return (
    <>
      {/* STEP 1 SECTION */}
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

      {/* STEP 2 SECTION */}
      <section className="grid gap-10 md:gap-24 lg:gap-10 xl:gap-20 lg:grid-cols-2 xl:grid-cols-5 lg:items-center xl:px-24   px-6 bg-[#0A002A] pt-40 pb-10  ">
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
              -bottom-[170%]  min-[360px]:-bottom-[155%] min-[390px]:-bottom-[145%] min-[404px]:-bottom-[135%]  min-[424px]:-bottom-[125%] min-[444px]:-bottom-[115%] min-[474px]:-bottom-[105%]  min-[500px]:-bottom-[96%]  min-[525px]:-bottom-[88%]    sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
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
              -bottom-[170%]  min-[360px]:-bottom-[155%] min-[390px]:-bottom-[145%] min-[404px]:-bottom-[135%]  min-[424px]:-bottom-[125%] min-[444px]:-bottom-[115%] min-[474px]:-bottom-[105%]  min-[500px]:-bottom-[96%]  min-[525px]:-bottom-[88%]    sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
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
              -bottom-[170%]  min-[360px]:-bottom-[155%] min-[390px]:-bottom-[145%] min-[404px]:-bottom-[135%]  min-[424px]:-bottom-[125%] min-[444px]:-bottom-[115%] min-[474px]:-bottom-[105%]  min-[500px]:-bottom-[96%]  min-[525px]:-bottom-[88%]    sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
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
              -bottom-[170%]  min-[360px]:-bottom-[155%] min-[390px]:-bottom-[145%] min-[404px]:-bottom-[135%]  min-[424px]:-bottom-[125%] min-[444px]:-bottom-[115%] min-[474px]:-bottom-[105%]  min-[500px]:-bottom-[96%]  min-[525px]:-bottom-[88%]    sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
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
              -bottom-[170%]  min-[360px]:-bottom-[155%] min-[390px]:-bottom-[145%] min-[404px]:-bottom-[135%]  min-[424px]:-bottom-[125%] min-[444px]:-bottom-[115%] min-[474px]:-bottom-[105%]  min-[500px]:-bottom-[96%]  min-[525px]:-bottom-[88%]    sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
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
              -bottom-[170%]  min-[360px]:-bottom-[155%] min-[390px]:-bottom-[145%] min-[404px]:-bottom-[135%]  min-[424px]:-bottom-[125%] min-[444px]:-bottom-[115%] min-[474px]:-bottom-[105%]  min-[500px]:-bottom-[96%]  min-[525px]:-bottom-[88%]    sm:-bottom-[95%]  left-1/2 transform -translate-x-1/2 xl:-bottom-[83%]"
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

      {/* STEP 3 SECTION */}
      <section
        className={`grid ${
          cardCreatedHidden
            ? "gap-[420px]  sm:gap-80 lg:gap-10  xl:gap-20 "
            : "gap-20"
        } lg:grid-cols-2 xl:grid-cols-5 lg:items-center xl:px-24   px-6 bg-[#0A002A] pt-40  `}
      >
        <aside className=" relative max-w-[520px]  max-xl:mx-auto xl:ml-auto  xl:col-span-2  ">
          <div
            className="
        bg-[#1E2F5C] max-w-[480px] px-4 py-6 md:py-10 md:px-12 
        "
          >
            <h2 className="text-white text-2xl font-extrabold mt-5 mb-4  md:text-4xl">
              Create your own learning materials
            </h2>
            <p className="mb-5 leading-7 text-white font-medium max-w-[90%] md:text-lg">
              You’ve always been frustrated and bored using apps and taking
              classes. The materials are never very engaging…
            </p>
            <p className=" text-white font-bold pb-6 max-w-[90%] md:text-lg">
              Choose content that interests you, then effortlessly create
              flashcards directly from that content. Each new word you learn
              increases your understanding.
            </p>

            <h5 className="text-white font-extrabold uppercase text-sm mb-1">
              The flashcards you create include:
            </h5>

            <p className="  text-[14px]">
              The new word and its context sentence, audio, screenshot,
              definition, <span className=" text-red-400">AI explanation</span>{" "}
              and much more!
            </p>

            <span className=" absolute -top-5 left-2 bg-white px-4 py-2 le rounded-2xl font-GTMaru font-bold  tracking-widest text-[#5F41CE] text-[12px] md:text-xl">
              STEP 3
            </span>
          </div>

          <CardBorder3dRight bg="bg-[#00C7A4] " />
          <CardBorder3dBottom bg="bg-[#00C7A4] " />
        </aside>

        <aside
          className={`${
            cardCreatedHidden ? " lg:mt-auto" : "flex justify-center"
          } relative max-w-[480px] mx-auto  xl:max-w-[100%] xl:w-full xl:col-span-3`}
        >
          <div
            className={`${
              cardCreatedHidden ? "flex" : "hidden"
            } bg-[#252525] rounded-t-2xl justify-between gap-2   py-1.5 px-3`}
          >
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
              <Image src={"/netflixRedLogo.svg"} width={9} height={18} alt="" />
              <span className="text-white text-[12px]">netflix.com</span>
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

          <figure
            className={`${cardCreatedHidden ? "block" : "hidden"} relative`}
          >
            <Image
              src={"/netflixScene.avif"}
              width={400}
              height={400}
              className="w-full rounded-b-xl  "
              alt=""
            />

            <div className=" absolute bottom-8  lg:bottom-7 xl:bottom-10  w-full flex justify-center  ">
              <div className="text-white font-extrabold  capitalize text-center max-[360px]:text-sm lg:text-xl xl:text-2xl leading-loose">
                <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                  Der
                </b>{" "}
                <span className=" cursor-pointer group  relative text-[#3C91FF] bg-[#DFF4FF] border border-[#3C91FF] rounded-[4px] p-0.5">
                  Anfang
                  <span className=" hidden  group-hover:flex absolute left-1 top-6  lg:left-3.5 xl:left-2 xl:top-7">
                    <Image
                      src="/starBlueLight.svg"
                      alt="star"
                      width={10}
                      height={10}
                      className="xl:w-[15px] xl:h-[15px]"
                    />
                    <Image
                      src="/starBlueLight.svg"
                      alt="star"
                      width={10}
                      height={10}
                      className="xl:w-[15px] xl:h-[15px]"
                    />
                    <Image
                      src="/starBlueLight.svg"
                      alt="star"
                      width={10}
                      height={10}
                      className="xl:w-[15px] xl:h-[15px]"
                    />
                    <Image
                      src="/starBlueLight.svg"
                      alt="star"
                      width={10}
                      height={10}
                      className="xl:w-[15px] xl:h-[15px]"
                    />
                    <Image
                      src="/starBlueLight.svg"
                      alt="star"
                      width={10}
                      height={10}
                      className="xl:w-[15px] xl:h-[15px]"
                    />
                  </span>
                </span>{" "}
                <span>
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    ist
                  </b>{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    das
                  </b>{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    ende
                  </b>{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    und
                  </b>{" "}
                  <br />{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    das
                  </b>{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    ist
                  </b>{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    der
                  </b>{" "}
                  <b className=" hover:underline hover:decoration-2 hover:underline-offset-4 decoration-green-400 cursor-pointer">
                    anfang
                  </b>
                </span>
              </div>
            </div>

            <div className=" absolute  bottom-0 px-5 lg:px-10 xl:px-20 w-[100%]  ">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 591 38"
                role="img"
              >
                <g filter="url(#1073fc86cbe--a)" fill="none">
                  <path
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.118px"
                    d="m24.383 16.361-13.49-8.25a.75.75 0 0 0-1.143.638v16.5a.75.75 0 0 0 1.143.637l13.49-8.25a.74.74 0 0 0 0-1.275Z"
                  ></path>
                </g>
                <rect
                  width="506"
                  height="5"
                  x="85"
                  y="15"
                  fill="#FFFFFF"
                  opacity=".6"
                  rx="2.5"
                ></rect>
                <path
                  fill="#FFFFFF"
                  d="M50.605 17.7a2.4 2.4 0 0 1 2.4-2.4h190.298a2.4 2.4 0 0 1 0 4.8H53.005a2.4 2.4 0 0 1-2.4-2.4Z"
                ></path>
                <defs>
                  <filter
                    id="1073fc86cbe--a"
                    width="39.998"
                    height="39.998"
                    x="-5"
                    y="-1"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_22954_70378"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_22954_70378"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </figure>

          <Card
            cardCreateHidden={cardCreatedHidden}
            setCardCreatedHidden={setCardCreatedHidden}
            word="Anfang"
            wordType="noun"
            level={4}
            meaningInContext={`In this position, "Anfang" means "beginning" or "start," referring to the starting point of a sequence, process, or event. The phrase suggests a cyclical or recursive concept where the start is directly connected to the end.
`}
            meanings={[
              "Beginning - the start or commencement of something",
              "Start - the point at which something begins",
              "Onset - the beginning or start of something",
            ]}
            cardStatus={cardNetflixStatus}
            setCardStatus={setCardNetflixStatus}
            dictionarySource={[
              {
                text: "Dict.cc German-English Dictionary",
                href: "https://www.dict.cc/?s=Anfang",
              },
              {
                text: "Leo German-English Dictionary",
                href: "https://dict.leo.org/german-english/Anfang",
              },
              {
                text: "DWDS Monolingual Dictionary",
                href: "https://www.dwds.de/wb/Anfang",
              },
              {
                text: "Verbix Conjugation Dictionary",
                href: "https://www.verbix.com/webverbix/german/Anfang",
              },
            ]}
            hiddenClasses={`${cardCreatedHidden ? "block" : "hidden"}`}
            audioProps={[
              {
                text: "laMer (Female from Germany)",
                href: "/audios/Anfang.mp3",
              },
            ]}
            position=" -top-72 sm:-top-48 lg:left-2 xl:left-32 xl:-top-[15%]"
            examples={[
              "Am Anfang ist es schwer.",
              "In the beginning, it's hard.",
              "Ich habe am Anfang gelesen.",
              "I read at the beginning.",
              "Anfang nächsten Monats beginne ich.",
              "I start at the beginning of next month.",
            ]}
            imagesExamplesHref={[
              "/anfang1.webp",
              "/anfang2.webp",
              "/anfang3.webp",
            ]}
          >
            <div className="absolute -top-24 right-1.5 z-30 flex arrow-animation  ">
              <span className="text-white font-extrabold max-[356px]:text-sm text-xl   mt-auto  ">
                Create a card
              </span>

              <div className="flex flex-col  ">
                <span className=" text-[#00C7A4] font-extrabold text-[12px] lg:text-lg   ">
                  Try it!
                </span>
                <Image
                  className=" "
                  src={"/greenArrowSmall.svg"}
                  width={40}
                  height={45}
                  alt=""
                />
              </div>
            </div>
          </Card>
          {cardCreatedHidden === false ? (
            <div className="relative  max-w-max">
              <CardCreated hidden={cardCreatedHidden} />

              <Button
                onClick={() => setCardCreatedHidden(true)}
                className="px-2 flex left-1/2 z-50 -bottom-12 -translate-x-1/2 absolute"
              >
                UNDO
              </Button>
            </div>
          ) : null}
          <Image
            src={"/twoBigStar.svg"}
            width={90}
            height={90}
            className="hidden xl:block absolute -top-24  left-[0%] "
            alt=""
          />
        </aside>
      </section>
    </>
  );
};

export default LearningSteps;
