"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { PanelRightOpen, PanelLeftClose } from "lucide-react";
import Image from "next/image";
import underwaterImg from "@/assets/underwater.jpg";
import lakeImg from "@/assets/lakeImg.png";
import { useProgress } from "@/context/ProgressContext";

const LessonPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { incrementProgress, markLessonComplete } = useProgress();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLessonCompletion = () => {
    if (!completed) {
      incrementProgress(10);
      markLessonComplete("lesson1");
      setCompleted(true);
    }
  };

  const slides = [
    {
      image: underwaterImg,
      title: "Lesson 1: The Great Water Cycle Adventure!",
      text: "Did you know that water is always moving around our planet? The same water you drink today has been around for millions of years! Let’s explore how water moves in a cycle that never ends—this is called the water cycle.",
    },
    {
      image: lakeImg,
      title: "Step 1: Evaporation (The Sun's Magic) ☀️",
      text: "The first stage of the water cycle is evaporation. When the sun heats up water from oceans, lakes, and rivers, the water turns into vapor (gas) and rises into the air. This is how water moves from the ground to the sky!",
      funFact:
        "Fun Fact: Did you know? Almost 90% of the water that goes into the air comes from the oceans!",
    },
    {
      image: lakeImg,
      title: "Step 2: Condensation (Making Clouds) 🌥️",
      text: "Did you know that water is always moving around our planet? The same water you drink today has been around for millions of years! Let’s explore how water moves in a cycle that never ends—this is called the water cycle.",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

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
          <div className="relative">
            <Image
              src={slides[currentSlide].image}
              alt="Underwater Scene"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <h1 className="text-[#1E4A7C] font-bold text-4xl mt-8">
              {slides[currentSlide].title}
            </h1>
            <p className="font-light text-lg font-normal mt-5">
              {slides[currentSlide].text}
            </p>
            <p className="font-light text-sm font-light italic mt-16">
              {slides[currentSlide].funFact}
            </p>
          </div>
          {currentSlide === 2 && (
            <p
              className={`p-3 w-fit mx-auto rounded-md mt-10 cursor-pointer ${
                completed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1E4A7C] text-white"
              }`}
              onClick={handleLessonCompletion}
            >
              {completed ? "Lesson Completed" : "I Have Completed the Lesson!"}
            </p>
          )}
          <div className="fixed bottom-5 left-10 right-5 px-4 flex justify-between items-center">
            <button
              className="py-2 px-4 bg-[#1E4A7C] text-[#FFF28C] rounded-full cursor-pointer text-sm"
              onClick={prevSlide}
            >
              Back
            </button>
            <button
              className="py-2 px-4 bg-[#1E4A7C] text-[#FFF28C] rounded-full cursor-pointer text-sm"
              onClick={nextSlide}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
