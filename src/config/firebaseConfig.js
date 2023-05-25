import { firebase } from '@react-native-firebase/auth';
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCwa51_GQkIONbIf4HCD0XxPFRc_2AaXSI",
    authDomain: "yourdp-6ec52.firebaseapp.com",
    projectId: "yourdp-6ec52",
    storageBucket: "yourdp-6ec52.appspot.com",
    messagingSenderId: "596603056420",
    appId: "1:596603056420:web:08f0a15a7244f6351703b1",
    measurementId: "G-5WMHFNSE6T"
};


let app; 

if(firebase.apps.length === 0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth }