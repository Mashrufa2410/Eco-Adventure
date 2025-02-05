import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmJTx4WstrEy19TM16H5lXLctZ96gd2Uw",
  authDomain: "adventure-blog-66733.firebaseapp.com",
  projectId: "adventure-blog-66733",
  storageBucket: "adventure-blog-66733.firebasestorage.app",
  messagingSenderId: "607053205629",
  appId: "1:607053205629:web:158a453e5bb51ffab6e114"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Define the Google provider

export { auth, googleProvider }; // Export both auth and googleProvider