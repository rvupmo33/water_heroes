import Image from "next/image";
import React from "react";
import heroImg from "@/assets/heroImg.png";
import captainLogo from "@/assets/captainLogo.png";

const Hero = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full h-[600px]" />
      <div className="absolute w-full p-10 pb-20 bottom-0 text-[#1E4A7C]">
        <div className="md:flex justify-between items-center text-center md:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-[40px] md:leading-[45px] lg:text-5xl font-bold">
              Protect Our Planet,
              <br /> One Drop at a Time!
            </h1>
            <p className="text-xs xs:text-sm md:text-base text-black mb-7 mt-2 max-w-[400px] mx-auto md:mx-0">
              Join the Water Heroes and discover how you can save water and make
              a real difference in the world!
            </p>
            <p className="text-xs xs:text-sm md:text-sm bg-[#FFF28C] py-2 px-10 w-fit border-2 border-[#1E4A7C] rounded-full mx-auto md:mx-0">
              Join the Water Squad
            </p>
          </div>
          <div className="lg:mr-10  flex justify-center mt-10 md:mt-0 items-center">
            <Image
              src={captainLogo}
              alt=""
              className="w-[150px] md:w-[250px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
