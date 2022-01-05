import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyCaZyn9djMkpBq4nnsJUqXC4omdWJpCz4A",
  authDomain: "firebash-auth.firebaseapp.com",
  databaseURL: "https://firebash-auth-default-rtdb.firebaseio.com",
  projectId: "firebash-auth",
  storageBucket: "firebash-auth.appspot.com",
  messagingSenderId: "979743278178",
  appId: "1:979743278178:web:736711cec2aa98ba77bd3b",
  measurementId: "G-BFQ3P45LE1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const Auth = firebase.auth();

export {db ,Auth};

