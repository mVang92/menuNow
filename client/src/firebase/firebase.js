import firebase from "firebase/app";
import "firebase/auth";

const prodConfig = {
  apiKey: "AIzaSyBogHFmEXhICrvzySzkGjPf0PpMWnrt2uc",
  authDomain: "project-3-c22e9.firebaseapp.com",
  databaseURL: "https://project-3-c22e9.firebaseio.com",
  projectId: "project-3-c22e9",
  storageBucket: "project-3-c22e9.appspot.com",
  messagingSenderId: "645556258073"
}

const devConfig = {
  apiKey: "AIzaSyBogHFmEXhICrvzySzkGjPf0PpMWnrt2uc",
    authDomain: "project-3-c22e9.firebaseapp.com",
    databaseURL: "https://project-3-c22e9.firebaseio.com",
    projectId: "project-3-c22e9",
    storageBucket: "project-3-c22e9.appspot.com",
    messagingSenderId: "645556258073"
}

const config = process.env.NODE_ENV === "production"
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};