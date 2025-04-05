"use client";

import { useState } from "react";
import Button from "../../styles/components/buttons/button";
import Logo80 from "../../styles/components/icons/logo";

export default function AuthPage() {
  // Local state for storing the user's email
  const [email, setEmail] = useState("");

  return (
    <div className="relative w-full min-h-screen max-w-[560px] flex flex-col items-center  mx-auto bg-background-white overflow-hidden ">
      <div className="absolute top-[448px]  left-1/2 -translate-x-1/2">
        <Logo80 />
      </div>
      <div className="absolute top-[632px]  left-1/2 -translate-x-1/2 flex flex-col items-center  gap-4">
        <Button text="Join Allyo" onClick={() => {}} />
        <Button text="Login" onClick={() => {}} />
      </div>
    </div>
  );
}
