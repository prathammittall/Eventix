import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBsijI7_38slaqDonIPHc4kAICRrjeEJe4",
    authDomain: "eventix-35718.firebaseapp.com",
    projectId: "eventix-35718",
    storageBucket: "eventix-35718.firebasestorage.app",
    messagingSenderId: "905213185218",
    appId: "1:905213185218:web:a82183070665fe03c23f5b",
    measurementId: "G-HZKYPR7ELF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Configure Google Provider with profile access
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

// Configure GitHub Provider
export const githubProvider = new GithubAuthProvider();
export default app;