import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDko6fOscLMipVvtx0_EpxOx8uLQvUXNl4",
  authDomain: "sheyjobs-lite-udemy.firebaseapp.com",
  projectId: "sheyjobs-lite-udemy",
  storageBucket: "sheyjobs-lite-udemy.appspot.com",
  messagingSenderId: "306570130580",
  appId: "1:306570130580:web:bb3ff9285a77aa2e79b081",
  measurementId: "G-7RLKYK1CFS",
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
