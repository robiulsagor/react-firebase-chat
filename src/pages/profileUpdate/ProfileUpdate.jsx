import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";
import upload from "../../lib/upload";
import "./profile.css";

const ProfileUpdate = () => {
  const [userInput, setUserInput] = useState({
    img: null,
    uid: "",
    name: "",
    bio: "",
  });

  const [prevImg, setPrevImg] = useState(null);

  const navigate = useNavigate();
  const { setUserData } = useContext(AppContext);

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      if (!prevImg && !userInput.img) {
        toast.error("Please select an image!");
      }

      const docRef = doc(db, "users", userInput.uid);
      if (userInput.img) {
        const imgUrl = await upload(userInput.img);
        setPrevImg(imgUrl);

        await updateDoc(docRef, {
          name: userInput.name,
          bio: userInput.bio,
          avatar: imgUrl,
        });
      } else {
        await updateDoc(docRef, {
          name: userInput.name,
          bio: userInput.bio,
        });
      }

      const snap = await getDoc(docRef);
      setUserData(snap.data());
      toast.success("Profile Updated");
      navigate("/chat");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserInput({ ...userInput, uid: user.uid });
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.data().name) {
          setUserInput((prevInput) => ({
            ...prevInput,
            name: docSnap.data().name,
          }));
        }
        if (docSnap.data().bio) {
          setUserInput((prevInput) => ({
            ...prevInput,
            bio: docSnap.data().bio,
          }));
        }
        if (docSnap.data().avatar) {
          setPrevImg(docSnap.data().avatar);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="p-wrapper">
      <Helmet>
        <title>Update Profile - React Chat </title>
      </Helmet>
      <div className="p-container">
        <div className="p-main">
          <form className="p-left" onSubmit={updateProfile}>
            <h3>Update Profile</h3>

            <input
              type="file"
              id="file"
              hidden
              onChange={(e) =>
                setUserInput({ ...userInput, img: e.target.files[0] })
              }
            />
            <label htmlFor="file">
              <img
                src={
                  userInput.img
                    ? URL.createObjectURL(userInput.img)
                    : "src/assets/avatar_icon.png"
                }
                alt=""
              />
              Upload Profile Picture
            </label>

            <input
              type="text"
              name="name"
              value={userInput.name}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              placeholder="Name"
            />
            <textarea
              name="bio"
              value={userInput.bio}
              onChange={(e) =>
                setUserInput({ ...userInput, bio: e.target.value })
              }
              placeholder="Bio"
              rows={3}
            ></textarea>
            <button type="submit">Save</button>
          </form>
          <div className="p-right">
            <img
              src={
                userInput.img
                  ? URL.createObjectURL(userInput.img)
                  : prevImg
                  ? prevImg
                  : "logo_icon.png"
              }
              alt="Missing img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
