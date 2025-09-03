import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SidebarButton = ({
  id,
  icon,
  title,
  isDropArrow,
  subItem,
  activeId,
  setActiveId,
  isOpen,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (isDropArrow) {
      setOpen(!open);
    }
    setActiveId(id); // mark active
  };

  return (
    <div className="w-full ">
      <div
        onClick={handleClick}
        className={`flex items-center gap-2 w-full p-[12px] pl-6 text-sm rounded-4xl cursor-pointer transition ${
          isOpen ? "ease-in duration-300" : "ease-out duration-300"
        }
          ${
            activeId === id
              ? "bg-[#EEF2FF] text-[#5E43D8] "
              : "text-[#E0E9F4] hover:bg-[#eef2ff5b] hover:text-[#ffffff] "
          }
        `}
      >
        <div className="flex-shrink-0">{icon}</div>
        <span
          className={`transition-all duration-500 ease-in-out
    ${
      isOpen
        ? "opacity-100 translate-x-0 ml-2"
        : "opacity-0 -translate-x-3 ml-0"
    }
  `}
        >
          {title}
        </span>

        {isDropArrow && (
          <MdKeyboardArrowDown
            size={24}
            className={`ml-auto transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
        )}
      </div>

      {/* Sub Items */}
      {isOpen && subItem?.length > 0 && (
        <ul
          className={`pl-10 text-[#E0E9F4] transition-all duration-500 ease-in-out overflow-hidden
      ${
        open
          ? "max-h-42 opacity-100 scale-100 py-3"
          : "max-h-0 opacity-0 scale-95 py-0"
      }
    `}
        >
          {subItem.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveId(`${id}-${index}`)}
              className={`mb-2 px-2 py-1 rounded-2xl items-center pl-4 cursor-pointer transition 
                ${
                  activeId === `${id}-${index}`
                    ? "bg-[#9F84FD] text-white"
                    : "hover:bg-[#9F84FD] hover:text-white"
                }
              `}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarButton;
