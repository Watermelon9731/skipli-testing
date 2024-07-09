import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const loginWithPhoneNumber = async (phoneNumber: string) => {
//   const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {});
//   try {
//     const confirmationResult = await signInWithPhoneNumber(
//       auth,
//       phoneNumber,
//       appVerifier
//     );
//     console.log(confirmationResult);
//   } catch (error) {
//     console.log(error);
//   }
// };
// https://firebase.google.com/docs/auth/web/phone-auth?authuser=0&hl=en#web
