"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { GoogleIcon24, FacebookIcon24 } from "../../components/icons/social";
import Button from "../../components/buttons/button";
import Logo80 from "../../components/icons/logo";
import Layout from "../../components/display/layout";

export default function AuthPage() {
  // Local state for storing the user's email
  const route = useRouter();
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const token = await user.getIdToken(); // This is the Firebase ID token

      // Send the token to your API for verification and to check the user
      const response = await fetch('/api/verify_user', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,  // Send the token in the Authorization header
        },
      });

      const data = await response.json();

      // Check for the redirection in the response and navigate accordingly
      if (data.redirect) {
        route.push(data.redirect);  // Redirect to the desired page (e.g., profile or registration)
      }
       // or wherever logged-in users go
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
