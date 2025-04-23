"use client";

import { useState } from "react";
import Button from "../../styles/components/buttons/button";
import Logo80 from "../../styles/components/icons/logo";
import Layout from "../../styles/components/display/layout";
import Popup from "../../styles/components/display/popup";

export default function AuthPage() {
  // Local state for storing the user's email
  const [email, setEmail] = useState("");

  return (
    <Layout className="fixed bottom-0">
      <Popup onClose={() => {}} />
    </Layout>
  );
}
