import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
  return (
    <motion.div className="signinup-wrapper">
      <div className="signinup-container">
        <div className="signinup-logo-container">
          <img className="signinup_logo" src="./logo_icon.png" alt="" />
          <h2>Chat App</h2>
        </div>

        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: "30%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="signinup-form">
            <h3>Sign In</h3>

            <input type="text" name="" id="" placeholder="Enter your email" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your password"
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
