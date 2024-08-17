import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { auth } from "./config/firebase";
import Chat from "./pages/chat/Chat";
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate";
import SignIn from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        if (location.pathname === "/" || location.pathname === "/register") {
          navigate("/chat");
        }
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/update" element={<ProfileUpdate />} />
    </Routes>
  );
}

export default App;
