import Image from "next/image";
import { useState } from "react";

const CheckComprehension = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside className="relative max-w-[480px] mx-auto xl:max-w-[100%] lg:w-full lg:col-span-3">
      <div className="bg-[#444C93] rounded-t-2xl flex justify-between gap-2   py-1.5 px-3">
        <figure className="flex gap-0.5 ">
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

        <div className="bg-[#5B62A0] flex-grow  rounded-2xl  flex gap-2 pl-2 pr-1 py-1">
          <Image src={"/x.svg"} width={13} height={13} alt="" />
          <span className="text-white text-[12px]">twitter.com</span>
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

      <figure className="relative   ">
        <Image
          src={"/twitterBg.avif"}
          width={400}
          height={400}
          className="w-full  rounded-b-2xl  relative z-20 "
          alt=""
        />

        <div className="absolute flex gap-4 arrow-animation max-[400px]:left-8 left-10 -top-32 lg:-top-[120px] xl:left-20 max-w-[300px]   ">
          <div className="flex flex-col mt-5  ">
            <span className=" text-[#00C7A4] font-extrabold text-[12px] lg:text-lg   ml-auto">
              Try it!
            </span>
            <Image
              className=" ml-3  rotate-180 "
              src={"/greenArrow.svg"}
              width={80}
              height={85}
              alt=""
            />
          </div>
          <span className=" text-white  font-extrabold lg:text-2xl mt-5  mb-3">
            Check your comprehension!
          </span>
        </div>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() =>
            setTimeout(() => {
              setIsHovered(false);
            }, 500)
          }
          className="comprehension-button z-50 group  absolute top-1 left-10 w-[50px] sm:w-[100px] h-[15px]  md:h-[20px] lg:top-2.5 lg:left-20"
        ></button>

        <Image
          src={"greenPlanet.svg"}
          width={100}
          height={100}
          className="absolute -bottom-14 left-5 lg:w-[200px] lg:h-[200px] lg:-bottom-24 z-10 lg:left-10"
          alt=""
        />

        <div
          className={`${
            isHovered ? "block" : "hidden"
          }  hover:block max-w-[150px] min-[450px]:top-5 md:max-w-[265px] absolute top-3 left-5 md:left-14 md:top-8 xl:top-12 shadow-xl z-30`}
        >
          <Image
            src={"/ComprehensionCardImage.avif"}
            alt="comprehension card"
            width={133}
            height={160}
            className="w-full"
          />
        </div>
      </figure>
    </aside>
  );
};

export default CheckComprehension;
