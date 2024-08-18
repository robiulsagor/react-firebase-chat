/* eslint-disable react/prop-types */
import { doc, getDoc, onSnapshot, updateDoc } from "@firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userChat, setUserChat] = useState({});
  const navigate = useNavigate();

  const loadUserData = async (data) => {
    try {
      const userRef = doc(db, "users", data.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      setUserData(userData);

      if (userData.name && userData.avatar) {
        navigate("/chat");
      } else {
        navigate("/update");
      }

      await updateDoc(userRef, { lastSeen: Date.now() });

      setTimeout(async () => {
        if (auth.chatUser) {
          await updateDoc(userRef, { lastSeen: Date.now() });
        }
      }, 60000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // onAuthStateChanged(auth, async (user) => {
    if (Object.keys(userData).length > 0) {
      const chatRef = doc(db, "chats", userData.id);
      const unsub = onSnapshot(chatRef, async (res) => {
        const chatItems = res.data().chatData;
        const tempData = [];
        for (const item of chatItems) {
          const userRef = doc(db, "users", item.rId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          tempData.push({ ...item, ...userData });
        }
        setUserChat(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
      });
      return () => unsub();
    }
  }, [userData]);

  const value = {
    userData,
    setUserData,
    userChat,
    setUserChat,
    loadUserData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
