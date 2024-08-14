import { CircleAlertIcon } from "lucide-react";

const ComprehensionCard = () => {
  return (
    <div className="bg-white shadow-lg p-5 text-black max-w-[265px] ">
      <h4 className=" font-GTMaru  text-migaku-green">Very good</h4>
      <ul>
        <li className="flex">
          <span className="flex">
            General Comprehension
            <CircleAlertIcon />
          </span>
          <span className=" font-GTMaru text-migaku-green">92%</span>
        </li>
        <li>
          <span>
            Recommended Sentences
            <CircleAlertIcon />
          </span>
          <span className=" font-GTMaru  text-migaku-light-blue">6</span>
        </li>
        <li>
          <span>
            Average Frequency
            <CircleAlertIcon />
            <span>Of recommended sentences</span>
          </span>
          <span className="font-GTMaru text-migaku-green">5</span>
        </li>
      </ul>
    </div>
  );
};

export default ComprehensionCard;
