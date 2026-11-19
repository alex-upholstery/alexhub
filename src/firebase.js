import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzPOZc8_lU5Ys-TycBjmdF5Y5VRc5C6fo",
  authDomain: "alexhub-cf001.firebaseapp.com",
  projectId: "alexhub-cf001",
  storageBucket: "alexhub-cf001.firebasestorage.app",
  messagingSenderId: "685033038880",
  appId: "1:685033038880:web:7760f510e1044c50478845",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);