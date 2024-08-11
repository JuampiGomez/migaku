import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Panel = () => {
  return (
    <figure
      className="hidden xl:flex flex-col justify-between  p-2 bg-white w-[184px] absolute top-10 bottom-0
   right-0 z-10  rounded-ee-2xl "
    >
      <ul className="flex flex-col gap-2">
        <div className="p-[2px] bg-gradient-to-b from-primary-gradient-orange to-primary-gradient-red rounded-md">
          <div className="bg-white border border-transparent text-[#00005A] font-bold p-2 text-sm rounded-md">
            <p className="max-w-[75%] leading-loose">
              <span className=" cursor-pointer underline underline-offset-4 decoration-2 decoration-orange-400">
                宇宙
              </span>{" "}
              <span className="cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
                は
              </span>{" "}
              <span className=" cursor-pointer group  relative text-[#3C91FF] bg-[#DFF4FF] border border-[#3C91FF] rounded-[4px] p-0.5">
                神秘
                <span className=" hidden  group-hover:flex absolute top-5 -left-2">
                  <Image
                    src="/starBlueLight.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/starBlueLight.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/starBlueLight.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/starBlueLight.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/starBlueLight.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                </span>
              </span>{" "}
              <span className=" cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
                に
              </span>{" "}
              <span className=" cursor-pointer underline underline-offset-4 decoration-2 decoration-orange-400">
                満ちて
              </span>{" "}
              <span className=" cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
                いる
              </span>
            </p>
          </div>
        </div>

        <div className="border-2 shadow-md text-[#00005A] font-bold p-2 text-sm rounded-md">
          <p className="max-w-[95%] leading-relaxed">
            <span className="cursor-pointer  underline underline-offset-4 decoration-2 decoration-orange-400 hover:decoration-red-500">
              いっぱい
            </span>{" "}
            <span className="cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              きらきら
            </span>{" "}
            <span className="cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              お
            </span>{" "}
            <span className="cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              星
            </span>{" "}
            <span className="cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              さま
            </span>{" "}
            <span className="cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              が
            </span>{" "}
            <span className="cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              ある
            </span>
          </p>
        </div>

        <div className="border-2 shadow-md text-[#00005A] font-bold p-2 text-sm rounded-md">
          <p className="max-w-[70%] leading-relaxed">
            <span className=" cursor-pointer  underline underline-offset-4 decoration-2 decoration-orange-400 hover:decoration-red-500">
              そんな
            </span>{" "}
            <span className=" cursor-pointer  underline underline-offset-4 decoration-2 decoration-orange-400 hover:decoration-red-500">
              もん
            </span>{" "}
            <span className=" cursor-pointer hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              て
            </span>{" "}
            <span className=" cursor-pointer  underline underline-offset-4 decoration-2 decoration-orange-400 hover:decoration-red-500">
              ダークマータ
            </span>
          </p>
        </div>

        <div className="border-2 shadow-md text-[#00005A] font-bold p-2 text-sm rounded-md">
          <p className="max-w-[75%]  leading-relaxed">
            <span className="cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              言葉
            </span>{" "}
            <span className="cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              に
            </span>{" "}
            <span className="cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              できない
            </span>{" "}
            <span className="cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              ほか
            </span>{" "}
            <span className="cursor-pointer  hover:decoration-2 decoration-green-500 hover:underline  underline-offset-4">
              ない
            </span>{" "}
            <span className="cursor-pointer group  text-[#35D3B7] bg-[#DDFFF9] border border-[#35D3B7] rounded-[4px] p-0.5 relative">
              気持ち
              <span className=" hidden  group-hover:flex absolute  top-5.5 -left-0.5">
                <Image
                  src="/starGreenLight.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
                <Image
                  src="/starGreenLight.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
                <Image
                  src="/starGreenLight.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
                <Image
                  src="/starGreenLight.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
                <Image
                  src="/starGreenLight.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
              </span>
            </span>{" "}
          </p>
        </div>
      </ul>

      <div className="flex flex-col gap-2 pt-1.5">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-b from-primary-gradient-orange to-primary-gradient-red max-w-max p-0.5 rounded-sm cursor-pointer">
            <Check className="" width={10} height={10} />
          </div>
          <span className="text-[#00005A] text-[10px]  font-medium ">
            Show in context
          </span>
        </div>

        <Button className=" text-[10px] w-full p-1">CREATE 1 CARD</Button>
        <Button variant={"LightPurple"} className="text-[10px] w-full p-1">
          CLEAR SELECTION
        </Button>
      </div>
    </figure>
  );
};

export default Panel;
