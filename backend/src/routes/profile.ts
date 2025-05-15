// backend/src/routes/profile.ts
import { Request, Response } from "express";
import { getAuth } from "firebase/auth";
import { app } from "../lib/firebase";
import prisma from "../lib/prisma";
import { verifyFirebaseToken } from "../../src/lib/verifyToken";

export const profileHandler = async (req: Request, res: Response) => {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  try {
    const { idToken, formData } = req.body;

    const decoded = await verifyFirebaseToken(idToken); // ✅ Pass the App instance
    const firebase_uid = decoded.uid;
    console.log("Decoded Firebase UID:", firebase_uid);
    const profile = await prisma.userProfile.upsert({
      where: { firebase_uid },
      update: { ...formData },
      create: { firebase_uid, ...formData },
    });

    res.status(200).json(profile);
  } catch (err) {
    console.error("Profile save failed:", err);
    res.status(500).json({ error: "Internal Server Error" });console.log("Request body:", req.body);  // Add this to log the incoming request

    // After this line in the `try` block
    
  }
};

    
