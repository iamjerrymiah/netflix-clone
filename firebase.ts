// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO_Deg2AjIjPLmfn8nv7lrWbzKHafRyT0",
    authDomain: "netflix-clone-eccf9.firebaseapp.com",
    projectId: "netflix-clone-eccf9",
    storageBucket: "netflix-clone-eccf9.appspot.com",
    messagingSenderId: "11720342437",
    appId: "1:11720342437:web:d6e3eb2b2018cb1f30464c"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }