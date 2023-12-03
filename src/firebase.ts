import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
export const db = getFirestore(app);
