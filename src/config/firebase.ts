import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBjZJntFuJFUGTxtm7AqdafRzWZLP1vAJU",
  authDomain: "insight-9d769.firebaseapp.com",
  projectId: "insight-9d769",
  storageBucket: "insight-9d769.appspot.com",
  messagingSenderId: "462546024968",
  appId: "1:462546024968:web:7765788f16372db8f0afbd",
  measurementId: "G-CCGFFLYJFM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
