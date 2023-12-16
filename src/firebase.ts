import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC3oGZXQ3ddivNrOgZ-WhR8q3HsQPIMbOk',
  authDomain: 'login-page-237eb.firebaseapp.com',
  projectId: 'login-page-237eb',
  storageBucket: 'login-page-237eb.appspot.com',
  messagingSenderId: '312014664137',
  appId: '1:312014664137:web:33ff6bd07a6826cc39f818'
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
