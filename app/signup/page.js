"use client";
import Signup from "@/components/Signup";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Sign-up successful:", data);
      localStorage.setItem("user", JSON.stringify(data.userData));
      setSuccessMessage(
        "Sign-up successful! Please Log in to access the dashboard."
      );
      setError("");
    } catch (error) {
      console.error("Sign-up error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="mx-4">
      <Link href="/">
        <p className="absolute px-7 py-5">LOGO</p>
      </Link>
      <Signup
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignUp={handleSignUp}
        error={error}
        successMessage={successMessage}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SignupPage;
