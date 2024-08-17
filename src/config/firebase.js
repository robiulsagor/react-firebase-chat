import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDtmx9f2zrSvuKJppmYnXMI1uoWleVTm1Y",
  authDomain: "chat-app-566da.firebaseapp.com",
  projectId: "chat-app-566da",
  storageBucket: "chat-app-566da.appspot.com",
  messagingSenderId: "795350590409",
  appId: "1:795350590409:web:963d2a203dd3a0d0e17e18",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email: email,
      name: "",
      bio: "",
      avatar: "Hi, I'm using chat app",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
    toast.success("Registration successfull!");
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successfull!");
    return true;
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
    return false;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logout successfull!");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

export { app, auth, login, logout, signup };
