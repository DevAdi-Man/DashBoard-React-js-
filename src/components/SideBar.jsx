import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import {
  MdDashboard,
  MdOutlineAnalytics,
  MdOutlineMonitor,
  MdWork,
} from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { BsFileEarmarkPptFill, BsJournalBookmarkFill } from "react-icons/bs";
import {
  TbKeyframesFilled,
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
  TbLogout2,
} from "react-icons/tb";
import { ImFlag } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { LuGitFork } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import { GoGear, GoShieldLock } from "react-icons/go";

const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 2,
    title: "My work",
    icon: <MdWork size={30} />,
    isDropArrow: true,
    subItem: ["My work", "Team work"],
  },
  {
    id: 3,
    title: "System Informat",
    icon: <GiProcessor size={30} />,
    isDropArrow: true,
    subItem: ["Organization", "Security Personnel", "Info System"],
  },
  {
    id: 4,
    title: "Ai Assessment",
    icon: <BsFileEarmarkPptFill size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 5,
    title: "AI Reports",
    icon: <MdOutlineAnalytics size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 6,
    title: "Frameworks",
    icon: <TbKeyframesFilled size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 7,
    title: "Controls",
    icon: <VscSettings size={30} />,
    isDropArrow: true,
    subItem: ["Technologies"],
  },
  {
    id: 8,
    title: "Risks",
    icon: <ImFlag size={30} />,
    isDropArrow: true,
    subItem: ["Assets", "Vendors", "Risk Register"],
  },
  {
    id: 9,
    title: "AI ATO Documents",
    icon: <FaClipboardList size={30} />,
    isDropArrow: true,
    subItem: ["Policies", "Procedures", "Goverance", "SSP"],
  },
  {
    id: 10,
    title: "Monitoring",
    icon: <MdOutlineMonitor size={30} />,
    isDropArrow: true,
    subItem: ["Evidence", "Systems", "People"],
  },
  {
    id: 11,
    title: "Integrations",
    icon: <LuGitFork size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 12,
    title: "Audits",
    icon: <BsJournalBookmarkFill size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 13,
    title: "Security Settings",
    icon: <GoShieldLock size={30} />,
    isDropArrow: true,
    subItem: [
      "Change Framework",
      "User Management",
      "Security Roles",
      "Groups",
    ],
  },
  {
    id: 14,
    title: "Setting",
    icon: <GoGear size={30} />,
    isDropArrow: false,
    subItem: [],
  },
  {
    id: 15,
    title: "Log Out",
    icon: <TbLogout2 size={30} />,
    isDropArrow: false,
    subItem: [],
  },
];

const SideBar = () => {
  const [activeId, setActiveId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`${
        isOpen ? "w-72" : "w-25"
      } h-screen bg-[#5E43D8] text-nowrap rounded-br-2xl rounded-tr-2xl flex flex-col transition-all duration-500 ease-in-out`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between h-20 px-4 relative">
        <div className="flex items-center gap-3 overflow-hidden">
          <img src="Logo.svg" alt="Logo" className="w-12 h-12" />
          <h4
            className={`font-semibold text-xl text-white font-poppins transition-all duration-500 ease-in-out
      ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}
    `}
          >
            Compliance One
          </h4>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 absolute -right-4 bg-white rounded-full text-[#5E43D8] shadow-md"
        >
          {isOpen ? (
            <TbLayoutSidebarRightCollapseFilled size={24} />
          ) : (
            <TbLayoutSidebarRightExpandFilled size={24} />
          )}
        </button>
      </div>

      {/* Menu */}
      <main className="px-2 mt-5 flex-1 overflow-y-auto no-scrollbar space-y-1">
        {menu.map((item) => (
          <SidebarButton
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            isDropArrow={item.isDropArrow}
            subItem={item.subItem}
            activeId={activeId}
            setActiveId={setActiveId}
            isOpen={isOpen}
          />
        ))}
      </main>
    </aside>
  );
};

export default SideBar;
