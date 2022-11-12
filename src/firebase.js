// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDvlm4GcaR87GUdXWuLsLM26BvGOc6eKNU",
    authDomain: "dry-run-fd7e9.firebaseapp.com",
    projectId: "dry-run-fd7e9",
    storageBucket: "dry-run-fd7e9.appspot.com",
    messagingSenderId: "59237158001",
    appId: "1:59237158001:web:311735c159a646c07a1fd0",
    measurementId: "G-19XMWQYND7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}