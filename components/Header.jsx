import React from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#FFFFFF] py-[13px] px-6 rounded-[20px] drop-shadow-md mb-5">
      <div>
        <Image src={logo} height={25} alt="" />
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-6">
          <p className="hidden md:block font-bold text-sm">Home</p>
          <p className="hidden md:block font-bold text-sm">About Us</p>
          <p className="hidden md:block font-bold text-sm">Resources</p>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="/signin">
            <p className="text-[#1E4A7C] py-2 px-4 md:px-7 rounded-full font-bold text-xs border-2 border-[#1E4A7C]">
              Log In
            </p>
          </Link>
          <Link href="/signup">
            <p className="text-[#FFF28C] bg-[#1E4A7C] py-2 px-4 md:px-7 rounded-full font-bold text-xs">
              Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
