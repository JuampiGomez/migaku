import Image from "next/image";
import { Button } from "../ui/button";

const PromoCode = () => {
  return (
    <aside className="px-6">
      <div className="bg-[#f2ffa0]  mt-10 mb-10 p-6 rounded-2xl relative md:max-w-[390px] md:mx-auto lg:max-w-full lg:flex lg:justify-between lg:items-center lg:py-12 lg:px-14">
        <h3 className="text-center text-migaku-dark-text font-extrabold text-2xl md:text-3xl lg:text-4xl  pb-4 z-20 relative lg:pb-0">
          Have a promo code?
        </h3>
        <form className="flex flex-col gap-3 z-20 relative lg:flex-row">
          <input
            type="text"
            className="bg-white px-3 py-2.5 rounded-2xl border outline-none text-migaku-dark-text"
            placeholder="Enter Text"
          />
          <Button className="py-2.5" type="button">
            APPLY
          </Button>
        </form>
        <Image
          className="absolute top-0 left-0 bottom-0 right-0 h-full  z-10 w-full object-cover rounded-2xl"
          src={"PromoCodeBG.svg"}
          width={458}
          height={194}
          alt=""
        />
      </div>
    </aside>
  );
};

export default PromoCode;
