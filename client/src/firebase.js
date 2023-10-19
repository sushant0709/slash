// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzFHTZw7p5V0ReFOKdsJvOHClMR-yYZOs",
  authDomain: "slash-56995.firebaseapp.com",
  projectId: "slash-56995",
  storageBucket: "slash-56995.appspot.com",
  messagingSenderId: "830919902509",
  appId: "1:830919902509:web:ffc8a1c218f81c6fb2bfa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
