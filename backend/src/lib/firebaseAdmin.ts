import * as admin from 'firebase-admin';

import { getApps } from "firebase-admin/app";

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),  // Adjust based on your Firebase Admin config
  });
}

export default admin;
