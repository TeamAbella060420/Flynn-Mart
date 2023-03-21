
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD7lkjqO_1LdxJuvMbL5jmLYPNNkI2bQQU",
  authDomain: "flyynmart.firebaseapp.com",
  projectId: "flyynmart",
  storageBucket: "flyynmart.appspot.com",
  messagingSenderId: "493347908675",
  appId: "1:493347908675:web:83bd44ea932aecbfea38f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;

