
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from '@firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaMLIKliERDpBUplKNyr6BQD2k7JM32Og",
  authDomain: "crud-fire-react-c0b55.firebaseapp.com",
  projectId: "crud-fire-react-c0b55",
  storageBucket: "crud-fire-react-c0b55.appspot.com",
  messagingSenderId: "308551523157",
  appId: "1:308551523157:web:f32d56354630c800522ddc",
  measurementId: "G-8DRBP7GFBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Conexión a la BD exportandola
export const db = getFirestore(app)