import React from "react";
import { TeamMembersTeamPage } from "@/const";
import { TeamCard } from "@/components/team/Team";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team - Migaku",
};

const page = () => {
  return (
    <main className="px-6 relative">
      <h1 className="text-center text-5xl md:text-8xl font-extrabold my-10 z-10 relative">
        Meet the team
      </h1>
      <p className="text-xl md:text-3xl font-medium text-center max-w-[58ch] mx-auto relative z-10">
        Migaku is built by an experienced team of accomplished language
        learners, power users, and industry professionals. We’re building the
        platform we always wished existed.
      </p>

      <section className="mr-3 my-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-10   max-w-[1110px] mx-auto">
          <TeamCard
            bgBox="bg-[#EDE3FF] dark:bg-[#472589]"
            teamArray={TeamMembersTeamPage}
          />
        </div>
      </section>

      <Image
        src={"careersGradient.svg"}
        width={600}
        height={300}
        className="top-36 sm:-top-32 w-full  absolute opacity-50 dark:opacity-20  select-none no-drag"
        alt=""
      />
    </main>
  );
};

export default page;
