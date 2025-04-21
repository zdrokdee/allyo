"use client";
import { useState } from "react";
import Layout from "@/styles/components/display/layout";
import { BackIcon24 } from "@/styles/components/icons/icons24";
import { useRouter } from "next/navigation";
import Button from "@/styles/components/buttons/button";
import { EmailInput } from "@/styles/components/form_inputs/email_input";


// app/authentication/email/page.tsx

export default function EmailPage() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);

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
        onClick={() => {}}
      />

    </Layout>
  );
}
