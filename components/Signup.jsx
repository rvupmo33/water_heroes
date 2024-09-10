import React from "react";
import heroDuoImg from "@/assets/waterHeroDuo.png";
import Image from "next/image";
import Link from "next/link";

const Signup = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
  error,
  successMessage,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image src={heroDuoImg} alt="" className="w-40" />
      <p className="font-bold text-2xl sm:text-4xl mb-7">
        Become A Water Hero!
      </p>
      <div className="border-2 border-[#1E4A7C] bg-[#BED8F6] p-6 rounded-3xl">
        <p className="text-lg font-bold">Sign Up</p>
        <div className="w-full">
          <p className="text-xs font-bold mt-3 mb-1">Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="text-xs py-3 px-5 rounded-full outline-none border-2 border-[#1E4A7C] w-[250px] sm:w-[400px] md:w-[550px] bg-[#FFFCE8]"
          />
        </div>
        <div className="">
          <p className="text-xs font-bold mt-3 mb-1">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            className="text-xs py-3 px-5 rounded-full outline-none border-2 border-[#1E4A7C] w-[250px] sm:w-[400px] md:w-[550px] bg-[#FFFCE8]"
          />
        </div>
        <button
          onClick={handleSignUp}
          className="text-sm w-full text-center bg-[#1E4A7C] font-bold text-[#FFF28C] py-3 rounded-2xl mt-7"
        >
          Sign Up
        </button>
        {successMessage && (
          <p className="text-green-500 mt-3 text-center">{successMessage}</p>
        )}{" "}
        {/* Display success message */}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}{" "}
        {/* Display error message */}
      </div>
      <Link href="/signin">
        <p className="text-sm mt-5 font-light">
          Have an account? <span className="underline">Log In Here</span>
        </p>
      </Link>
    </div>
  );
};

export default Signup;
