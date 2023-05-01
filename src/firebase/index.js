// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAuth, connectAuthEmulator } from 'firebase/auth';
// import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRlGgbiYtvqQ19ir9EDZgs0F06aa3bqwg",
  authDomain: "vuejs-projects-eebad.firebaseapp.com",
  projectId: "vuejs-projects-eebad",
  storageBucket: "vuejs-projects-eebad.appspot.com",
  messagingSenderId: "332272898523",
  appId: "1:332272898523:web:0696b15055c5212a3517fe",
  measurementId: "G-42QWQ97T49",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// connectAuthEmulator(getAuth(), 'http://127.0.0.1:9099');

// connectFunctionsEmulator(getFunctions(), 'http://127.0.0.1:5001');

export default app;
