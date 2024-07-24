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
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={` p-3 flex justify-between`}>
      <Link href={"/"}>
        <Image
          className="cursor-pointer transition-transform hover:scale-105 duration-300 md:w-[160px] md:h-[30px]"
          src={"/logo.svg"}
          width={120}
          height={23}
          alt="logo"
        />
      </Link>

      <Sheet>
        <SheetTrigger>
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
          }`}
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
    </header>
  );
};

export default Header;
