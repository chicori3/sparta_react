import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  // config
  apiKey: "AIzaSyBXLd8K0RPmkS5QLXd7vCLC6fnxqjbvrWE",
  authDomain: "react-bucketlist.firebaseapp.com",
  projectId: "react-bucketlist",
  storageBucket: "react-bucketlist.appspot.com",
  messagingSenderId: "550681768446",
  appId: "1:550681768446:web:5d3c17e86307c3f1f190af",
  measurementId: "G-XK4MQ7GF1L",
};

// 초기화
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
