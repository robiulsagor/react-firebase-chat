import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "@firebase/firestore";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db, logout } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";
import "./chatLeft.css";

const ChatLeft = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const chatMenuRef = useRef(null);
  const {
    userData,
    userChat,
    messagesId,
    setMessagesId,
    chatUser,
    setChatUser,
  } = useContext(AppContext);

  const handleClickOutside = (event) => {
    if (chatMenuRef.current && !chatMenuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const inputHandler = async (e) => {
    try {
      const input = e.target.value;

      if (input) {
        setShowSearch(true);

        const userRef = collection(db, "users");
        const q = query(userRef, where("username", "==", input.toLowerCase()));
        const querySnap = await getDocs(q);

        if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id) {
          let userExits = false;
          userChat.map((user) => {
            if (user.rId === querySnap.docs[0].data().id) {
              userExits = true;
            }
          });

          if (!userExits) {
            setUser(querySnap.docs[0].data());
          }
        } else {
          setUser(null); // if no user matched
        }
      } else {
        setShowSearch(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const addChat = async () => {
    const messagesRef = collection(db, "messages");
    const chatRef = collection(db, "chats");
    try {
      const newMessageRef = doc(messagesRef);
      await setDoc(newMessageRef, {
        createAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(chatRef, user.id), {
        chatData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: userData.id,
          updatedAt: Date.now(),
          messageSeen: true,
        }),
      });

      await updateDoc(doc(chatRef, userData.id), {
        chatData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: user.id,
          updatedAt: Date.now(),
          messageSeen: true,
        }),
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const setChat = async (item) => {
    setChatUser(item);
    setMessagesId(item.messageId);
  };

  return (
    <div className="chat-left" ref={chatMenuRef}>
      <div className="cl-top">
        <img className="cl-logo-icon" src="logo.png" alt="" />
        <motion.img
          onClick={() => setShowMenu((prev) => !prev)}
          whileTap={{ scale: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="cl-menu-icon"
          src="src/assets/menu_icon.png"
          alt=""
        />
        {showMenu && (
          <div className="menu-dropdown">
            <Link className="" to={"/update"}>
              Edit Profile
            </Link>
          </div>
        )}
      </div>
      {/* top menu ends here */}

      <div className="cl-search">
        <img
          className="cl-search-icon"
          src="src/assets/search_icon.png"
          alt=""
        />
        <input
          className="cl-search-input"
          type="text"
          name="search"
          onChange={inputHandler}
          placeholder="Search friends"
          required
        />
      </div>
      {/* search input ends here */}

      <div className="msg-user-list">
        {showSearch && user ? (
          <div className="msg-user" onClick={addChat}>
            <img className="msg-user-img" src={user?.avatar} alt="" />
            <div className="msg-user-details">
              <h3>{user.username}</h3>
            </div>
          </div>
        ) : (
          userChat.length > 0 &&
          userChat.map((item, index) => (
            <div className="msg-user" key={index} onClick={() => setChat(item)}>
              <img
                className="msg-user-img"
                src={item?.userData?.avatar}
                alt=""
              />
              <div className="msg-user-details">
                <h3>{item?.userData?.name}</h3>
                <span>{item?.lastMessage}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="logout-btn-container">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ChatLeft;
