"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "../ui/cardBorder3d";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  title: string;
  formTitle: string;
  buttonText: string;
  paragraph: string;
  formTexts: string[];
  formSpans: string[];
};

const LoginSingUpPage = ({
  title,
  formTitle,
  buttonText,
  paragraph,
  formSpans,
  formTexts,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="px-6 pb-40 login-singup-bg">
      <div className="max-w-[39.5rem] lg:max-w-[70rem] mx-auto flex flex-col lg:flex-row lg:gap-20 lg:items-center lg:mt-10">
        <div className="w-full">
          <Image
            src={"/Login&singUpLight.svg"}
            width={314}
            height={178}
            className="w-full block dark:hidden select-none"
            alt="Join us"
          />

          <Image
            src={"/Login$singUpDark.svg"}
            width={314}
            height={178}
            className="w-full hidden dark:block select-none"
            alt="Join us"
          />

          <h1 className="text-migaku-dark-text dark:text-white text-center font-extrabold text-5xl md:text-8xl mt-7 mb-3 md:mb-10">
            {title}
          </h1>
          <p className="text-migaku-dark-text dark:text-white  text-center text-xl md:text-3xl font-medium max-w-[25ch] mx-auto">
            {paragraph}
          </p>
        </div>
        <div className="w-full mt-20 max-w-[360px] mx-auto lg:max-w-[400px] lg:mt-0">
          <div className="relative bg-[#EDE3FF] dark:bg-[#202047] mr-3 px-8 py-10">
            <h2 className="text-2xl md:text-4xl text-center font-extrabold text-migaku-dark-text dark:text-white">
              {formTitle}
            </h2>

            <form className=" mt-5 grid gap-5">
              <input
                placeholder="Email"
                type="email"
                name=""
                id=""
                className=" w-full pl-[14px] py-[10px] pr-[12px] rounded-3xl text-sm outline-none border-2 border-gray-400/40 dark:border-gray-600/80 dark:bg-[#2B2B60] focus:shadow-2xl focus:border-gray-50/0 focus:dark:border-gray-50/0 "
              />

              <div className="flex rounded-3xl bg-white dark:bg-[#2B2B60] border-2 border-gray-400/40 dark:border-gray-600/80 pl-[14px] py-[10px] pr-[12px] text-sm focus-within:shadow-2xl focus-within:border-gray-50/0 focus-within:dark:border-gray-50/0">
                <input
                  placeholder="Password"
                  type={`${showPassword ? "text" : "password"}`}
                  className="w-full outline-none dark:bg-[#2B2B60]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <Button type="button">{buttonText}</Button>
              <div className=" flex flex-col gap-4">
                {formTexts.map((text, i) => (
                  <p
                    className="text-center text-migaku-dark-text dark:text-white"
                    key={i}
                  >
                    {text}{" "}
                    <span className=" font-medium underline underline-offset-2">
                      {formSpans[i]}
                    </span>
                  </p>
                ))}
              </div>
            </form>

            <CardBorder3dBottom bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
            <CardBorder3dRight bg="bg-[#DFF4FF] dark:bg-[#2B2B60]" />
            <CardBorderLeftAndTop />

            <Image
              src={"girldoll.svg"}
              className="absolute -top-14 -right-8"
              width={60}
              height={60}
              alt=""
            />
          </div>
        </div>
      </div>
      <Image
        src={"boydoll.svg"}
        width={60}
        height={60}
        alt=""
        className="hidden lg:block right-[40%] -bottom-15 absolute"
      />
    </section>
  );
};

export default LoginSingUpPage;
