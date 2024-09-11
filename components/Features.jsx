import Image from "next/image";
import feature1 from "@/assets/feature1.png";
import feature2 from "@/assets/feature2.png";
import feature3 from "@/assets/feature3.png";
import star from "@/assets/star.png";
import React from "react";

const Features = () => {
  return (
    <div>
      <p className="text-[#1E4A7C] font-bold text-4xl text-center mt-20 mb-5">
        Why Choose Us?
      </p>
      <div className="relative bg-[#BED8F6] shadow-lg p-8 rounded-2xl sm:flex justify-between text-center text-[#1E4A7C]">
        <Image
          src={star}
          alt=""
          className="absolute top-[-20px] right-[-20px]"
          width={80}
        />
        <div className="flex-1 flex flex-col justify-center items-center mx-4">
          <Image alt="" src={feature1} height={140} />
          <p className="font-bold text-xl mt-4">Interactive Missions</p>
          <p className="font-light text-sm max-w-[250px] mt-2">
            Fun, engaging lessons about water conservation.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center mx-4 mt-10 sm:mt-0">
          <Image alt="" src={feature2} height={140} />
          <p className="font-bold text-xl mt-4">Earn Hero Badges</p>
          <p className="font-light text-sm max-w-[250px] mt-2">
            Test your knowledge and collect badges as you complete missions.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center mx-4 mt-10 sm:mt-0">
          <Image alt="" src={feature3} height={140} />
          <p className="font-bold text-xl mt-4">Track Your Journey</p>
          <p className="font-light text-sm max-w-[250px] mt-2">
            Customize your profile, see your achievements, and rise through the
            ranks of Water Heroes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
