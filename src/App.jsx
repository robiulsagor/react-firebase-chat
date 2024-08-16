import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/chat/Chat";
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate";
import SignIn from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";

function App() {
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
