import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBh3C11yottdF7XuG2h5762vi4ETz_t2-0",
  authDomain: "pantry-tracker-a7289.firebaseapp.com",
  projectId: "pantry-tracker-a7289",
  storageBucket: "pantry-tracker-a7289.appspot.com",
  messagingSenderId: "619626970274",
  appId: "1:619626970274:web:c48864a5bb69261b566bfb",
  measurementId: "G-CVPKDNFG26"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };