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
      <main className=" px-6 pt-6 pb-12 bg-[#0A002A]">
        <OpinionsDinamic />
        <div className="flex justify-between  max-lg:hidden max-w-[1100px] mx-auto">
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

        <p className="text-center text-white font-medium mt-5 max-w-[550px]  mx-auto md:text-[18px]  lg:text-[28px] lg:max-w-[864px] ">
          Ever wondered if you’ll progress past ineffective apps and textbooks
          and start learning the real living language? Migaku has tools and
          concrete steps that will get you there fast.
        </p>
        {/* TODO: ADD HREF */}
        <Link href="" className="block max-w-max mx-auto mt-12">
          <Button className=" mx-auto block  px-6 py-2  ">Get Started</Button>
        </Link>
        <span className="text-[#01C0A0] block text-center mt-3 text-[12px] font-medium">
          No credit card required
        </span>

        <aside className="grid grid-cols-3 lg:grid-cols-9 lg:max-w-[900px] lg:mx-auto lg:place-content-center">
          {LanguageBalls.map((language, i) => (
            <LanguageBall
              key={i}
              title={language.title}
              src={language.src}
              alt={language.alt}
              IsClickable={language.IsClickable}
              href={language.href}
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
    </>
  );
}
