import firebase from "firebase"; 


const firebaseConfig = {
    apiKey: "AIzaSyDGPYGldZIbE2gkif9bo6qzQD55MUc2KHY",
    authDomain: "gbreactlearn.firebaseapp.com",
    databaseURL:
      "https://gbreactlearn-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gbreactlearn",
    storageBucket: "gbreactlearn.appspot.com",
    messagingSenderId: "344274642794",
    appId: "1:344274642794:web:d8a1349c3cbad4ac5fa713"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.database();
  export const profileRef = db.ref('profile');
  export const chatsRef = db.ref('chats');
  export const messagesRef = db.ref('messages');

  