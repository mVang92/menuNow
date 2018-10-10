import firebase from "firebase/app";
import "firebase/auth";

const prodConfig = {
  // firebase
}

const devConfig = {
  // firebase
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