import { HiMiniBriefcase } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import CircularProgress from "./CircularProgress";
import LinearProgressBar from "./LinearProgressBar";

const Card = () => {
  return (
    <div className="w-sm border-1  rounded-2xl m-4  border-[#E0E9F4]">
      <div className="mx-4  my-4 flex justify-between items-center">
        <div className="flex items-center  gap-2 text-[#1A202C]">
          <HiMiniBriefcase size={24} className="text-[#5E43D8]" />
          <span className="text-sm">Evidence</span>
        </div>
        <IoInformationCircleOutline size={24} className="text-[#90A3BF]" />
      </div>
      <div className="flex mr-4  mb-2">
        <CircularProgress percentage={65} />
        <div className="flex-col w-full ">
          <LinearProgressBar label={"Not Started"} value={3} max={5} />
          <LinearProgressBar value={4} max={5} />
          <LinearProgressBar value={5} max={5} />
        </div>
      </div>
    </div>
  );
};

export default Card;
