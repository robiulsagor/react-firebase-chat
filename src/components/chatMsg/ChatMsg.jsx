import "./chatMsg.css";

const ChatMsg = () => {
  return (
    <div className="chatMsg">
      <div className="msgTop">
        <div className="userInfo">
          <img
            className="user_img"
            src="src/assets/profile_martin.png"
            alt=""
          />
          <h3>
            Robiul Islam Sagar{" "}
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
        <input type="text" name="" id="" placeholder="Enter your message" />

        <input type="file" name="" id="file" accept="image/*" hidden />
        <label className="img" htmlFor="file">
          <img src="src/assets/gallery_icon.png" alt="" />
        </label>
        <img className="img" src="src/assets/send_button.png" alt="" />
      </div>
    </div>
  );
};

export default ChatMsg;
