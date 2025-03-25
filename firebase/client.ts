import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGkgZE1u5KBMG3XB2T0e04tokShE1QMfg",
    authDomain: "prepwise-b8f17.firebaseapp.com",
    projectId: "prepwise-b8f17",
    storageBucket: "prepwise-b8f17.firebasestorage.app",
    messagingSenderId: "703123081238",
    appId: "1:703123081238:web:17777f961679eaf1e8cd37",
    measurementId: "G-DGBR6JTNQ1"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);