import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCm2sZW9QwavRazTRLuneYXt-N_8bv64nM",
  authDomain: "crown-db-af8b5.firebaseapp.com",
  projectId: "crown-db-af8b5",
  storageBucket: "crown-db-af8b5.appspot.com",
  messagingSenderId: "95596268618",
  appId: "1:95596268618:web:6e86d345d4fa93b200aab3",
  measurementId: "G-FB147RWJ6S",
};
const app = initializeApp(config);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({
  login_hint: "user@example.com",
});

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

// export default firebase;
