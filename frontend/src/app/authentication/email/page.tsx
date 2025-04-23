"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import Button from "@/styles/components/buttons/button";
import Layout from "@/styles/components/display/layout";
import { EmailInput } from "@/styles/components/form_inputs/email_input";
import { BackIcon24 } from "@/styles/components/icons/icons24";
import { sendSignInLinkToEmail, sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";

// app/authentication/email/page.tsx

export default function EmailPage() {
  const route = useRouter();
  const [email, setEmail] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);

  const actionCodeSettings = {
    url: "http://localhost:3000/authentication/email", // Replace with your app's URL
    handleCodeInApp: true,
  };

  

  async function sendLink(email: string) {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Magic link sent! Check your inbox.");
    } catch (error: any) {
      console.error("❌ Failed to send link:", error.code, error.message);
      alert("Failed to send link. Try again in a few seconds.");
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center gap-12  max-w-[328px] ">
        <div className="self-start mt-2">
          <BackIcon24 onClick={() => route.push("/authentication")} />
        </div>
        <h1 className="title24-reg">We will send you a confirmation link</h1>
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <Button
        text="Send me a link"
        disabled={!isEmailValid}
        className="absolute bottom-4"
        onClick={async () => {
          try {
            await sendLink(email);
            alert("Verification email sent!");
          } catch (error) {
            console.error(error);
            alert("Error sending email");
          }
        }}
      />
    </Layout>
  );
}
