import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyACk__MxV6rFUYzCXMUG62G5iUv2xNP4Ec",
  authDomain: "login-a9d57.firebaseapp.com",
  projectId: "login-a9d57",
  storageBucket: "login-a9d57.appspot.com",
  messagingSenderId: "765192092431",
  appId: "1:765192092431:web:81b7cd76d1eed04421dc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit
const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
  event.preventDefault()

//inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href = "page2.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})
