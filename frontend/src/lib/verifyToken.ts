// backend/lib/verifyToken.ts
import admin from "../../src/lib/firebaseAdmin";

export const verifyFirebaseToken = async (idToken: string) => {
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        return decodedToken; // contains uid, email, etc.
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
};
