import Image from "next/image";
import { CardBorder3dBottom, CardBorder3dRight } from "../ui/cardBorder3d";
import { Button } from "../ui/button";
import Link from "next/link";

const SetUp = () => {
  return (
    <section className="pt-32 px-6 text-white flex flex-col lg:px-10 xl:px-36  setUpBg">
      
      <h3 className="font-extrabold text-3xl text-center md:text-5xl  max-w-[20ch] mx-auto lg:max-w-[40ch] lg:text-6xl">
        But it all seems so technical...!
      </h3>
      <p className="font-medium text-center text-xl my-10 mx-auto  lg:text-3xl  max-w-[50ch] lg:max-w-[50ch]">
        Rest assured setting up Migaku is easy and just takes a couple minutes
      </p>

      <article className="flex flex-col gap-4 lg:gap-7 lg:flex-row lg:items-center z-20 ">
        <div className="">
          <aside className="relative  max-w-[504px] mx-auto ">
            <div className="  bg-migaku-beige border border-black flex flex-col  items-center px-10 py-10 ">
              <Image
                src="/migakuPet.svg"
                width={100}
                height={100}
                alt="migaku pet"
              />

              <h4 className="text-[#00005A] text-center font-extrabold my-5 text-2xl">
                Sign up for a free account
              </h4>
              <p className="text-center text-[#00005A] font-medium text-lg">
                Start with our 10-day free trial. No credit card required.
              </p>

              <Link href={"/signup"} className="mt-5">
                <Button className="py-2.5 px-6">GET STARTED</Button>
              </Link>
            </div>
            <CardBorder3dRight bg="bg-[#DFF4FF] " />
            <CardBorder3dBottom bg="bg-[#DFF4FF] " />
          </aside>

          <span className=" uppercase text-center block mt-6 mb-3 text-sm font-extrabold">
            Make migaku yours
          </span>
        </div>

        <svg
          className="w-4 rotate-90  mx-auto lg:rotate-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 18"
          role="img"
        >
          <path
            fill="#fff"
            fillOpacity=".6"
            d="M0 2.312C0 .61 1.992-.314 3.292.785l7.904 6.688a2 2 0 0 1 0 3.054l-7.904 6.688C1.992 18.315 0 17.39 0 15.688V2.312Z"
          ></path>
        </svg>

        <div className="">
          <aside className="relative  max-w-[400px] mx-auto ">
            <div className="  bg-migaku-beige border border-black flex flex-col  items-center px-10 py-8 ">
              <h4 className="text-[#00005A] text-center font-extrabold mb-5 text-2xl">
                Get Migaku for your browser
              </h4>
              <p className="text-center text-[#00005A] font-medium text-lg">
                Install our Chrome browser extension to start learning from your
                favorite content
              </p>

              <a
                target="_blank"
                href={
                  "https://chrome.google.com/webstore/detail/migaku-learn-languages/lkhiljgmbeecmljiogckofcalncmfnfo"
                }
                className="mt-5"
              >
                <Button className="py-2.5 px-6">GET THE EXTENSION</Button>
              </a>
            </div>
            <CardBorder3dRight bg="bg-[#DFF4FF] " />
            <CardBorder3dBottom bg="bg-[#DFF4FF] " />
          </aside>

          <span className=" uppercase text-center block mt-6 mb-3 text-sm font-extrabold">
            Download the extension and mobile app
          </span>
        </div>

        <svg
          className="w-4 rotate-90  mx-auto lg:rotate-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 18"
          role="img"
        >
          <path
            fill="#fff"
            fillOpacity=".6"
            d="M0 2.312C0 .61 1.992-.314 3.292.785l7.904 6.688a2 2 0 0 1 0 3.054l-7.904 6.688C1.992 18.315 0 17.39 0 15.688V2.312Z"
          ></path>
        </svg>

        <div className=" relative max-w-max mx-auto">
          <Image
            src="/redPhoneBg.png"
            width={266}
            height={548}
            alt=""
            className="relative z-10 select-none  no-drag "
          />

          <div className="slider absolute top-3 left-3.5 w-[90%] min-[331px]:w-[87%]  lg:left-3 xl:left-3.5   no-drag">
            <Image
              src={"/exampleCardOpen.jpeg"}
              alt={""}
              className="rounded-2xl md:w-full select-none no-drag "
              width={246}
              height={500}
            />
          </div>

          <span className=" uppercase text-center block mt-6 mb-3 text-sm font-extrabold">
            Start studying or creating cards
          </span>
        </div>
      </article>
    </section>
  );
};

export default SetUp;
