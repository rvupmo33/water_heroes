"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { PanelRightOpen, PanelLeftClose } from "lucide-react";
import Bento from "@/components/Bento";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const progress = 10;

  return (
    <div className="relative p-4 flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`ml-${
          sidebarOpen ? "64" : "0"
        } p-8 transition-margin duration-300 flex-1`}
      >
        {!sidebarOpen && (
          <PanelRightOpen
            color="#1E4A7C"
            className="absolute top-0 left-4 mt-4 cursor-pointer"
            onClick={toggleSidebar}
          />
        )}

        {sidebarOpen && (
          <PanelLeftClose
            color="#1E4A7C"
            className="absolute top-0 left-4 mt-4 cursor-pointer"
            onClick={toggleSidebar}
          />
        )}

        <h1 className="text-[#1E4A7C] font-bold text-4xl">
          Hello, Rookie Water Hero!
        </h1>
        <p className="font-light text-sm">
          Keep learning how to save and protect water to level up!
        </p>
        <div className="bg-[#FFFFFF] px-3 py-4 rounded-[15px] shadow-md mt-3 flex items-center">
          <div className="bg-[#FDF5B8] w-fit px-4 py-2 rounded-full flex flex-col justify-center text-center border-2 border-[#1E4A7C]">
            <p className="text-xs">LVL</p>
            <p className="text-xs">1</p>
          </div>
          <div className="relative w-full h-5 ml-4 bg-[#E0E0E0] rounded-full border-2 border-[#1E4A7C]">
            <div
              className="absolute top-0 left-0 h-full bg-[#1E4A7C] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex-grow">
          <Bento />
        </div>
      </div>
    </div>
  );
};

export default Page;
