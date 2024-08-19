"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`${
        pathname === "/" ||
        pathname === "/learn-japanese" ||
        pathname === "/learn-chinese"
          ? "bg-[#D4DDF5]"
          : " bg-white dark:bg-[#0A002A]"
      } px-6  lg:px-14 pt-5`}
    >
      <JoinDiscord pathname={pathname} />

      <FooterLinks pathname={pathname} />
    </footer>
  );
};

export default Footer;

type JoinDiscord = {
  pathname: string;
};

const JoinDiscord = ({ pathname }: JoinDiscord) => {
  return (
    <div
      className={`${
        pathname === "/" ||
        pathname === "/learn-japanese" ||
        pathname === "/learn-chinese"
          ? "bg-[#777FF1]"
          : " bg-white dark:bg-[#202047] shadow-xl  "
      } text-white p-6  rounded-xl sm:max-w-[465px] md:max-w-[690px] lg:max-w-[96%] mx-auto lg:p-10`}
    >
      <div className="lg:flex lg:justify-between gap-4">
        <h2
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-white"
              : " text-[#777EF0]   "
          } font-extrabold text-center text-2xl md:text-4xl max-w-[20ch] mx-auto lg:mx-0 lg:max-w-full lg:text-start`}
        >
          Join our active Discord community!
        </h2>
        <div className=" text-center flex flex-col items-center gap-2 mt-6 lg:flex-row lg:mt-0">
          <a
            target="_blank"
            href="https://discord.com/invite/JR5NrTTFhF"
            className={`
                ${
                  pathname === "/" ||
                  pathname === "/learn-japanese" ||
                  pathname === "/learn-chinese"
                    ? "bg-white"
                    : "bg-[#E4E5FC] dark:bg-[#323363]"
                }
                cursor-pointer py-1 rounded-2xl text-[#777FF1] font-extrabold flex items-center gap-2 w-[70%] justify-center transition-transform hover:scale-110 lg:order-2`}
          >
            <Image
              className=""
              src={"/joinDiscordLogo.svg"}
              alt="join discord"
              width={30}
              height={30}
            />
            JOIN
          </a>
          <span
            className={`
                ${
                  pathname === "/" ||
                  pathname === "/learn-japanese" ||
                  pathname === "/learn-chinese"
                    ? "text-white"
                    : "text-gray-600 dark:text-white"
                }
                `}
          >
            6,154 Members
          </span>
        </div>
      </div>
    </div>
  );
};

type FooterLinks = {
  pathname: string;
};

const FooterLinks = ({ pathname }: FooterLinks) => {
  return (
    <aside className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
      <div className="md:text-lg">
        <h3
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " dark:text-white text-[#00005A]"
          } font-extrabold mb-3`}
        >
          {" "}
          Explore
        </h3>
        <ul
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " text-[#00005A] dark:text-white "
          } grid gap-4`}
        >
          <li className="">
            <Link href={""}>Log in</Link>
          </li>
          <li className="">
            <Link href={""}>Sign up</Link>
          </li>
          <li className="">
            <Link href={""}>Pricing</Link>
          </li>
          <li className="">
            <Link href={""}>Download</Link>
          </li>
          <li className="">
            <Link href={""}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="md:text-lg">
        <h3
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " dark:text-white text-[#00005A]"
          } font-extrabold mb-3`}
        >
          Products
        </h3>
        <ul
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " text-[#00005A] dark:text-white "
          } grid gap-4`}
        >
          <li className="">
            <a href={""} target="_blank">
              Browser Extension
            </a>
          </li>
          <li className="">
            <a href={""} target="_blank">
              iOS App
            </a>
          </li>
          <li className="">
            <a href={""} target="_blank">
              Android App
            </a>
          </li>
          <li className="">
            <a href={""} target="_blank">
              Migaku Memory for Web
            </a>
          </li>
        </ul>
      </div>
      <div className="md:text-lg">
        <h3
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " dark:text-white text-[#00005A]"
          } font-extrabold mb-3`}
        >
          Social
        </h3>
        <ul
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " text-[#00005A] dark:text-white "
          } grid gap-4`}
        >
          <li className="">
            <a href={""}>Youtube</a>
          </li>

          <li className="">
            <a href={""}>Reddit</a>
          </li>
          <li className="">
            <a href={""}>Discord</a>
          </li>
          <li className="">
            <a href={""}>X</a>
          </li>
        </ul>
      </div>

      <div className="md:text-lg">
        <h3
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " dark:text-white text-[#00005A]"
          } font-extrabold mb-3`}
        >
          Resources
        </h3>
        <ul
          className={`${
            pathname === "/" ||
            pathname === "/learn-japanese" ||
            pathname === "/learn-chinese"
              ? "text-[#00005A] "
              : " text-[#00005A] dark:text-white "
          } grid gap-4`}
        >
          <li className="">
            <Link href={""}>Careers</Link>
          </li>

          <li className="">
            <Link href={""}>Feedback & Support</Link>
          </li>
          <li className="">
            <Link href={""}>Privacy Policy</Link>
          </li>
          <li className="">
            <Link href={""}>Terms of Service</Link>
          </li>
          <li className="">
            <a href={""}>User Guide</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
