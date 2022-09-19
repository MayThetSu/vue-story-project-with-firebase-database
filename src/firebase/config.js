import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhohZDj6rJoFwEXNZglbu0tbWRavnXq4k",
    authDomain: "vue-projects-67ee7.firebaseapp.com",
    projectId: "vue-projects-67ee7",
    storageBucket: "vue-projects-67ee7.appspot.com",
    messagingSenderId: "845047460127",
    appId: "1:845047460127:web:f1383856dc4cf2e3ec002a"
  };

firebase.initializeApp(firebaseConfig)

let db=firebase.firestore()
let timestamp=firebase.firestore.FieldValue.serverTimestamp

export {db,timestamp};