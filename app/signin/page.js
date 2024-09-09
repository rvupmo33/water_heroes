import Signin from "@/components/Signin";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-4">
      <Link href="/">
        <p className="absolute px-7 py-5">LOGO</p>
      </Link>
      <Signin />
    </div>
  );
};

export default page;
