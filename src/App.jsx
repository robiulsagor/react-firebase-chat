/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { auth } from "./config/firebase";
import { AppContext } from "./context/AppContext";
import Chat from "./pages/chat/Chat";
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate";
import SignIn from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";

function App() {
  const navigate = useNavigate();
  // const location = useLocation();
  const { loadUserData } = useContext(AppContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/");
      } else {
        await loadUserData(user);
        // if (location.pathname === "/" || location.pathname === "/register") {
        //   navigate("/chat");
        // }
      }
    });
  }, []);

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/update" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
}

export default App;
