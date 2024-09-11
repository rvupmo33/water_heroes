import React from "react";
import achievementBadge from "@/assets/achievementBadge.png";
import challCard from "@/assets/challCard.png";
import factImg from "@/assets/FactImg.png";
import Image from "next/image";
import { Clock } from "lucide-react";

const Bento = () => {
  return (
    <div className="mt-7 h-full flex flex-col gap-4 md:flex-row md:gap-4">
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1 bg-white shadow-md p-5 rounded-lg">
            <p className="font-bold text-[#1E4A7C]">Lessons</p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex justify-between items-center bg-[#F0F0F0] py-2 px-3 rounded-md">
                <p className="text-sm">1.1 The Great Water Cycle Adventure!</p>
                <p className="text-xs">0%</p>
              </div>
              <div className="flex justify-between items-center bg-[#F0F0F0] py-2 px-3 rounded-md">
                <p className="text-sm">1.2 The Amazing Water Facts!</p>
                <p className="text-xs">0%</p>
              </div>
              <div className="flex justify-between items-center bg-[#F0F0F0] py-2 px-3 rounded-md">
                <p className="text-sm">
                  1.3 The Incredible Water Conservation!
                </p>
                <p className="text-xs">0%</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-md p-5 rounded-lg md:ml-4 mt-4 md:mt-0">
            <p className="font-bold text-[#1E4A7C]">Quizzes</p>
            <div className="text-center">
              <p className="text-4xl md:text-7xl mt-3 mb-3">
                <span>0</span>/5
              </p>
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1 bg-white shadow-md p-5 rounded-lg">
            <p className="font-bold text-[#1E4A7C]">Achievements</p>
            <div className="flex flex-col w-full justify-center items-center text-center mt-5">
              <Image
                src={achievementBadge}
                alt="Achievement Badge"
                width={100}
                className="opacity-[75%]"
              />
              <p className="mt-3 text-sm font-light max-w-[300px]">
                Complete lessons and challenges to start earning badges
              </p>
            </div>
          </div>
          <div className="relative flex-1 bg-white shadow-md p-5 rounded-lg flex flex-col mt-5 md:mt-0">
            <p className="font-bold text-[#1E4A7C] mb-5">Fact of the Day!</p>
            <Image
              src={factImg}
              alt=""
              className="absolute bottom-0 left-0 w-[80px] md:w-[100px] lg:w-[130px] xl:w-[170px]"
            />
            <div className="w-full max-w-[250px] rounded-md h-27 bg-[#FFF28C] self-end">
              <p className="text-xs text-center p-4">
                Did you know? The average American uses 80-100 gallons of water
                per day! <br /> —Captain Droplet
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-56 bg-white shadow-md p-4 rounded-lg mt-4 md:mt-0 md:ml-4">
        <p className="font-bold text-[#1E4A7C]">Challenges This Week</p>
        <div className="relative mt-5">
          <Image src={challCard} alt="Challenge Card" className="rounded-md" />
          <p className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl md:text-sm text-center">
            Score 100 in <br />
            Droplet Clicker
          </p>
        </div>
        <div className="relative mt-2">
          <Image src={challCard} alt="Challenge Card" className="rounded-md" />
          <p className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl md:text-sm text-center">
            Save 10 Liters of <br /> Water This Week
          </p>
        </div>
        <div className="flex gap-2 bg-[#1E4A7C] p-2 rounded-md mt-5">
          <Clock color="#FFF28C" />
          <p className="text-[#FFF28C] font-bold">6 Days Left</p>
        </div>
      </div>
    </div>
  );
};

export default Bento;
