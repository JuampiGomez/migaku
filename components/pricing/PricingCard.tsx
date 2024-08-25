"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "../ui/cardBorder3d";

type Props = {
  monthlyPrice: string;
  yearlyPrice: string;
  featuresList: string[];
  title: string;
  subtitle: string;
  isLimitedTimeOffer?: boolean;
  buttonText: string;
  backgroundClasses: string;
};

const PricingCard = ({
  monthlyPrice,
  yearlyPrice,
  featuresList,
  title,
  subtitle,
  isLimitedTimeOffer = false,
  buttonText,
  backgroundClasses,
}: Props) => {
  const [isAnualPrice, setIsAnualPrice] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnualPrice(event.target.checked);
  };

  function useDarkMode() {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // Default to light mode if window is not defined
  }

  return (
    //
    <aside
      className={`${backgroundClasses} px-[18px] py-8 relative flex flex-col gap-8 w-full max-w-[390px] mx-auto`}
    >
      <div className="grid gap-4">
        <h2 className="text-center font-extrabold text-migaku-dark-text dark:text-white text-2xl md:text-4xl">
          {title}
        </h2>
        <span className="block text-center md:text-lg">{subtitle}</span>
        <Link href={"/signup"} className="max-w-max mx-auto">
          <Button className="md:text-lg">{buttonText}</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        <span className="block text-center font-extrabold text-[32px] text-migaku-dark-text dark:text-white md:text-6xl ">
          {isAnualPrice ? yearlyPrice : monthlyPrice}
        </span>
        <span className="block text-center  text-migaku-dark-text dark:text-white font-medium md:text-lg">
          {isAnualPrice ? "Yearly" : "Monthly"}
        </span>
        <p className="text-center text-sm text-gray-700 dark:text-gray-400 md:text-base">
          14-day money-back guarantee. <br />
          Cancel anytime.
        </p>
      </div>

      {isLimitedTimeOffer ? (
        <div className="">
          <span className="block max-w-max mx-auto font-bold text-migaku-dark-text text-[12px] md:text-sm bg-[#F2FFA0] px-3 py-2  rounded-2xl">
            Limited Time Offer
          </span>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-3">
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isAnualPrice}
          />
          <span className="text-[12px] md:text-sm  font-bold">
            Yearly price
          </span>
          <span className="text-[12px] md:text-sm text-gray-700 dark:text-gray-400">
            Save 20%
          </span>
        </div>
      )}

      <div className="">
        <ul className="text-[12px] md:text-sm flex flex-col gap-3 items-center text-center">
          {featuresList.map((feature, i) => (
            <li key={i} className="flex gap-2">
              <Image
                className="hidden dark:block"
                src={"/checkLight.svg"}
                width={20}
                height={20}
                alt="check"
              />
              <Image
                className="block dark:hidden"
                src={"/checkDark.svg"}
                width={20}
                height={20}
                alt="check"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <CardBorder3dBottom bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorder3dRight bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorderLeftAndTop />
    </aside>
  );
};

export default PricingCard;

export const EearlyAccessCard = () => {
  const [isAnualPrice, setIsAnualPrice] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnualPrice(event.target.checked);
  };

  return (
    <aside
      className={`bg-[#F2FFA0] px-[18px] py-8 relative flex flex-col gap-8  w-full max-w-[390px] mx-auto`}
    >
      <div className="earlyaccess-bg absolute inset-0  "></div>
      <div className="grid gap-4 z-10">
        <h2 className="text-center font-extrabold text-migaku-dark-text  text-2xl md:text-4xl">
          Early Acces
        </h2>
        <span className="block text-migaku-dark-text text-center md:text-lg">
          Get early access to new features.
        </span>
        <Link href={"/signup"} className="max-w-max mx-auto">
          <Button className="md:text-lg">LIVE AT THE EDGE</Button>
        </Link>
      </div>

      <div className="grid gap-4 z-10">
        <span className="block text-center font-extrabold text-[32px] text-migaku-dark-text md:text-6xl  ">
          {isAnualPrice ? "$135" : "$14"}
        </span>
        <span className="block text-center  text-migaku-dark-text  font-medium md:text-lg">
          {isAnualPrice ? "Yearly" : "Monthly"}
        </span>
        <p className="text-center text-sm text-gray-700 md:text-base ">
          14-day money-back guarantee. <br />
          Cancel anytime.
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 z-10">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isAnualPrice}
        />
        <span className="text-[12px] md:text-sm text-migaku-dark-text font-bold">
          Yearly price
        </span>
        <span className="text-[12px] md:text-sm  text-gray-400">Save 20%</span>
      </div>

      <div className="z-10">
        <ul className="text-[12px]  md:text-sm text-migaku-dark-text flex flex-col gap-3 items-center text-center">
          <li className="flex gap-2">
            <Image src={"/checkDark.svg"} width={20} height={20} alt="check" />
            Access hot new features early
          </li>
          <li className="flex gap-2">
            <Image src={"/checkDark.svg"} width={20} height={20} alt="check" />
            Be the first to check out new courses
          </li>
          <li className="flex gap-2">
            <Image src={"/checkDark.svg"} width={20} height={20} alt="check" />
            Get hands on with testing and feedback
          </li>
          <li className="flex gap-2">
            <Image src={"/checkDark.svg"} width={20} height={20} alt="check" />
            Access to hidden Discord channel
          </li>
          <li className="flex gap-2">
            <Image src={"/checkDark.svg"} width={20} height={20} alt="check" />
            Support what we do
          </li>
          <li className="flex gap-2">
            <Image src={"/checkDark.svg"} width={20} height={20} alt="check" />
            Everything included in Standard
          </li>
        </ul>
      </div>

      <CardBorder3dBottom bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorder3dRight bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
      <CardBorderLeftAndTop />
    </aside>
  );
};
