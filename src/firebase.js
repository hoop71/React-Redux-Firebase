import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBF7GCoUSa8BcDTE3yIqfgZWsW_s6GwPN8",
  authDomain: "fcreact888.firebaseapp.com",
  databaseURL: "https://fcreact888.firebaseio.com",
  projectId: "fcreact888",
  storageBucket: "fcreact888.appspot.com",
  messagingSenderId: "666473387630"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database().ref("hot-takes/");
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const usersRef = database.child("users/");
