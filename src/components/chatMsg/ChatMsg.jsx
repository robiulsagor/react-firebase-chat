import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";
import "./chatMsg.css";

const ChatMsg = () => {
  const { userData, messagesId, chatUser, messages, setMessages } =
    useContext(AppContext);

  const [input, setInput] = useState("");

  const sendMsg = async (e) => {
    try {
      if (input && messagesId) {
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            text: input,
            sId: userData.uid,
            createdAt: new Date(),
          }),
        });

        const userIds = [chatUser.rId, userData.uid];

        userIds.forEach(async (id) => {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists) {
            const userChatData = userChatsSnapshot.data();
          }
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (messagesId) {
      const unsub = onSnapshot(doc(db, "messages", messagesId), (res) => {
        setMessages(res.data().messages.reverse());
        console.log(res.data().messages.reverse());
      });

      return () => unsub();
    }
  }, [messagesId]);

  return chatUser ? (
    <div className="chatMsg">
      <div className="msgTop">
        <div className="userInfo">
          <img className="user_img" src={chatUser?.userData?.avatar} alt="" />
          <h3>
            {chatUser?.userData?.name}
            <img className="dot" src="src/assets/green_dot.png" alt="" />{" "}
          </h3>
        </div>

        <img className="help_img" src="src/assets/help_icon.png" alt="" />
      </div>

      <hr />

      <div className="msg-box">
        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit</p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatem
            laborum ratione veritatis!w
          </p>
          <div>
            <img src="src/assets/profile_alison.png" alt="" />
            <p>1:30 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            asperiores.
          </p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit</p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatem
            laborum ratione veritatis!w
          </p>
          <div>
            <img src="src/assets/profile_alison.png" alt="" />
            <p>1:30 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            asperiores.
          </p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit</p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatem
            laborum ratione veritatis!w
          </p>
          <div>
            <img src="src/assets/profile_alison.png" alt="" />
            <p>1:30 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            asperiores.
          </p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit</p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatem
            laborum ratione veritatis!w
          </p>
          <div>
            <img src="src/assets/profile_alison.png" alt="" />
            <p>1:30 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            asperiores.
          </p>
          <div>
            <img src="src/assets/profile_martin.png" alt="" />
            <p>1:32 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message"
        />

        <input type="file" name="" id="file" accept="image/*" hidden />
        <label className="img" htmlFor="file">
          <img src="src/assets/gallery_icon.png" alt="" />
        </label>
        <img className="img" src="src/assets/send_button.png" alt="" />
      </div>
    </div>
  ) : (
    <div className="chat-welcome">
      <img src="logo_icon.png" alt="" />
      <p>Chat anytime, anywhere!</p>
    </div>
  );
};

export default ChatMsg;
