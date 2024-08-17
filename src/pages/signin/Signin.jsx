import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login(userData.email, userData.password);
      if (res) {
        navigate("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div className="signinup-wrapper">
      <Helmet>
        <title>Sign In - React Chat </title>
      </Helmet>
      <div className="signinup-container">
        <motion.div className="signinup-logo-container">
          <img className="signinup_logo" src="./logo_icon.png" alt="" />
          <h2>Chat App</h2>
        </motion.div>

        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: "40%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="signinup-form" onSubmit={handleLogin}>
            <h3>Sign In</h3>

            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="Enter your password"
              required
            />

            <button type="submit">Sign In</button>

            <div className="terms">
              <input type="checkbox" name="" id="terms" required />
              <label htmlFor="terms">
                Agree to the terms of use and privacy policy
              </label>
            </div>
          </form>

          <p className="signinup-p">
            Don&apos;t have an account? <Link to={"/register"}>Create one</Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignIn;
