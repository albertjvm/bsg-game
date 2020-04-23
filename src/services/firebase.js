import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDC7xapx30WagwaGvaDgNXKEYVSca8CR9U",
  authDomain: "bsg-game-499f3.firebaseapp.com",
  databaseURL: "https://bsg-game-499f3.firebaseio.com",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
