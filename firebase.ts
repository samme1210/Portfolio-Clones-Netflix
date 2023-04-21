// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_DAm3e3crPu3TdGOFUWzEzHTzpcKtMgE",
  authDomain: "profile-clones-netflix.firebaseapp.com",
  projectId: "profile-clones-netflix",
  storageBucket: "profile-clones-netflix.appspot.com",
  messagingSenderId: "602715383827",
  appId: "1:602715383827:web:b08e759df29539498a37e6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }