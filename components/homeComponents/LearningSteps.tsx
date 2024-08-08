import Image from "next/image";
import {
  LearningStepsBgcard,
  LearningStepsCard,
} from "../LearningStepsCard/LearningStepsCard";
import { CardBorder3dBottom, CardBorder3dRight } from "../ui/cardBorder3d";

const LearningSteps = () => {
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
      <section className="grid gap-10  px-6 bg-[#0A002A] pt-40 pb-10">
        <aside className=" relative max-w-[520px] mx-auto ">
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

        <aside className="bg-[#252525]">
          <div className="flex justify-between gap-2   py-1.5 px-3">
            <figure className="flex gap-2">
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

            <div className="bg-[#4E4E4E] w-full flex gap-2 px-2 py-1">
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
        </aside>
      </section>
    </>
  );
};

export default LearningSteps;
