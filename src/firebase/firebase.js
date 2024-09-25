import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {

  apiKey: "AIzaSyD2FcFEK6oVwlt-34fK891HHDhXGFnkAgM",

  authDomain: "facebook-insta-clone.firebaseapp.com",

  projectId: "facebook-insta-clone",

  storageBucket: "facebook-insta-clone.appspot.com",

  messagingSenderId: "674232931915",

  appId: "1:674232931915:web:ba5d0b48c8d79c67529fce"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
