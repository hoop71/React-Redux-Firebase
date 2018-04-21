import { auth, googleAuthProvider, usersRef } from "../firebase";

const signedIn = user => {
  return {
    type: "SIGN_IN",
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

const signedOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const signIn = () => {
  return dispatch => {
    dispatch({ type: "ATTEMPTING_LOGIN" });
    auth.signInWithPopup(googleAuthProvider);
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({ type: "ATTEMPTING_LOGIN" });
    auth.signOut();
  };
};

export const startListeningToAuthChanges = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(signedIn(user));
        const userData = {
          uid: user.uid,
          photoURL: user.photoURL,
          email: user.email,
          displayName: user.displayName
        };
        usersRef.child(user.uid).set(userData);
      } else {
        dispatch(signedOut());
      }
    });
  };
};
