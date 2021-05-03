import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEl2SFItM6O0JJxpissVpNdbE_RWJai8c",
    authDomain: "johnstonfinal.firebaseapp.com",
    projectId: "johnstonfinal",
    storageBucket: "johnstonfinal.appspot.com",
    messagingSenderId: "667954585441",
    appId: "1:667954585441:web:7304824c9bb6231540ef20"
};
    // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;