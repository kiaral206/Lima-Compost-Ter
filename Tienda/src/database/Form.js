// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCpQmNryDFjBwjSDPYX-i0XK5zXC2UskWs",
  authDomain: "kayfuture-6a6e6.firebaseapp.com",
  projectId: "kayfuture-6a6e6",
  storageBucket: "kayfuture-6a6e6.appspot.com",
  messagingSenderId: "782229770214",
  appId: "1:782229770214:web:113e637e99cb0347691027",
  measurementId: "G-BY4XH5PXLS"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  
 export const auth = getAuth(app);
 
 //CREMOS UNA INSTANCIA DE FIRESTORE
 const database = getFirestore(app);


 //VEAMOS LA CRUD →  CREATE - READ - 
 //CREATE
 export const createTask  = objeto => addDoc(collection(database,"Datos"),objeto);  
 //READ
 export const readTasks = () => getDocs(collection(database,"Datos"));

 