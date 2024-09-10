import React from "react";
import heroDuoImg from "@/assets/waterHeroDuo.png";
import Image from "next/image";
import Link from "next/link";

const Signin = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignIn,
  error,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image src={heroDuoImg} alt="" className="w-40" />
      <p className="font-bold text-2xl sm:text-4xl mb-7">
        Welcome back, Water Hero!
      </p>
      <div className="border-2 border-[#1E4A7C] bg-[#BED8F6] p-6 rounded-3xl">
        <p className="text-lg font-bold">Log In</p>
        <div className="w-full">
          <p className="text-xs font-bold mt-3 mb-1">Username</p>
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
          onClick={handleSignIn}
          className="text-sm w-full text-center bg-[#1E4A7C] font-bold text-[#FFF28C] py-3 rounded-2xl mt-7"
        >
          Log In
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}
        <p className="font-light text-sm text-center mt-3">Forgot Password?</p>
      </div>
      <Link href="/signup">
        <p className="text-sm mt-5 font-light">
          Don’t have an account? <span className="underline">Sign Up Here</span>
        </p>
      </Link>
    </div>
  );
};

export default Signin;
