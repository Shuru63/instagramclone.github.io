
import { initializeApp } from "firebase/app";
import {auth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBabGji7Dnc8BHkgRiqQdHykAgJMBSIVlA",
  authDomain: "instagram-clone-99d1a.firebaseapp.com",
  projectId: "instagram-clone-99d1a",
  storageBucket: "instagram-clone-99d1a.appspot.com",
  messagingSenderId: "1000101686736",
  appId: "1:1000101686736:web:c09d648d0b098d4e545dd5"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();