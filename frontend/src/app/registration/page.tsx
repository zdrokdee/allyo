"use client";

import React from "react";
import { useState } from "react";
import Layout from "src/components/display/layout";
import { CloseIcon12 } from "src/components/icons/icons12";
import Button from "../../components/buttons/button";
import InputField from "../../components/form_inputs/input_field";
import PhotoUpload from "../../components/form_inputs/photo_upload";
import GenderModal from "../../components/popups/gender";
import LanguageModal from "../../components/popups/language"; // Import LanguageModal
import InputCapsuleField from "../../components/form_inputs/input_capsule_filed";
import {auth} from "src/lib/firebase"; // Initialize Firebase in your frontend




export default function CreateProfilePage() {
  const [formData, setFormData] = useState({
    yourValue: "",
    importantAbout: "",
    age: "",
    height: "",
    gender: "",
    name: "",
    language: [] as string[], // ✅ now an array of strings
  });

  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false); // State to manage language modal visibility

  return (
    <Layout>
      <div className="flex flex-col items-center gap-16 max-w-[328px]">
        {/* Your Proposal */}
        <div className="self-start mt-2 w-full">
          <InputField
            textarea
            label="your proposal"
            maxLength={150}
            placeholder="Type your proposal..."
            value={formData.yourValue}
            onChange={(e) =>
              setFormData({ ...formData, yourValue: e.target.value })
            }
          />
        </div>

        <InputField
          label="name"
          placeholder="|"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        {/* Your Photos */}
        <div className="flex flex-col gap-4 w-full">
          <span className="sub13-reg text-neutral-10">your photos</span>
          <PhotoUpload />
        </div>

        {/* Important About Yourself */}
        <div className="w-full">
          <InputField
            textarea
            label="about"
            maxLength={1500}
            placeholder="Describe yourself..."
            value={formData.importantAbout}
            onChange={(e) =>
              setFormData({ ...formData, importantAbout: e.target.value })
            }
          />
        </div>

        {/* Age, Height, Gender */}
        <InputField
          label="age"
          type="text"
          inputMode="numeric"
          placeholder="|"
          value={formData.age}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,2}$/.test(val)) {
              setFormData({ ...formData, age: val });
            }
          }}
          max={99}
          min={0}
          className="no-spinner"
        />

        <InputField
          label="height"
          type="text"
          inputMode="numeric"
          unit="cm"
          placeholder="|"
          value={formData.height}
          min={0}
          max={220}
          onChange={(e) => {
            const newValue = e.target.value;
            if (/^\d{0,3}$/.test(newValue) && Number(newValue) <= 220) {
              setFormData({ ...formData, height: newValue });
            }
          }}
          className="no-spinner"
        />

        <InputCapsuleField
          label="gender"
          values={formData.gender ? [formData.gender] : []} // wrap in array
          placeholder="Select gender"
          onClick={() => setShowGenderModal(true)}
          onRemove={() =>
            setFormData({
              ...formData,
              gender: "", // clear gender on remove
            })
          }
        />

        {showGenderModal && (
          <GenderModal
            selected={formData.gender}
            onSelect={(gender) => {
              setFormData({ ...formData, gender });
              setShowGenderModal(false); // optionally close on select
            }}
            onClose={() => setShowGenderModal(false)}
          />
        )}

        <InputCapsuleField
          label="language"
          values={formData.language}
          placeholder="Choose language"
          onClick={() => setShowLanguageModal(true)}
          onRemove={(langToRemove: string) =>
            setFormData({
              ...formData,
              language: formData.language.filter(
                (lang) => lang !== langToRemove
              ),
            })
          }
        />

        {/* Modals */}


        {showLanguageModal && (
          <LanguageModal
            selected={formData.language}
            onSelect={(newLang) => {
              if (
                !formData.language.includes(newLang) &&
                formData.language.length < 6
              ) {
                setFormData({
                  ...formData,
                  language: [...formData.language, newLang], // ✅ Append to array
                });
              }
            }}
            onRemove={(langToRemove) =>
              setFormData({
                ...formData,
                language: formData.language.filter(
                  (lang) => lang !== langToRemove
                ), // ✅ Remove from array
              })
            }
            onClose={() => setShowLanguageModal(false)}
          />
        )}

        {/* Continue Button */}
        <Button
          text="Continue"
          className="absolute bottom-4"
          onClick={async () => {
            try {
              const user = auth.currentUser;

              if (!user) throw new Error("Not authenticated");
              const idToken = await user.getIdToken();
          
              const res = await fetch("/api/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken, formData }),
              });
              
              console.log("Sending data to backend:", { idToken, formData });
              
          
              const result = await res.json();
              if (!res.ok) throw new Error(result.error || "Failed");
          
              console.log("✅ Profile saved:", result);
              // Navigate or show success
            } catch (err) {
              console.error("❌ Failed to submit profile:", err);
            }
          }}
          
        />
      </div>
    </Layout>
  );
}
