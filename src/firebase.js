// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCFFBq3AECQIKGIsRKeqOB_XDNymuztlNo',
    authDomain: 'react-todo-5b6fc.firebaseapp.com',
    projectId: 'react-todo-5b6fc',
    storageBucket: 'react-todo-5b6fc.appspot.com',
    messagingSenderId: '1007347249650',
    appId: '1:1007347249650:web:de6d441afb15e5cc367b6b',
    measurementId: 'G-1JB4LKPGC8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
