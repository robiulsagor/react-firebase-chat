import { useState } from "react";
import "./profile.css";

const ProfileUpdate = () => {
  const [img, setImg] = useState(null);

  return (
    <div className="p-wrapper">
      <div className="p-container">
        <div className="p-main">
          <form className="p-left">
            <h3>Update Profile</h3>

            <input
              type="file"
              name=""
              id="file"
              hidden
              onChange={(e) => setImg(e.target.files[0])}
            />
            <label htmlFor="file">
              <img
                src={
                  img ? URL.createObjectURL(img) : "src/assets/avatar_icon.png"
                }
                alt=""
              />
              Upload Profile Picture
            </label>

            <input type="text" name="" id="" placeholder="Name" />
            <textarea name="" id="" placeholder="Bio" rows={3}></textarea>
            <button type="submit">Save</button>
          </form>
          <div className="p-right">
            <img
              src={
                img ? URL.createObjectURL(img) : "src/assets/avatar_icon.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
