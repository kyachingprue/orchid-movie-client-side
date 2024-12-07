// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTry6yvGS6eG_0_LPGR71CHWzb53AhIHI',
  authDomain: 'orchid-movie-64122.firebaseapp.com',
  projectId: 'orchid-movie-64122',
  storageBucket: 'orchid-movie-64122.firebasestorage.app',
  messagingSenderId: '1051105444982',
  appId: '1:1051105444982:web:be9b7cccf4a89dcfe78b57',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
