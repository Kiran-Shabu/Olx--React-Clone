import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDDRwlvNJGYPtkkyT8lt--5K2WENrVvsmY",
  authDomain: "olx-clone-5a71d.firebaseapp.com",
  projectId: "olx-clone-5a71d",
  storageBucket: "olx-clone-5a71d.appspot.com",
  messagingSenderId: "758812926292",
  appId: "1:758812926292:web:cd19a6ea34230286bd68c1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;