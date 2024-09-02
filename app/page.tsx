import { Opinion, OpinionsDinamic } from "@/components/homeComponents/Opinions";
import Title from "@/components/homeComponents/Title";
import LanguageBall from "@/components/LanguageBall";
import { LanguageBalls } from "@/const";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { LearningIntro } from "@/components/homeComponents/LearningIntro";
import LearningSteps from "@/components/homeComponents/LearningSteps";
import SetUp from "@/components/setUp/SetUp";
import Team from "@/components/team/Team";
import FeaturesAndReviews from "@/components/features&reviews/FeaturesAndReviews";
import GetStarted from "@/components/homeComponents/GetStarted";

export default function Home() {
  return (
    <>
      <div className="bg-[#0A002A] absolute top-0 left-0 w-full h-[30vh] -z-10"></div>
      <main className=" px-6 pt-6 pb-12 bg-[#0A002A] relative">
        <OpinionsDinamic />
        <div className="flex justify-between  max-lg:hidden max-w-[1100px] mx-auto relative z-10">
          <Opinion
            text={`“The essential app for anyone seriously wanting to learn a language, period”
`}
          />
          <Opinion
            text={`“In 3 months, I feel farther than I got in my first 3 years of traditional study”
`}
          />
          <Opinion
            text={`“I have Migaku’s products to thank for getting me to JLPT N2 level Japanese”
`}
          />
        </div>

        <Title />

        <p className="text-center text-white font-medium mt-5 max-w-[550px]  mx-auto md:text-[18px]  lg:text-[28px] lg:max-w-[864px] relative z-10 ">
          Ever wondered if you’ll progress past ineffective apps and textbooks
          and start learning the real living language? Migaku has tools and
          concrete steps that will get you there fast.
        </p>
        {/* TODO: ADD HREF */}
        <Link href="" className="block max-w-max mx-auto mt-12 relative z-10">
          <Button className=" mx-auto block  px-6 py-2  ">Get Started</Button>
        </Link>
        <span className="text-[#01C0A0] block text-center mt-3 text-[12px] font-medium  relative z-10">
          No credit card required
        </span>

        <aside className="grid grid-cols-3 lg:grid-cols-9 lg:max-w-[900px] lg:mx-auto lg:place-content-center relative z-10">
          {LanguageBalls.map((language, i) => (
            <LanguageBall
              key={i}
              title={language.title}
              src={language.src}
              alt={language.alt}
            />
          ))}
        </aside>

        <Image
          src={"down-arrow-svgrepo-com.svg"}
          alt="go down"
          width={50}
          height={50}
          className=" mx-auto mt-14 animate-bounceY"
        />
      </main>
      <LearningIntro />
      <LearningSteps />
      <SetUp />
      <Team />
      <FeaturesAndReviews />
      <GetStarted />

      <figure className="absolute top-0 left-0 right-0 flex items-center justify-center h-full home-purple-bg   ">
        <svg
          className="max-w-[800px] svg-circle-rotation"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "none",
            transformOrigin: "50% 50% 0",

            transition: "none",
          }}
          viewBox="0 0 8050 8050"
          role="img"
        >
          <g opacity="0.1">
            <path
              fill="#FFF"
              d="M3235 7640c-165-12-384-39-440-54-40-10-49-16-47-32 5-26 4-26 53-9 136 48 653 79 945 56 718-57 1381-302 1948-720 438-324 775-749 984-1241 240-566 299-1185 171-1805-87-421-309-887-586-1230-96-119-275-295-393-387-420-325-929-498-1465-498-604 0-1200 234-1613 634-699 676-776 1774-178 2541 310 396 828 622 1321 576 575-54 1045-395 1209-879 46-135 60-226 60-392 0-261-56-452-195-666-269-411-785-563-1225-359-232 107-394 293-456 524-26 99-29 276-4 376 61 255 249 452 486 511 89 23 240 15 335-17 97-32 209-111 266-186 147-193 126-470-47-632-81-76-148-103-259-104-214 0-372 155-352 348 15 146 116 245 252 245 129 0 215-79 215-196 0-123-99-200-205-160-54 21-80 58-79 114 1 75 70 120 132 88 37-19 49-59 27-92-19-29-47-30-91-4-21 14-35 17-39 10-14-22 52-70 95-70 33 0 80 53 80 90 0 69-45 110-119 110-97 0-156-126-98-210 34-52 70-73 130-78 105-8 184 61 203 177 21 133-105 261-257 261-57 0-139-35-183-77-22-21-52-66-69-101-27-58-29-70-25-150 4-69 10-97 31-137 49-95 119-153 225-185 196-61 403 26 501 210 111 209 74 458-92 622-117 116-318 187-486 173-288-24-509-217-603-525-13-42-22-108-25-185-5-102-2-133 17-210 67-274 240-469 520-587 146-62 205-73 385-72 177 1 243 14 391 75 330 138 586 490 645 889 19 130 7 362-25 483-99 381-342 668-721 852-131 64-224 96-365 126-90 20-134 23-310 23-174 0-220-3-306-22-317-69-566-203-790-427-372-371-572-920-533-1464 33-465 219-883 539-1215 306-317 747-553 1205-645 173-35 284-45 480-45 355 0 663 64 975 201 832 365 1426 1221 1552 2233 20 159 17 585-5 735-92 623-323 1138-717 1597-339 395-866 751-1415 956-296 111-607 184-920 217-175 18-495 26-640 15z"
              style={{ transform: "none" }}
            />
          </g>
        </svg>
      </figure>
    </>
  );
}
