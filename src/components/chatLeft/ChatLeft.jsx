import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./chatLeft.css";

const ChatLeft = () => {
  const [showMenu, setShowMenu] = useState(false);
  const chatMenuRef = useRef(null);

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
      <div className="cl-search">
        <img
          className="cl-search-icon"
          src="src/assets/search_icon.png"
          alt=""
        />
        <input
          className="cl-search-input"
          type="text"
          name=""
          id=""
          placeholder="Search friends"
          required
        />
      </div>

      <div className="msg-user-list">
        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>
        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>
        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>
        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>
        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>

        <div className="msg-user">
          <img
            className="msg-user-img"
            src="src/assets/profile_enrique.png"
            alt=""
          />
          <div className="msg-user-details">
            <h3>Enrique</h3>
            <span>Hi sagor</span>
          </div>
        </div>
      </div>

      <div className="logout-btn-container">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default ChatLeft;
