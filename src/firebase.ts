import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// // login witn phone number
// import { getAuth, signInWithPhoneNumber } from 'firebase/auth';

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// const auth = getAuth();
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//   .then((confirmationResult) => {
//     // SMS sent. Prompt user to type the code from the message, then sign the
//     // user in with confirmationResult.confirm(code).
//     window.confirmationResult = confirmationResult;
//     // ...
//   })
//   .catch((error) => {
//     // Error; SMS not sent
//     // ...
//   });

// // sign out

// // import { getAuth, signOut } from "firebase/auth";

// // const auth = getAuth();
// // signOut(auth).then(() => {
// //   // Sign-out successful.
// // }).catch((error) => {
// //   // An error happened.
// // });
