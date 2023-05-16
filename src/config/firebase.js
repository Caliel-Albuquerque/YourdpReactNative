import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    // Adicione aqui suas configurações do Firebase, obtidas no console do Firebase.
    apiKey: "AIzaSyCwa51_GQkIONbIf4HCD0XxPFRc_2AaXSI",
    authDomain: "yourdp-6ec52.firebaseapp.com",
    projectId: "yourdp-6ec52",
    storageBucket: "yourdp-6ec52.appspot.com",
    messagingSenderId: "596603056420",
    appId: "1:596603056420:web:08f0a15a7244f6351703b1",
    measurementId: "G-5WMHFNSE6T"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig;