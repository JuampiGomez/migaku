import Image from "next/image";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "../ui/cardBorder3d";
import { TeamMembersHomePage } from "@/const";
import { Button } from "../ui/button";
import Link from "next/link";

const Team = () => {
  return (
    <section className="bg-[#0A002A] pt-20 pb-20 lg:pb-32 px-6  text-white xl:px-36">
      <h3 className="text-center font-extrabold text-3xl md:text-5xl lg:text-[66px] ">
        A team you can trust
      </h3>
      <p className="text-center font-medium text-xl mt-8 mb-12 md:text-2xl max-w-[660px] lg:text-3xl lg:max-w-[900px] mx-auto">
        The Migaku team is full of successful language learners who learned
        languages from native content. We’re building the platform we always
        wished existed.
      </p>

      <article className="grid gap-10  md:grid-cols-2 sm:mr-3 ">
        <TeamCard
          isHome={true}
          bgBox="bg-[#472589]"
          teamArray={TeamMembersHomePage}
        />
      </article>

      <h5 className="text-[#9B97A8] text-center mt-8 font-bold sm:text-lg  ">
        In total, we are a ~20 person team of talented developers and language
        professionals
      </h5>
      <Link href={"/team"}>
        <Button className="mx-auto block mt-5" variant={"purple"}>
          MEET THE TEAM
        </Button>
      </Link>
    </section>
  );
};

export default Team;

type TeamCardProps = {
  role: string;
  imageSrc: string;
  name: string;
  info: string;
};

type TeamMembersArrayProps = {
  teamArray: TeamCardProps[];
  bgBox: string;
  isHome?: boolean;
};

export const TeamCard = ({
  teamArray,
  bgBox,
  isHome,
}: TeamMembersArrayProps) => {
  return (
    <>
      {teamArray.map((member) => (
        <div
          key={member.name}
          className={`relative flex ${
            isHome ? "bg-[#1E2F5C]" : "bg-[#DFF4FF] dark:bg-[#1E2F5C]"
          }`}
        >
          <div className="pl-5 py-[18px] pr-2 flex flex-col gap-1.5">
            <span className="text-[#96a0b9] font-semibold text-[12px] md:text-sm">
              {member.role}
            </span>
            <h4 className="font-extrabold text-[12px]  md:text-sm">
              {member.name}
            </h4>
            <p className="text-[12px] font-medium max-w-[490px]  md:text-sm">
              {member.info}
            </p>
          </div>
          <Image
            className="max-[380px]:min-w-[100px] min-w-[156px] object-cover ml-auto"
            src={member.imageSrc}
            alt={`${member.name} photo`}
            width={156}
            height={156}
          />
          <CardBorder3dRight bg={`${bgBox}`} />
          <CardBorder3dBottom bg={`${bgBox}`} />

          {!isHome && <CardBorderLeftAndTop />}
        </div>
      ))}
    </>
  );
};
