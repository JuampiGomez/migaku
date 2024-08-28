"use client";
import { useRef } from "react";
import Image from "next/image";

type AudioRefs = {
  [key: string]: HTMLAudioElement;
};

const GoodMorningTable = () => {
  const audioRefs = useRef<AudioRefs>({
    早上好: new Audio("/audios/早上好.mp3"),
    早安: new Audio("/audios/早安.mp3"),
    早: new Audio("/audios/早.mp3"),
  });

  const playAudio = (audioKey: string) => {
    const audio = audioRefs.current[audioKey];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <div className="overflow-x-auto scrollbar-custom ">
      <table className="min-w-[560px] w-full overflow-hidden mx-auto bg-[#b272ff] border-2 border-[#b272ff] rounded-2xl">
        <thead className="bg-[#EDE3FF] dark:bg-[#36206D]   ">
          <tr className="font-extrabold md:text-lg  ">
            <th className="border-2 border-[#b272ff] py-[10px] px-3">
              Meaning
            </th>
            <th className="border-2 border-[#b272ff] py-[10px] px-3">Hanzi</th>
            <th className="border-2 border-[#b272ff] py-[10px] px-3">Pinyin</th>
            <th className="border-2 border-[#b272ff] py-[10px] px-3">
              Sounds Like
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#0A002A] font-medium md:text-lg">
          <tr>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              good morning
            </td>
            <td className="border-b-2 border-[#b272ff] py-[10px] px-3 flex gap-3 items-center">
              早上好
              <Image
                onClick={() => playAudio("早上好")}
                src={"/audioActiveRose.svg"}
                width={40}
                height={40}
                alt="play audio"
                className="bg-[#EDE3FF] dark:bg-[#493085] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </td>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              zǎo shang hǎo
            </td>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              &quot;zow shang how&quot;
            </td>
          </tr>

          <tr>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              good morning
            </td>
            <td className="border-[#b272ff] py-[10px] px-3 flex gap-3 items-center">
              早安
              <Image
                onClick={() => playAudio("早安")}
                src={"/audioActiveRose.svg"}
                width={40}
                height={40}
                alt="play audio"
                className="bg-[#EDE3FF] dark:bg-[#493085] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </td>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              zǎo&apos;ān
            </td>
            <td className="py-[10px] px-3">&quot;zow ahn&quot;</td>
          </tr>

          <tr>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              mornin&apos;
            </td>
            <td className="border-t-2 border-[#b272ff] py-[10px] px-3 flex gap-3 items-center">
              早
              <Image
                onClick={() => playAudio("早")}
                src={"/audioActiveRose.svg"}
                width={40}
                height={40}
                alt="play audio"
                className="bg-[#EDE3FF] dark:bg-[#493085] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </td>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">zǎo</td>
            <td className="border-2 border-[#b272ff] py-[10px] px-3">
              &quot;zow&quot;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoodMorningTable;
