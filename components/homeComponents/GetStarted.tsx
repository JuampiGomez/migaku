import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="bg-[#0A002A] text-white relative">
      <aside className="px-6  z-10 relative">
        <h3 className="text-center font-extrabold text-5xl md:text-8xl md:max-w-[846px] md:mx-auto">
          Ready to get fluent?
        </h3>
        <p className="my-5 md:my-10 text-center sm:text-xl md:text-3xl">
          Start your language learning journey today.
        </p>
        <Link href={"/singup"} className="block mx-auto max-w-max">
          <Button className="block max-w-max md:px-5 md:py-2 md:text-2xl">
            GET STARTED FOR FREE
          </Button>
        </Link>
        <span className="text-center block mt-5">No credit card required</span>
      </aside>
      <Image
        width={213}
        height={150}
        className="w-full  z-10 relative"
        src={"/cityBg.svg"}
        alt=""
      />
      <div className="city-gradient"></div>
    </section>
  );
};

export default GetStarted;
