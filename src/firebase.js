import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var config = {
    apiKey: "AIzaSyATQuZdeswoWCv3hbXhIP3YVnfP4GJkTvs",
    authDomain: "react-slack-clone-a40a4.firebaseapp.com",
    databaseURL: "https://react-slack-clone-a40a4.firebaseio.com",
    projectId: "react-slack-clone-a40a4",
    storageBucket: "react-slack-clone-a40a4.appspot.com",
    messagingSenderId: "804617488790",
    appId: "1:804617488790:web:d337490270d290ee2ab5b7"
};

firebase.initializeApp(config);

export default firebase;