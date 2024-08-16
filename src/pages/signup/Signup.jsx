import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signinup-wrapper">
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
          <form className="signinup-form">
            <h3>Sign Up</h3>

            <input
              type="text"
              name=""
              id=""
              placeholder="Enter A username"
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your password"
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
