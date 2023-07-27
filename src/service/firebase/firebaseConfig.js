
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAalBhp9ml6YN-5k5gj97tjneEIK6UTiXo",
    authDomain: "ecommerceind-77a31.firebaseapp.com",
    projectId: "ecommerceind-77a31",
    storageBucket: "ecommerceind-77a31.appspot.com",
    messagingSenderId: "583542988397",
    appId: "1:583542988397:web:78058e3923f206ea776964"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);