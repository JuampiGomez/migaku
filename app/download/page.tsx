import { Button } from "@/components/ui/button";
import {
  CardBorder3dBottom,
  CardBorder3dRight,
  CardBorderLeftAndTop,
} from "@/components/ui/cardBorder3d";

const page = () => {
  return (
    <main className="px-6">
      <h1 className=" text-migaku-dark-text dark:text-white font-extrabold text-center  text-2xl my-10">
        Download the tools you need and start learning:
      </h1>

      <section>
        <aside className="bg-[#EDE3FF] dark:bg-[#202047]  p-8 relative ">
          <h2 className="text-migaku-dark-text dark:text-white font-extrabold text-2xl mb-4">
            Migaku <br /> mobile app
          </h2>
          <p className="text-migaku-dark-text dark:text-white font-medium">
            Study and create flashcards on the go. Migaku fits into your pace of
            life.
          </p>

          <div className="grid gap-4 mt-3">
            <a
              href="https://apps.apple.com/us/app/migaku-really-learn-languages/id1664096855"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex gap-2">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.757 3.682c.292-.2.638-.307.992-.307a1.25 1.25 0 1 0 .002-2.5 4.25 4.25 0 0 0-3.97 2.723 1.25 1.25 0 1 0 2.332.898 1.75 1.75 0 0 1 .644-.814Zm-.923 4.933a4.43 4.43 0 0 1 3.3-1.1 4.422 4.422 0 0 1 2.17.81 5.79 5.79 0 0 0-1.548 4.15A5.794 5.794 0 0 0 18.99 16.8a7.92 7.92 0 0 1-.652 1.29c-.685 1.08-1.63 1.91-2.964 1.91-.838 0-1.866-.14-2.549-.69a1.25 1.25 0 0 0-1.639-.01l-.005.004c-.086.066-.92.695-2.592.695-.984 0-2.14-.61-3.102-1.923-.947-1.292-1.613-3.16-1.613-5.35 0-3.018 1.921-5.041 4.023-5.21a4.417 4.417 0 0 1 3.269 1.1 1.25 1.25 0 0 0 1.667-.002Zm8.21 6.54c.52.26.792.845.655 1.41-.718 2.964-3.042 5.935-6.324 5.935-1.329 0-2.346-.292-3.053-.609a5.953 5.953 0 0 1-.329-.16 6.01 6.01 0 0 1-.339.163c-.712.314-1.735.606-3.064.606-2.022 0-3.849-1.214-5.118-2.945-1.283-1.75-2.097-4.144-2.097-6.829 0-4.033 2.654-7.406 6.322-7.702A6.923 6.923 0 0 1 12 6.116a6.938 6.938 0 0 1 4.35-1.091 6.93 6.93 0 0 1 4.808 2.6 1.25 1.25 0 0 1-.337 1.842 3.288 3.288 0 0 0-1.567 2.91 3.288 3.288 0 0 0 1.79 2.777Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                IOS
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.migaku.android"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex gap-2">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m5.494 1.273 15.71 8.997c1.338.732 1.338 2.727 0 3.46l-15.71 8.997c-1.294.76-3-.225-3.014-1.718V2.98C2.495 1.474 4.193.509 5.495 1.274Zm1.9 17.485 4.503-2.579-1.363-1.977-3.14 4.556ZM9.016 12 4.98 17.854V6.146L9.016 12Zm3.036 0 2.022 2.932L19.194 12l-5.12-2.933L12.051 12Zm-.155-4.18-1.363 1.977-3.14-4.555 4.503 2.579Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                ANDROID
              </Button>
            </a>
          </div>
          <CardBorder3dBottom bg="bg-white dark:bg-[#2B2B60]" />
          <CardBorder3dRight bg="bg-white dark:bg-[#2B2B60]" />
          <CardBorderLeftAndTop />
        </aside>
      </section>
    </main>
  );
};

export default page;
