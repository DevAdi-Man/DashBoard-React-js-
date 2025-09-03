import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="flex w-screen bg-[#EEF2FF] h-screen">
        <SideBar />
        <div className="flex-1 w-full h-full">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
