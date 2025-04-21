"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../styles/components/buttons/button";
import Logo80 from "../../styles/logo";
import Layout from "../../styles/components/display/layout";
import Popup from "../../styles/components/display/popup";
import { GoogleIcon24, FacebookIcon24 } from "../../styles/social";

export default function AuthPage() {
  // Local state for storing the user's email
  const route = useRouter();

  return (
    <Layout className=" bg-bg-white">
      <div className="absolute top-1/3">
        <Logo80 />
      </div>

      <div className="absolute top-2/3   flex flex-col items-center  gap-4">
        <Button icon={<GoogleIcon24 />} text="Google" onClick={() => {}} />
        <Button
          icon={<FacebookIcon24 className="mb-0.5" />}
          text="Facebook"
          onClick={() => {}}
        />
        <Button
          text="Email"
          onClick={() => route.push("/authentication/email")}
        />
      </div>
    </Layout>
  );
}
