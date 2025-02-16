// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASCdZpv27Xsk-qif_vpCfCybv6YBM0OFg",
  authDomain: "the-daily-feed-83f19.firebaseapp.com",
  projectId: "the-daily-feed-83f19",
  storageBucket: "the-daily-feed-83f19.firebasestorage.app",
  messagingSenderId: "468717086285",
  appId: "1:468717086285:web:e561b4ffeb2b858c1c9e04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;