import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "****",
    authDomain: "****",
    databaseURL: "****",
    projectId: "****",
    storageBucket: "****",
    messagingSenderId: "****"
  };

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();

export const functions = firebase.functions();

export default { app, auth, storage };