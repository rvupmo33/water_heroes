import React from "react";
import logo from "@/assets/logo.png";
import socials from "@/assets/socials.png";
import footer from "@/assets/footer.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full text-[#1e4a7c] shadow-t">
      <Image
        src={footer}
        layout="fill"
        className="absolute inset-0 object-cover z-[-1] h-full "
        alt="Footer Background"
      />
      <div className="relative p-6 sm:flex gap-10 md:gap-28 mt-20 pt-20 h-[520px]">
        <div>
          <Image src={logo} height={45} alt="Logo" />
          <p className="max-w-[480px] font-light mt-4 text-md">
            Inspiring young minds on how to protect the world’s most precious
            resource! Water Parents, connect with us on socials!
          </p>
          <div className="mt-5">
            <Image src={socials} height={20} alt="Socials" />
          </div>
        </div>
        <div className="flex justify-between flex-1 gap-10 mt-6 sm:mt-0">
          <div>
            <h1 className="font-bold text-lg">Home</h1>
            <p className="font-light mt-2">Features</p>
          </div>
          <div>
            <h1 className="font-bold text-lg">About Us</h1>
            <p className="font-light mt-2">Our Mission</p>
          </div>
          <div>
            <h1 className="font-bold text-lg">Resources</h1>
            <p className="font-light mt-2">Books</p>
            <p className="font-light mt-2">Parent Zone</p>
            <p className="font-light mt-2">Water Heroes Global</p>
          </div>
        </div>
        <p className="text-xs absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          © 2024 HydroHeroes. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
