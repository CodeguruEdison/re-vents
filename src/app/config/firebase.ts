import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
//https://medium.com/@impaachu/how-to-secure-your-firebase-project-even-when-your-api-key-is-publicly-available-a462a2a58843
const firebaseDevConfig = {
    apiKey: "AIzaSyBi4l9SiL2c42sOBuW3IaERzsQxqj17mDA",
    authDomain: "revent-53d60.firebaseapp.com",
    databaseURL: "https://revent-53d60.firebaseio.com",
    projectId: "revent-53d60",
    storageBucket: "revent-53d60.appspot.com",
    messagingSenderId: "536611841028",
    appId: "1:536611841028:web:4d1fbe882f9a30a2640151",
    measurementId: "G-7H77REJ6WH"
  };
 const  firebaseProdConfig = {
    apiKey: "AIzaSyBi4l9SiL2c42sOBuW3IaERzsQxqj17mDA",
    authDomain: "revent-53d60.firebaseapp.com",
    databaseURL: "https://revent-53d60.firebaseio.com",
    projectId: "revent-53d60",
    storageBucket: "revent-53d60.appspot.com",
    messagingSenderId: "536611841028",
    appId: "1:536611841028:web:4d1fbe882f9a30a2640151",
    measurementId: "G-7H77REJ6WH"
 }
 const config = process.env.NODE_ENV === 'production' ? firebaseProdConfig : firebaseDevConfig;

 if(!firebase.apps.length){
     firebase.initializeApp(config);
     firebase.firestore()
 }
 export default firebase;