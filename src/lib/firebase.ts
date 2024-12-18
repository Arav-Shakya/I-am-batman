// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { User } from "./types";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCfyoYMGLrV07Yz7j0evPeYMh22AOzx24",
    authDomain: "fir-proj-template-dev.firebaseapp.com",
    projectId: "fir-proj-template-dev",
    storageBucket: "fir-proj-template-dev.firebasestorage.app",
    messagingSenderId: "960591258353",
    appId: "1:960591258353:web:2bd73e90e5b03d0c35ff50"
  };

let firebaseApp: FirebaseApp;

// Initialize Firebase
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApps()[0];
}

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Function to add data to Firestore
const addData = async (collectionName: string, data: Record<string, unknown>) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
};

// Function to read data from Firestore
const readData = async (collectionName: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Data read from Firestore: ", data);
        return data;
    } catch (e) {
        console.error("Error reading document: ", e);
        throw e;
    }
};

const addUserToList = async (user: User) => {
    try {
        const userRef = doc(db, "User_List", user.email);
        await setDoc(userRef, user);
        console.log("User added to User_List with ID: ", user.email);
        return user.email;
    } catch (e) {
        console.error("Error adding user to User_List: ", e);
        throw e;
    }
};

const checkUserExists = async (email: string) => {
    try {
        const userRef = doc(db, "User_List", email);
        const docSnap = await getDoc(userRef);
        return docSnap.exists();
    } catch (e) {
        console.error("Error checking user existence: ", e);
        throw e;
    }
};


export { db, addData, readData, addUserToList, checkUserExists };
export default firebaseApp;
