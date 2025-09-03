import React from "react";
import Search from "./Search";
import { MdAutoAwesome } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
// bg-[#F3F5F7]
const NavBar = () => {
  return (
    <div className="h-20 w-full bg-[#ffffff] text-white flex items-center justify-between px-10 py-4">
      <Search />
      <div className="flex justify-end p-2 items-center gap-4 border-1 w-1/2">
        {/* Ai icons */}
        <div className="bg-[#eef2ff] h-11 w-11 items-center flex justify-center  rounded-[20px] p-2">
          <img src="AIIcon.svg" alt="ai icon" className="h-full w-full" /> 
        </div>
        {/* notification */}
        <div className="relative">
          <div className="absolute top-0 right-0 bg-[#FF4423] rounded-full w-3 h-3" />
          <IoNotifications
            size={45}
            className="bg-grey-600 border-1 border-[#C3D4E9] text-black rounded-[20px] p-2"
          />
        </div>
        {/* avatar div */}
        <div className="flex items-center gap-2 px-4">
          <img
            src="avatar.png"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <h3 className="text-[#1A202C]">Simran</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
