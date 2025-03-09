// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT24C_v_DqpOnCaQY89DS-4DezVMBCr4Q",
  authDomain: "entrega-2-react--jeredairlines.firebaseapp.com",
  projectId: "entrega-2-react--jeredairlines",
  databaseURL: "https://entrega-2-react--jeredairlines-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "entrega-2-react--jeredairlines.firebasestorage.app",
  messagingSenderId: "78453726728",
  appId: "1:78453726728:web:0307223c7af29b57edfbbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;