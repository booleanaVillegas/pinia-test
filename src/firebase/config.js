// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvc8ohLylczofPWfJ2o3FAGxvstHVcFIs",
    authDomain: "web-avanzada-2022-2-juliana.firebaseapp.com",
    projectId: "web-avanzada-2022-2-juliana",
  storageBucket: "web-avanzada-2022-2-juliana.appspot.com",
  messagingSenderId: "116158862824",
  appId: "1:116158862824:web:74bf117df7812d9bb6805d",
  measurementId: "G-PCPEJ8YPRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    const authStore = useAuthenticationStore()
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      
      authStore.user = user;
      console.log(authStore.user)

    } else {
        authStore.user = null;
        console.log(authStore.user)
    }
  });


export {auth}