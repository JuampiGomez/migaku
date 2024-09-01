import YoutubePage from "@/components/blog/Youtube/YoutubePage";
import Image from "next/image";

const page = () => {
  return (
    <main className="relative">
      <section className="px-6 relative z-10 ">
        <YoutubePage
          iframeSrc="https://www.youtube.com/embed/hZcE5lNbljE?si=TbVbJpEjITNYSBIU"
          title="The Toolbar on Video Sites | Migaku Browser Extension"
          infoParagraph="In this video we will talk about all functions of the Migaku toolbar on video sites."
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
