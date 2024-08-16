import ChatLeft from "../../components/chatLeft/ChatLeft";
import ChatMsg from "../../components/chatMsg/ChatMsg";
import ChatRight from "../../components/chatRight/chatRight";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-wrapper">
        <ChatLeft />
        <ChatMsg />
        <ChatRight />
      </div>
    </div>
  );
};

export default Chat;
