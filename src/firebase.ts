import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyA8jFBHWJqU9hgQ6cyUcg6glc0eYTp9kP0',
  authDomain: 'login-page-d033d.firebaseapp.com',
  projectId: 'login-page-d033d',
  storageBucket: 'login-page-d033d.appspot.com',
  messagingSenderId: '1022966266839',
  appId: '1:1022966266839:web:e7275de6a78fa18ecba992'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
