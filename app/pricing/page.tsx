import PricingCard, {
  EearlyAccessCard,
} from "@/components/pricing/PricingCard";
import PromoCode from "@/components/pricing/PromoCode";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <div className="px-6">
        <h1 className="font-extrabold text-center mt-10 mb-5 text-5xl md:text-7xl lg:text-8xl">
          Choose a plan
        </h1>

        <p className="text-center font-medium max-w-[30ch] mx-auto md:max-w-[40ch] md:text-lg lg:max-w-full">
          Start your 10 day free trial or sign up immediately for unlimited
          access
        </p>
        <Link href={"/signup"} className="mt-5 mb-10 block max-w-max mx-auto">
          <Button className="md:text-lg">START 10 DAY FREE TRIAL</Button>
        </Link>
      </div>
      <section className="px-6 grid gap-10 md:grid-cols-2 mr-3 md:max-w-[910px] md:mx-auto lg:max-w-full lg:grid-cols-3 ">
        <PricingCard
          title="Standard"
          subtitle="Our most popular plan."
          buttonText="START EXPLORING"
          yearlyPrice="$87"
          monthlyPrice="$9"
          backgroundClasses="bg-[#EDE3FF] dark:bg-[#202047]"
          featuresList={[
            "Study all 9 available languages",
            "Access to all of our courses",
            "Create unlimited interactive flashcards",
            "Powerful new AI features",
            "Many subtitle and video playback options",
            "Look up words & track your progress",
            "iOS & Android apps for studying on-the-go",
            "Anki support",
          ]}
        />

        <EearlyAccessCard />

        <PricingCard
          title="Lifetime"
          subtitle="The most cost-effective plan."
          buttonText="GET ENDLESS BENEFITS"
          yearlyPrice="..."
          monthlyPrice="$399"
          isLimitedTimeOffer={true}
          backgroundClasses="bg-[#EDE3FF] dark:bg-[#202047] md:col-span-2 lg:col-span-1 lg:mr-3  "
          featuresList={[
            "Lifetime access",
            "Invest in our success",
            "Everything included in Early Access",
          ]}
        />
      </section>

      <PromoCode />
    </main>
  );
};

export default page;
