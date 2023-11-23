import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import "firebase/auth";
import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCj_zTW0aP6mRcg9y_zcEKi7dVBPdD49bk",
    authDomain: "update--405003.firebaseapp.com",
    projectId: "update-youtube-405003",
    storageBucket: "update-youtube-405003.appspot.com",
    messagingSenderId: "107099070730",
    appId: "1:107099070730:web:3f3a65042b1577588a5af3",
    measurementId: "G-G6D0LG82N9",
};
if (!firebase?.apps?.length) {
    initializeApp(firebaseConfig);
}
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const faceProvider = new FacebookAuthProvider();
