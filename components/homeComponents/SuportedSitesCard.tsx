type Props = {
  position: string;
  hiddenClasses: string;
};

const SuportedSitesCard = ({ position, hiddenClasses }: Props) => {
  return (
    <div
      className={`${position} ${hiddenClasses} absolute bg-[#2B2B60] max-[500px]:left-1/2 text-white p-3 rounded-2xl w-full z-10 max-w-[320px] `}
    >
      <h4 className="font-bold mb-2">Supported video Sites:</h4>
      <ul className=" font-semibold list-disc pl-5">
        <li>Netflix</li>
        <li>YouTube</li>
        <li>Disney Plus</li>
        <li>Rakuten Viki</li>
      </ul>

      <h5 className="font-bold mb-2 mt-5">
        Even better, we support{" "}
        <span className="text-[#B3E41A]">all text websites</span>, including
        favorites like:
      </h5>

      <ul className=" font-semibold list-disc pl-5">
        <li>Reddit</li>
        <li>X</li>
        <li>Facebook</li>
        <li>Weibo</li>
        <li>News sites</li>
        <li>Other language learning sites</li>
      </ul>
    </div>
  );
};

export default SuportedSitesCard;
