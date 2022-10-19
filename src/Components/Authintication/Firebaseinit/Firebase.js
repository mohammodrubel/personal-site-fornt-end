// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBndaybAyGD1Nvodz_JCychUnVPBblWfIs",
  authDomain: "web-muhammadrubel.firebaseapp.com",
  projectId: "web-muhammadrubel",
  storageBucket: "web-muhammadrubel.appspot.com",
  messagingSenderId: "625074795051",
  appId: "1:625074795051:web:f46032b5fb9894e351706e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;