import { Helmet } from "react-helmet";
import ChatLeft from "../../components/chatLeft/ChatLeft";
import ChatMsg from "../../components/chatMsg/ChatMsg";
import ChatRight from "../../components/chatRight/chatRight";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <Helmet>
        <title>Chat - React Chat </title>
      </Helmet>

      <div className="chat-wrapper">
        <ChatLeft />
        <ChatMsg />
        <ChatRight />
      </div>
    </div>
  );
};

export default Chat;
