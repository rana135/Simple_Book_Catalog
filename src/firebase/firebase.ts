// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaiceQSMt-2EW9mvrZdzbwy-PrGwWV200",
  authDomain: "simple-book-catalog-2bb56.firebaseapp.com",
  projectId: "simple-book-catalog-2bb56",
  storageBucket: "simple-book-catalog-2bb56.appspot.com",
  messagingSenderId: "1049826888263",
  appId: "1:1049826888263:web:73073a43250e275671bf62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;