"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {
  PanelRightOpen,
  PanelLeftClose,
  Lightbulb,
  Droplet,
} from "lucide-react";
import Image from "next/image";
import underwaterImg from "@/assets/underwater.jpg";
import lakeImg from "@/assets/lakeImg.png";
import step2Img from "@/assets/step2Img.png";
import step3Img from "@/assets/step3Img.png";
import step4Img from "@/assets/step4Img.png";
import step5Img from "@/assets/step5Img.png";
import step6Img from "@/assets/step6Img.png";
import { useProgress } from "@/context/ProgressContext";
import { useRouter } from "next/navigation";

const LessonPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hide, setHide] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { incrementProgress, markLessonComplete } = useProgress();
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLessonCompletion = () => {
    if (!completed) {
      incrementProgress(10);
      markLessonComplete("lesson1");
      setCompleted(true);
      setHide(true);
    }
  };

  const slides = [
    {
      image: underwaterImg,
      title: "Lesson 1: The Great Water Cycle Adventure!",
      text: "Did you know that water is always moving around our planet? The same water you drink today has been around for millions of years! Let’s explore how water moves in a cycle that never ends—this is called the water cycle.",
      text2:
        "Understanding this cycle helps us appreciate the vital role water plays in our environment. From providing fresh water for drinking to supporting plant growth and sustaining ecosystems, every stage of the water cycle is crucial. By learning about these processes, we can better understand how to conserve water and protect our planet's resources.",
      funFact:
        "The total amount of water on Earth has remained the same for about 4 billion years. It has just changed forms—liquid, vapor, and ice—over time!",
    },
    {
      image: lakeImg,
      title: "Step 1: Evaporation (The Sun's Magic) ☀️",
      text: "The first stage of the water cycle is evaporation. When the sun heats up water from oceans, lakes, and rivers, the water turns into vapor (gas) and rises into the air. This is how water moves from the ground to the sky!",
      funFact:
        "Did you know? Almost 90% of the water that goes into the air comes from the oceans!",
    },
    {
      image: step2Img,
      title: "Step 2: Condensation (Making Clouds & Foggy Windows!)",
      text: "When water vapor cools down, it turns into tiny droplets, forming clouds. This process is called condensation. The clouds are made of millions of tiny water droplets that we see floating in the sky!",
      text2:
        "You've seen condensation on foggy windows when it's cold outside and warm inside—maybe you've even drawn on it! This same process happens in the atmosphere, where water vapor cools and forms clouds. These clouds can eventually lead to precipitation, bringing water back to the Earth's surface.",
      funFact:
        "Clouds may look light, but some can weigh more than a million pounds!",
    },
    {
      image: step3Img,
      title: "Step 3: Precipitation (Rain, Snow, and More!)",
      text: "When clouds get too heavy with water droplets, the water falls back to the ground. This is called precipitation, and it can happen as rain, snow, hail, or sleet depending on the temperature. ",
      funFact:
        "Did you know that the fastest raindrop falls at 18 miles per hour?",
    },
    {
      image: step4Img,
      title: "Step 4: Collection (Water’s Return)",
      text: "After it falls, water collects in oceans, rivers, lakes, and even in the ground. This stage is called collection. The water you see in a river may have traveled from the rain, or even from melting snow! Eventually, the water makes its way back to the ocean, where the cycle starts all over again.",
      funFact:
        "Rivers carry water from the land back to the ocean, keeping the water cycle going forever.",
    },
    {
      image: step5Img,
      title: "Conclusion",
      text: "The water cycle is great because it keeps Earth full of water for all living things to use. From the sky to the ground and back again, water is always on the move. Now that you know how it works, you’re one step closer to being a Water Hero!",
    },
    {
      image: step6Img,
      title: "Quiz Time",
      text: "Make sure to click the 'I Have Completed the Lesson!' button before you start the quiz!",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      router.push("/quiz");
    } else {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      <div className="relative p-4 flex min-h-screen pb-10">
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
              alt="Slide Image"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <h1 className="text-[#1E4A7C] font-bold text-4xl mt-8">
              {slides[currentSlide].title}
            </h1>
            <p className="font-light text-lg font-normal mt-5">
              {slides[currentSlide].text}
            </p>
            <p className="font-light text-lg font-normal mt-5">
              {slides[currentSlide].text2}
            </p>
            {slides[currentSlide].funFact && (
              <div className="flex gap-1 bg-gray-300 w-full py-4 px-4 pr-8 rounded-md items-center mt-16">
                <Droplet size={17} color="#549AEA" fill="#549AEA" />
                <p className="font-light text-sm font-light italic">
                  <span className="font-medium">Fun Fact: </span>
                  {slides[currentSlide].funFact}
                </p>
              </div>
            )}
          </div>
          {currentSlide === slides.length - 1 && !hide && (
            <p
              className={`p-3 w-fit text-sm px-5 rounded-md mt-5 cursor-pointer ${
                completed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1E4A7C] text-white"
              }`}
              onClick={handleLessonCompletion}
            >
              {completed ? "Lesson Completed" : "I Have Completed the Lesson!"}
            </p>
          )}
          <div className="absolute bottom-5 left-0 right-0 px-4 flex justify-between items-center">
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
              {currentSlide === slides.length - 1 ? "Start Quiz" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
