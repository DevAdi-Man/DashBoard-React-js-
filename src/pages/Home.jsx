import { useState } from "react";
import Card from "../components/Card";
import RadarExample from "../components/RadarExample";

const Home = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Fedramp High"];

  return (
    <div className="rounded-xl p-4 h-[85%] items-center bg-[#FFFFFF] m-4">
      <div className="relative w-full flex gap-10 font-light text-sm border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-2 pb-2 transition-colors duration-300 ${
              activeTab === tab ? "text-[#5E43D8] font-bold" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}

        {/* Animated underline */}
        <span
          className={`absolute bottom-0 h-[3px] bg-[#5E43D8] transition-all duration-300`}
          style={{
            width: activeTab === "All" ? "40px" : "120px",
            left: activeTab === "All" ? "2.9px" : "98px",
          }}
        />
      </div>
      {/* all cards */}
      <div>
        {activeTab === "All" && (
          <>
            <Card />
            {/* <RadarExample /> */}
          </>
        )}

        {activeTab === "Fedramp High" && (
          <div className="flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
