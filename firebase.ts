import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5TlaxFPVXJE8tcV7zXjCm3o-_3QOu9xk",
  authDomain: "chatgpt-messenger-21e16.firebaseapp.com",
  projectId: "chatgpt-messenger-21e16",
  storageBucket: "chatgpt-messenger-21e16.appspot.com",
  messagingSenderId: "950139292975",
  appId: "1:950139292975:web:13643bde0ab8d17aef65da",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
