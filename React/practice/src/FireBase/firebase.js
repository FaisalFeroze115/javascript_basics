// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Q66ySbemD2BmhbndAgoNT_yaf6SGkMw",
  authDomain: "guestbook-f6f85.firebaseapp.com",
  projectId: "guestbook-f6f85",
  storageBucket: "guestbook-f6f85.firebasestorage.app",
  messagingSenderId: "876263473557",
  appId: "1:876263473557:web:63d7efd5ae2448bbca369c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        console.log(user)
        return user
    }catch (error) {
        throw error
    }
}

const loginWithEmailAndPassword = async (email, password) => {
    try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        const user = res.user;
        console.log(user)
        return user
    }catch (error) {
        throw error
    }
}

const sendPasswordReset = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email)
        console.log('Password reset email sent')
    }catch (error) {
        throw error
    }
}

const signInWithGoogle = async () => {
    
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        console.log(user);
        return user;
    } catch (error) {
        throw error;
    }
};

export {registerWithEmailAndPassword, loginWithEmailAndPassword, sendPasswordReset, signInWithGoogle, auth}   
