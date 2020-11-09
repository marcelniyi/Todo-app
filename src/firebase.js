import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA8lob9tDW6aW-xwxQQWq8h4fztPRbZy1Q",
  authDomain: "maxradio-73510.firebaseapp.com",
  databaseURL: "https://maxradio-73510.firebaseio.com",
  projectId: "maxradio-73510",
  storageBucket: "maxradio-73510.appspot.com",
  messagingSenderId: "24502352094",
  appId: "1:24502352094:web:aaf19715b7a87cd0c62a4f"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
