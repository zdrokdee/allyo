"use client";

import { useState } from "react";
import Button from "../../styles/components/buttons/button";
import Logo80 from "../../styles/components/icons/logo";
import Layout from "../../styles/components/display/layout";

export default function AuthPage() {
  // Local state for storing the user's email
  const [email, setEmail] = useState("");

  return (
    <Layout className=" bg-bg-white">
      <div className="absolute top-[448px]  left-1/2 -translate-x-1/2">
        <Logo80 />
      </div>
      <div className="absolute top-[632px]  left-1/2 -translate-x-1/2 flex flex-col items-center  gap-4">
        <Button text="Join Allyo" onClick={() => {}} />
        <Button text="Login" onClick={() => {}} />
      </div>
    </Layout>
  );
}
