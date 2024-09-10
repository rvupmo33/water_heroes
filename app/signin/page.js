"use client";
import Signin from "@/components/Signin";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignIn() {
    try {
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        setError(errorText);
        return;
      }

      const data = await response.json();
      console.log("Sign-in successful:", data);

      localStorage.setItem("user", JSON.stringify(data.userData));

      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("An unexpected error occurred.");
    }
  }

  return (
    <div className="mx-4">
      <Link href="/">
        <p className="absolute px-7 py-5">LOGO</p>
      </Link>
      <Signin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        error={error}
      />
    </div>
  );
};

export default SigninPage;
