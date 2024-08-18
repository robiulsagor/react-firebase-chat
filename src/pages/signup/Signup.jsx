import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { signup } from "../../config/firebase";

const Signup = () => {
  const [userInput, setuserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(userInput.username, userInput.email, userInput.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signinup-wrapper">
      <Helmet>
        <title>Sign Up - React Chat </title>
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
          <form className="signinup-form" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter A username"
              value={userInput.username}
              onChange={(e) =>
                setuserInput({ ...userInput, username: e.target.value })
              }
              required
            />
            <input
              type="text"
              name="email"
              id=""
              placeholder="Enter your email"
              value={userInput.email}
              onChange={(e) =>
                setuserInput({ ...userInput, email: e.target.value })
              }
              required
            />
            <input
              type="text"
              name="password"
              id=""
              placeholder="Enter your password"
              value={userInput.password}
              onChange={(e) =>
                setuserInput({ ...userInput, password: e.target.value })
              }
              required
            />

            <button type="submit">Sign Up</button>

            <div className="terms">
              <input type="checkbox" name="" id="terms" required />
              <label htmlFor="terms">
                Agree to the terms of use and privacy policy
              </label>
            </div>
          </form>

          <p className="signinup-p">
            Already have an account? <Link to={"/"}>Login</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
