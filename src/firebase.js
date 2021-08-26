import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyr5BMNQvBuGNlj2J5e8Uk5M6TW7x2lcM",
  authDomain: "clone-87f42.firebaseapp.com",
  databaseURL: "https://clone-87f42.firebaseio.com",
  projectId: "clone-87f42",
  storageBucket: "clone-87f42.appspot.com",
  messagingSenderId: "133398181384",
  appId: "1:133398181384:web:10e68cb7085a841b57c3bd",
  measurementId: "G-KFGLZP2S22"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };