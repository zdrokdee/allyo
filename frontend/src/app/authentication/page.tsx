"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  GoogleIcon24,
  FacebookIcon24,
} from "../../styles/components/icons/social";
import Button from "../../styles/components/buttons/button";
import Logo80 from "../../styles/components/icons/logo";
import Layout from "../../styles/components/display/layout";

export default function AuthPage() {
  // Local state for storing the user's email
  const route = useRouter();
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      route.push("/profile"); // or wherever logged-in users go
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google sign-in failed.");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      route.push("/profile");
    } catch (error) {
      console.error("Facebook login error:", error);
      alert("Facebook sign-in failed.");
    }
  };

  return (
    <Layout className=" bg-bg-white">
      <div className="absolute top-1/3">
        <Logo80 />
      </div>

      <div className="absolute top-2/3   flex flex-col items-center  gap-4">
        <Button
          icon={<GoogleIcon24 />}
          text="Google"
          onClick={handleGoogleLogin}
        />
        <Button
          icon={<FacebookIcon24 className="mb-0.5" />}
          text="Facebook"
          onClick={handleFacebookLogin}
        />
        <Button
          text="Email"
          onClick={() => route.push("/authentication/email")}
        />
      </div>
    </Layout>
  );
}
