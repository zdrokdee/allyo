// app/api/profile/route.ts
import prisma from "src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


import { verifyFirebaseToken } from "src/lib/verifyToken";




// ... rest of the code ...  

export async function POST(req: NextRequest) {
    try {
        const { idToken, formData } = await req.json();

        // 1. Verify Firebase token
        const decoded = await verifyFirebaseToken(idToken);
        const firebase_uid = decoded.uid;

        // 2. Basic server-side validation
        if (!formData || !formData.name || !formData.yourValue) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // 3. Upsert profile
        const updated = await prisma.userProfile.upsert({
            where: { firebase_uid },
            update: {
                name: formData.name,
                what_you_want_to_do: formData.yourValue,
                bio: formData.importantAbout,
                age: formData.age ? parseInt(formData.age) : null,
                height: formData.height ? parseInt(formData.height) : null,
                gender: formData.gender,
                language: formData.language.join(","),
                // photos: later
            },
            create: {
                firebase_uid,
                name: formData.name,
                what_you_want_to_do: formData.yourValue,
                bio: formData.importantAbout,
                age: formData.age ? parseInt(formData.age) : null,
                height: formData.height ? parseInt(formData.height) : null,
                gender: formData.gender,
                language: formData.language.join(","),
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Profile save failed:", error);
        return NextResponse.json({ error: "Failed to save profile" }, { status: 500 });
    }
}
