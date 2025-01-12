// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBA3Sf7kgmfoBWyMVHES09f1dGGtU5_eUA",
  authDomain: "test-fb7dd.firebaseapp.com",
  projectId: "test-fb7dd",
  storageBucket: "test-fb7dd.firebasestorage.app",
  messagingSenderId: "543067771024",
  appId: "1:543067771024:web:c6ca9333c256ba89748815",
  measurementId: "G-GTJGP24MTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app; 

// ``````````````````

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth,GoogleAuthProvider} from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyDIBfWp_Ikz2DkobgTwz4zH-lA6Sk1bv9c",
//   authDomain: "video-ab476.firebaseapp.com",
//   projectId: "video-ab476",
//   storageBucket: "video-ab476.firebasestorage.app",
//   messagingSenderId: "37902784700",
//   appId: "1:37902784700:web:d998d1b06e785e5dc018b9",
//   measurementId: "G-DRRKBL8S7S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();

// export default app; 