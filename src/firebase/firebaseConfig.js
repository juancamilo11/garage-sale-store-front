// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS80d86qxzpwn9jRobBfhR4m-qe0UKm2Q",
  authDomain: "garage-sale-store.firebaseapp.com",
  projectId: "garage-sale-store",
  storageBucket: "garage-sale-store.appspot.com",
  messagingSenderId: "104586299180",
  appId: "1:104586299180:web:66e4fdcdc300c1d7c48e89",
  measurementId: "G-69K1M7P8ZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
