import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC8IdYCCehIP6eQxmq1shP-Jf0WJtCFBuM",
  authDomain: "project-jimmie.firebaseapp.com",
  databaseURL: "https://project-jimmie-default-rtdb.firebaseio.com",
  projectId: "project-jimmie",
  storageBucket: "project-jimmie.appspot.com",
  messagingSenderId: "728445972179",
  appId: "1:728445972179:web:27c5304d9506539adfae26",
  measurementId: "G-685N6HH0SD"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
