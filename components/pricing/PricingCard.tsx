import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "../ui/cardBorder3d";

type Props = {};

const PricingCard = (props: Props) => {
  return (
    <aside className="bg-[#EDE3FF] dark:bg-[#202047] px-[18px] py-8 relative grid gap-8">
      <div className="grid gap-4">
        <h2 className="text-center font-extrabold text-migaku-dark-text dark:text-white text-2xl">
          Standard
        </h2>
        <span className="block text-center">Our most popular plan.</span>
        <Link href={"/signup"} className="max-w-max mx-auto">
          <Button>START EXPLORING</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        <span className="block text-center font-extrabold text-[32px] text-migaku-dark-text dark:text-white ">
          $9
        </span>
        <span className="block text-center  text-migaku-dark-text dark:text-white font-medium">
          Monthly
        </span>
        <p className="text-center text-sm text-gray-700 dark:text-gray-400">
          14-day money-back guarantee. <br />
          Cancel anytime.
        </p>
      </div>

      <div className="flex justify-center gap-3">
        <input type="checkbox" />
        <span className="text-[12px] font-bold">Yearly price</span>
        <span className="text-[12px] text-gray-700 dark:text-gray-400">
          Save 20%
        </span>
      </div>

      <div className="">
        <ul className="text-[12px] flex flex-col gap-3 items-center">
          <li className="flex gap-2">
            <Image src={"/checkLight.svg"} width={20} height={20} alt="check" />
            Study all 9 available languages
          </li>
          <li className="flex gap-2">
            <Image src={"/checkLight.svg"} width={20} height={20} alt="check" />
            Access to all of our courses
          </li>
          <li className="flex gap-2">
            <Image src={"/checkLight.svg"} width={20} height={20} alt="check" />
            Create unlimited interactive flashcards
          </li>
          <li className="flex gap-2">
            <Image src={"/checkLight.svg"} width={20} height={20} alt="check" />
            Access to all of our courses
          </li>
          <li className="flex gap-2">
            <Image src={"/checkLight.svg"} width={20} height={20} alt="check" />
            Study all 9 available languages
          </li>
        </ul>
      </div>

      <CardBorder3dBottom bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorder3dRight bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorderLeftAndTop />
    </aside>
  );
};

export default PricingCard;
