import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBzckiNgR1TgUvZUMg2KsxRWDYnrTrEEvk",
    authDomain: "clone-yt-24acd.firebaseapp.com",
    projectId: "clone-yt-24acd",
    storageBucket: "clone-yt-24acd.appspot.com",
    messagingSenderId: "606231044102",
    appId: "1:606231044102:web:708c9726a1f4f2dc352387",
    measurementId: "G-16G25N8E6E",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage();
export { auth, db, storage };
