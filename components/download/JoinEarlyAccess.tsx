import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const JoinEarlyAccess = () => {
  return (
    <section className="bg-[#FFEBDC] dark:bg-[#724E34] mt-10 p-4 md:p-8 flex flex-col gap-6 max-w-[66rem] mx-auto  items-center rounded-3xl">
      <h2 className="text-center font-extrabold text-migaku-dark-text dark:text-white text-2xl md:text-4xl">
        Join Early Access for extra perks
      </h2>
      <aside className="flex items-center gap-7">
        <Image width={78} height={38} src={"/diamond.svg"} alt="diamond" />
        <div className="">
          <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-[12px] mb-2 md:text-sm">
            TRY OUT NEW FEATURES FIRST
          </h3>
          <p className="text-sm text-migaku-dark-text font-medium dark:text-white max-w-[40ch] md:text-base">
            Get early access to new features that have not been released yet to
            the rest of the community.
          </p>
        </div>
      </aside>
      <aside className="flex items-center gap-7">
        <Image width={78} height={65} src={"/happyFace.svg"} alt="happy face" />
        <div className="">
          <h3 className="text-migaku-dark-text font-extrabold text-[12px] mb-2 dark:text-white md:text-sm">
            GET ACCES TO EXCLUSIVE DISCORD CHANNELS
          </h3>
          <p className="text-sm text-migaku-dark-text font-medium dark:text-white max-w-[40ch] md:text-base">
            Unlock the early Access channels in Discord where you can talk with
            other members about the latest features!
          </p>
        </div>
      </aside>
      <div className="flex flex-col items-center gap-4">
        <Link href={"/signup"}>
          <Button className="md:text-lg">SIGN UP FOR EARLY ACCESS</Button>
        </Link>
        <div className=" flex flex-col items-center gap-4 md:flex-row">
          <p className="text-[12px] text-migaku-dark-text dark:text-white md:text-sm">
            Already an Early Access member?
          </p>
          <p className="text-[12px] text-migaku-dark-text dark:text-white md:text-sm">
            <Link className="underline underline-offset-1" href={"/login"}>
              Log in
            </Link>{" "}
            to acces your perks
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinEarlyAccess;
