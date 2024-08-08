import Image from "next/image";

type Props = {};

export const LearningStepsCard = (props: Props) => {
  return (
    <div className="bg-white  p-6 rounded-[28px] max-w-[300px]  md:max-w-[350px]  -rotate-[20deg] relative z-20 shadow-xl">
      <div className="border-2 rounded-lg">
        <Image
          src={"/learningStepsCardImg.avif"}
          width={190}
          height={170}
          alt="Image card"
          className="mx-auto"
        />
      </div>

      <p className="text-[12px] md:text-[16px] mt-5 text-[#0D0D62] font-bold">
        The first character is ら, which is represented as /ra/, and the
        pronunciation is close to a combination of the /rah rah/ as if you were
        cheering and the /la la/ like singing.
      </p>

      <span className="text-[12px] mt-4 block text-[#0D0D62] font-bold  md:text-[16px]">
        It’s a cute rabbit (ra) with its ears.
      </span>

      <div className="flex justify-center  items-center mt-5 gap-3">
        <Image
          src={"/audioIcon.svg"}
          width={30}
          height={30}
          alt="play audio"
          className=" rounded-full bg-[#EDE3FF] p-1.5 cursor-pointer hover:scale-110 transition-transform"
        />

        <p className="font-extrabold relative  text-[#00005A]">
          来週
          <span className="absolute w-[50px] -top-2 -left-2 font-light text-[9px]">
            らいしゅう
          </span>
        </p>
      </div>
    </div>
  );
};

export const LearningStepsBgcard = (props: Props) => {
  return (
    <div className="bg-white  p-6 rounded-[28px] max-w-[300px] rotate-[20deg] absolute z-10 top-0 right-0  shadow-xl  md:max-w-[350px]  md:-right-[40%]   ">
      <h2 className="font-extrabold  text-[#00005A] text-center  md:text-2xl">
        The verb 来
      </h2>
      <p className="text-center text-[14px] my-3 text-[#0D0D62] font-bold md:text-[16px]">
        Negative meaning of the verb
      </p>
      <p className="text-[#0D0D62] font-semibold text-[12px] mb-3 md:text-[15px] ">
        In this lesson, we will explore the Chinese verb 来lái that expresses
        the action of coming or arriving at a place similar to the English verb
        to come.
      </p>
      <p className="text-[#0D0D62] font-semibold text-[12px] md:text-[15px]">
        This verb has many different uses, but the basic meaning is the opposite
        of 去qù.
      </p>

      <p className="text-center mt-5 mb-3 font-extrabold relative text-[#00005A] text-sm  md:text-[16px]">
        <span className="block font-light text-[10px] md:text-[13px]">
          tā men lái bàn gōng shì
        </span>
        他们来办公室。
        <span className="block  font-light text-[12px] md:text-[16px]">
          They come to the office.
        </span>
      </p>

      <Image
        src={"/audioIcon.svg"}
        width={30}
        height={30}
        alt="play sound"
        className="p-2 bg-[#EDE3FF] rounded-full mx-auto hover:scale-110 duration-300 transition-transform cursor-pointer"
      />

      <p className="text-center mt-5  font-extrabold relative text-[#00005A] text-sm  md:text-[16px]">
        <span className="block font-light text-[10px]  md:text-[13px]">
          xiǎo hái lái xué xiào
        </span>
        小孩来学校。
        <span className="block  font-light text-[12px] md:text-[16px]">
          The children come to school.
        </span>
      </p>
    </div>
  );
};
