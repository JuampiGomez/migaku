import { GoogleExtension, MobileApp } from "@/components/download/Cards";
import JoinEarlyAccess from "@/components/download/JoinEarlyAccess";

const page = () => {
  return (
    <>
      <main className="px-6">
        <h1 className=" text-migaku-dark-text dark:text-white font-extrabold text-center  text-2xl md:text-4xl md:max-w-[570px] md:mx-auto mt-10 mb-24">
          Download the tools you need and start learning:
        </h1>

        <section className="grid gap-24 md:gap-5 md:grid-cols-2 md:max-w-[1060px] md:mx-auto">
          <MobileApp />
          <GoogleExtension />
        </section>
        <JoinEarlyAccess />
      </main>
    </>
  );
};

export default page;
