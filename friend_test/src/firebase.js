import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  // config
  apiKey: "AIzaSyBtfhPvSNyK9KalHw6pI5bY_4trKeMt-xo",
  authDomain: "friend-test-4c4ab.firebaseapp.com",
  projectId: "friend-test-4c4ab",
  storageBucket: "friend-test-4c4ab.appspot.com",
  messagingSenderId: "954197220277",
  appId: "1:954197220277:web:4424140daa46ffee1757fc",
  measurementId: "G-L23BB4SP86",
};

// 초기화
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
