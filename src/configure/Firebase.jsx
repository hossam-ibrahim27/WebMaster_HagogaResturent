// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8kitW5GZbZ_-yip_5YJ6pLkSFEF5xJBg",
    authDomain: "hagogaresturent-1fb5b.firebaseapp.com",
    projectId: "hagogaresturent-1fb5b",
    storageBucket: "hagogaresturent-1fb5b.firebasestorage.app",
    messagingSenderId: "296421792039",
    appId: "1:296421792039:web:0af6ddf7572e422baef102",
    measurementId: "G-3DDVJK4LLB"
};

//* Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
