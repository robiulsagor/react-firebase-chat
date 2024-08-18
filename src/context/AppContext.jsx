/* eslint-disable react/prop-types */
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { createContext, useState } from "react";
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
