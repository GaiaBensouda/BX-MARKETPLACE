import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAuQuCBq-DnmTuVxYYiCmQKjYzdIMqC9Ag",
  authDomain: "bx-marketplace-13714.firebaseapp.com",
  projectId: "bx-marketplace-13714",
  storageBucket: "bx-marketplace-13714.appspot.com",
  messagingSenderId: "312739059318",
  appId: "1:312739059318:web:eff24e0e26c86c92dc7157",
  measurementId: "G-B55V59WGXW"
};


const app = initializeApp(firebaseConfig);

// Initialiser les services Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
