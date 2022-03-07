import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfELmtFXx4feF9QPT-ynrwyUnI_YNjVCA",
  authDomain: "netflix-e414f.firebaseapp.com",
  projectId: "netflix-e414f",
  storageBucket: "netflix-e414f.appspot.com",
  messagingSenderId: "198827064221",
  appId: "1:198827064221:web:1e4c1d7a1d07adc4650d74",
  measurementId: "G-JDNXNCV2F4"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
