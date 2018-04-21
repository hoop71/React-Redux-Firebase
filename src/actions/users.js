import { usersRef } from "../firebase";

export const addUser = user => {
  return {
    type: "ADD_USER",
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

export const startListeningForUsers = () => {
  return dispatch => {
    usersRef.on("child_added", snapshot => {
      dispatch(addUser(snapshot.val()));
    });
  };
};
