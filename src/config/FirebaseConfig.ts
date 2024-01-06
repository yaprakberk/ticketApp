import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDO7-8ESQ-kbGCZPhZcPorQSO9MKEwKBoc",
  authDomain: "yaprak-de212.firebaseapp.com",
  projectId: "yaprak-de212",
  storageBucket: "yaprak-de212.appspot.com",
  messagingSenderId: "886159459167",
  appId: "1:886159459167:web:9ba18350ee18c647a96cea",
  measurementId: "G-WMNYGP9CT9",
};

const fireApp = initializeApp(firebaseConfig);

export const fireAuth = getAuth(fireApp);
export const fireFunctions = getFunctions(fireApp);
export const db = getFirestore(fireApp);
export const messaging = getMessaging(fireApp);

export default fireApp;
