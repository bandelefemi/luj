// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTI1XDAY955olZIlS3KwDPIDbOcPC0iZQ",
  authDomain: "luj-store.firebaseapp.com",
  projectId: "luj-store",
  storageBucket: "luj-store.appspot.com",
  messagingSenderId: "1064757699951",
  appId: "1:1064757699951:web:74ed61c89eb9231811b49a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;