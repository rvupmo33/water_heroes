"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { PanelRightOpen, PanelLeftClose, VenetianMask } from "lucide-react";
import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";

const LessonsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { completedLessons } = useProgress();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const totalLessons = 5;
  const completedCount = completedLessons.size;

  return (
    <div>
      <div className="relative p-4 flex">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`p-8 transition-margin duration-300 flex-1 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {!sidebarOpen && (
            <PanelRightOpen
              aria-expanded={!sidebarOpen}
              color="#1E4A7C"
              className="absolute top-0 left-4 mt-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          )}

          {sidebarOpen && (
            <PanelLeftClose
              aria-expanded={sidebarOpen}
              color="#1E4A7C"
              className="absolute top-0 left-4 mt-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          )}

          <h1 className="text-[#1E4A7C] font-bold text-4xl">
            Lessons: Hero Training
          </h1>
          <p className="font-light text-sm">
            Keep learning how to save and protect water to level up!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex-1 bg-white shadow-md p-5 rounded-lg min-w-[300px]">
              <p className="font-bold text-[#1E4A7C]">All Learning Modules</p>
              <div className="flex flex-col gap-3 mt-5">
                <Link href="/lessons/lesson1">
                  <div className="flex justify-between items-center bg-[#F0F0F0] py-2 px-3 rounded-md">
                    <p className="text-sm">
                      1.1 The Great Water Cycle Adventure!
                    </p>
                    <VenetianMask
                      color={completedLessons.has("lesson1") ? "blue" : "red"}
                    />
                  </div>
                </Link>
                <div className="flex justify-between items-center bg-[#F0F0F0] py-2 px-3 rounded-md">
                  <p className="text-sm">1.2 The Amazing Water Facts!</p>
                  <VenetianMask
                    color={completedLessons.has("lesson2") ? "blue" : "red"}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-white shadow-md p-5 rounded-lg min-w-[300px]">
                <p className="font-bold text-[#1E4A7C]">Upcoming Modules</p>
                <div className="overflow-y-scroll h-60 pr-5 mt-5">
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#F0F0F0] rounded-lg overflow-hidden">
                      <div className="flex">
                        <div className="w-3 h-auto bg-[#F9E550]"></div>
                        <div className="p-3">
                          <p className="font-bold">Lesson 2</p>
                          <p className="font-bold text-sm my-4">
                            2.1 The Wonders of Water Conservation!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#F0F0F0] rounded-lg overflow-hidden">
                      <div className="flex">
                        <div className="w-3 h-auto bg-[#9747FF]"></div>
                        <div className="p-3">
                          <p className="font-bold">Lesson 3</p>
                          <p className="font-bold text-sm my-4">
                            3.1 Water Pollution and Its Impact!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#F0F0F0] rounded-lg overflow-hidden">
                      <div className="flex">
                        <div className="w-3 h-auto bg-[#FB7979]"></div>
                        <div className="p-3">
                          <p className="font-bold">Lesson 4</p>
                          <p className="font-bold text-sm my-4">
                            4.1 Innovative Water Solutions!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg min-w-[300px]">
                <p className="font-bold text-[#1E4A7C] mb-5">Lesson Progress</p>
                <p className="text-8xl text-[#1E4A7C] text-center font-bold">
                  <span>{completedCount}</span>/{totalLessons}
                </p>
                <p className="text-center text-light text-md mt-8">
                  Complete {totalLessons - completedCount} modules to finish
                  lesson 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
