import Signup from "@/components/Signup";
import Link from "next/link";
import React from "react";

const signupPage = () => {
  return (
    <div className="mx-4">
      <Link href="/">
        <p className="absolute px-7 py-5">LOGO</p>
      </Link>
      <Signup />
    </div>
  );
};

export default signupPage;
