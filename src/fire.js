import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCxDSf6A9aNh1gM754k-MUUGNmRT_uW7SY",
    authDomain: "kavia-33b92.firebaseapp.com",
    databaseURL: "https://kavia-33b92-default-rtdb.firebaseio.com",
    projectId: "kavia-33b92",
    storageBucket: "kavia-33b92.appspot.com",
    messagingSenderId: "235251404157",
    appId: "1:235251404157:web:50f178a537f41f62ebd014",
    measurementId: "G-YQCLFESRQ3"
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;