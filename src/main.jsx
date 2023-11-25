import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdxiLT0hjuRGn2yiecvdMQxNSmwgbg3b4",
  authDomain: "stecnico-7c7b0.firebaseapp.com",
  projectId: "stecnico-7c7b0",
  storageBucket: "stecnico-7c7b0.appspot.com",
  messagingSenderId: "288809016589",
  appId: "1:288809016589:web:312bbee0ea50b904332444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
