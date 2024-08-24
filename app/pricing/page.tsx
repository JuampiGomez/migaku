import PricingCard from "@/components/pricing/PricingCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <div className="px-6">
        <h1 className="font-extrabold text-center mt-10 mb-5 text-5xl">
          Choose a plan
        </h1>

        <p className="text-center font-medium">
          Start your 10 day free trial or sign up immediately for unlimited
          access
        </p>
        <Link href={"/signup"} className="my-5 block max-w-max mx-auto">
          <Button>START 10 DAY FREE TRIAL</Button>
        </Link>
      </div>
      <section className="px-6">
        <PricingCard />
      </section>
    </main>
  );
};

export default page;
