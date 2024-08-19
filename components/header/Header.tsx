"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";

const Header = () => {
  const pathname = usePathname();
  const [openMore, setOpenMore] = useState(false);

  return (
    <header
      className={`p-3 lg:px-8 lg:py-6 flex justify-between items-center sticky top-0 left-0 bg-transparent z-50  backdrop-blur-xl	`}
    >
      <Link href={"/"} className="lg:hidden">
        <Image
          className="cursor-pointer transition-transform hover:scale-105 duration-300 md:w-[160px] md:h-[30px]"
          src={"/logo.svg"}
          width={120}
          height={23}
          alt="logo"
        />
      </Link>

      <div className="flex items-center gap-4 lg:hidden">
        {pathname === "/" ||
        pathname === "/learn-japanese" ||
        pathname === "/learn-chinese" ? null : (
          <ThemeSwitch />
        )}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu
              width={30}
              height={30}
              className="hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-primary-gradient-orange to-primary-gradient-red rounded-full  p-1.5 text-white"
            />
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className={`${
              pathname === "/" ||
              pathname === "/learn-japanese" ||
              pathname === "/learn-chinese"
                ? "bg-[#0a002a]"
                : " bg-white dark:bg-[#0a002a]"
            } lg:hidden`}
          >
            <SheetHeader>
              <Link href={"/"}>
                <Image
                  className="cursor-pointer transition-transform hover:scale-105 duration-300 md:w-[160px] md:h-[30px]"
                  src={"/logo.svg"}
                  width={120}
                  height={23}
                  alt="logo"
                />
              </Link>

              <ul className="mt-8 flex flex-col gap-5">
                {[
                  { name: "Download", href: "/download" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Blog", href: "/blog" },
                  { name: "Careers", href: "/careers" },
                  { name: "Team", href: "/team" },
                  { name: "Log in", href: "/login" },
                ].map((item, index) => {
                  const commonClass =
                    pathname === "/" ||
                    pathname === "/learn-japanese" ||
                    pathname === "/learn-chinese"
                      ? "text-white"
                      : " text-[#00005a] dark:text-white ";

                  return (
                    <Link
                      key={index}
                      className={`${commonClass} ${
                        pathname === item.href
                          ? "underline  underline-offset-8"
                          : ""
                      } font-bold text-xl hover:opacity-50 duration-300`}
                      href={item.href}
                    >
                      <li>{item.name}</li>
                    </Link>
                  );
                })}
              </ul>

              <Button className="mt-7 mb-3" size={"full_w"}>
                Get Started
              </Button>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden lg:flex justify-between items-center w-full">
        <ul
          className={`flex gap-5 font-bold text-lg ${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-white"
              : " text-[#00005a] dark:text-white"
          }`}
        >
          <Link
            className={`"hover:opacity-50 duration-300 "`}
            href={"/download"}
          >
            <li>Download</li>
          </Link>
          <Link className="hover:opacity-50 duration-300" href={"/pricing"}>
            <li>Pricing</li>
          </Link>
          <Link className="hover:opacity-50 duration-300" href={"/blog"}>
            <li>Blog</li>
          </Link>

          <div
            onClick={() => {}}
            className="hover:opacity-50 duration-300 cursor-pointer flex items-center gap-2"
          >
            More
            <ChevronDown />
          </div>
        </ul>
        <Link
          href={"/"}
          className="  mr-[98px] hover:scale-105 transition-transform duration-300"
        >
          <Image src={"/logo.svg"} alt="logo" width={160} height={31} />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={"/login"}
            className={` ${
              pathname === "/" ||
              pathname === "/learn-japanese" ||
              pathname === "/learn-chinese"
                ? "text-white font-bold"
                : " text-[#00005a] dark:text-white font-bold text-lg font-bold"
            }`}
          >
            Log in
          </Link>
          <Link href={"/signup"}>
            <Button className="py-2 px-6">GET STARTED</Button>
          </Link>

          {pathname === "/" ||
          pathname === "/learn-japanese" ||
          pathname === "/learn-chinese" ? null : (
            <ThemeSwitch />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
