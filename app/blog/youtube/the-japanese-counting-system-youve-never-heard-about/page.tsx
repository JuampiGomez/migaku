import YoutubePage from "@/components/blog/Youtube/YoutubePage";
import Image from "next/image";

const page = () => {
  return (
    <main className="relative">
      <section className="px-6 relative z-10 max-w-[800px] mx-auto">
        <YoutubePage
          iframeSrc="https://www.youtube.com/embed/5-Cw1BanRds?si=VfgfPurewx4Md1F7"
          title="The Japanese Counting System You've Never Heard About"
          infoParagraph="If you have ever wondered why words like 八百屋 or 二十歳 are pronounced the way they are, we have the answer for you!"
        />
      </section>

      <Image
        src={"/careersGradient.svg"}
        width={600}
        height={300}
        className="top-36 sm:-top-32 w-full  absolute opacity-50 dark:opacity-20  select-none no-drag"
        alt=""
      />
    </main>
  );
};

export default page;
