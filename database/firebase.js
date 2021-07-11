// Add the Firebase products that you want to use
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDn7ROhvI08vroy27VIVq9YX6VeuA4fGGQ",
  authDomain: "ehr-firebase.firebaseapp.com",
  projectId: "ehr-firebase",
  storageBucket: "ehr-firebase.appspot.com",
  messagingSenderId: "99898866982",
  appId: "1:99898866982:web:071858ec438b860c7815e7",
  measurementId: "G-6NLJ7V1YTF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
