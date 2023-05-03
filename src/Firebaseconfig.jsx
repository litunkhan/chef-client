
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {

// apiKey: import.meta.env.VITE_apiKey,
// authDomain: import.meta.env.VITE_authDomain,
// projectId: import.meta.env.VITE_projectId,
// storageBucket: import.meta.env.VITE_storageBucket,
// messagingSenderId: import.meta.env.VITE_messagingSenderId,
// appId: import.meta.env.VITE_appId,


  // apiKey: "AIzaSyAvG1h_LS2SxxenzTJSBXa8ZwchR9ERt20",
  // authDomain: "chefs-b8fe3.firebaseapp.com",
  // projectId: "chefs-b8fe3",
  // storageBucket: "chefs-b8fe3.appspot.com",
  // messagingSenderId: "759204404480",
  // appId: "1:759204404480:web:9860babb393dd4f5bea7e5"




// };


// const app = initializeApp(firebaseConfig);
// export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAvG1h_LS2SxxenzTJSBXa8ZwchR9ERt20",
  authDomain: "chefs-b8fe3.firebaseapp.com",
  projectId: "chefs-b8fe3",
  storageBucket: "chefs-b8fe3.appspot.com",
  messagingSenderId: "759204404480",
  appId: "1:759204404480:web:9860babb393dd4f5bea7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app