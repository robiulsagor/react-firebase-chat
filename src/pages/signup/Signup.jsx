import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signinup-wrapper">
      <div className="signinup-container">
        <div>
          <img src="./logo_icon.png" alt="" />
          <h2>Chat App</h2>
        </div>
        <form>
          <h3>Sign Up</h3>

          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />

          <button type="submit">Sign Up</button>

          <div>
            <input type="checkbox" name="" id="" />
            <span>Agree to the terms of use and privacy policy</span>
          </div>

          <p>
            Already have an account? <Link to={"/"}></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
