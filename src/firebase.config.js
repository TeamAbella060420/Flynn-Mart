
import { initializeApp } from "firebase/app";


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

export default app;