import Image from "next/image";
import Link from "next/link";


type Props = {
  IsClickable?: boolean;
  href?: string;
  src: string;
  title: string;
  alt: string;
};

const LanguageBall = ({
  IsClickable = false,
  href = "",
  src,
  title,
  alt,
}: Props) => {
  return (
    <div className="mt-10">
      {IsClickable ? (
        <div className="hover:scale-105 transition-transform duration-300">
          <Link href={href}>
            <Image
              src={src}
              width={40}
              height={40}
              alt={alt}
              className="mx-auto"
            />
            <h4 className="text-[#d0cbdd] text-center text-[14px] mt-2  underline  underline-offset-[3px]  sm:text-[16px] ">
              {title}
            </h4>
          </Link>
        </div>
      ) : (
        <div>
          <Image
            src={src}
            width={40}
            height={40}
            alt={alt}
            className="mx-auto"
          />
          <h4 className="text-[#d0cbdd] text-center text-[14px] mt-2  sm:text-[16px]">
            {title}
          </h4>
        </div>
      )}
    </div>
  );
};

export default LanguageBall;
