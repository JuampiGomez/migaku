import Image from "next/image";

type Props = {
  paragrapth: string;
  userImgSrc: string;
  userName: string;
  userOnlineName?: string;
  linkToReview?: string;
  logoSrc: string;
};

const ReviewCard = ({
  paragrapth,
  userImgSrc,
  userName,
  userOnlineName,
  linkToReview,
  logoSrc,
}: Props) => {
  return (
    <div className="bg-[#1D094C] pl-6 pt-4 pb-6 pr-4 shadow-lg review-card-gradient  h-max">
      <figure className="flex justify-between mb-5">
        <div className="flex items-center gap-3 ">
          <Image
            src={userImgSrc}
            alt="User"
            width={36}
            height={36}
            className=" rounded-full w-[36px] h-[36px]"
          />
          <div className="flex flex-col ">
            <h4 className="text-[12px] md:text-sm font-bold">{userName}</h4>
            <span className="text-[12px] md:text-sm text-gray-400">
              {userOnlineName}
            </span>
          </div>
        </div>

        {linkToReview ? (
          <a href={linkToReview} target="_blank">
            <Image
              src={logoSrc}
              alt="social media"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </a>
        ) : (
          <Image src={logoSrc} alt="social media" width={30} height={30} />
        )}
      </figure>
      <p className="font-medium  md:text-lg">{paragrapth}</p>

      {/* 
    /youtubeLogoSmall.svg
    discordLogoSmall.svg
    twitterLogoSmall.svg
    googleLogoSmall.svg


    anonymousUser.svg
    */}
    </div>
  );
};

export default ReviewCard;
