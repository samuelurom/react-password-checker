import { useState } from "react";

import "./PasswordChecker.css";
import checkPassword from "../utils/checkPassword";
import show from "../assets/images/show.svg";
import hide from "../assets/images/hide.svg";
import Bar from "./Bar";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const pStrength = checkPassword(password);
  const pFeedbackClass = (condition) => {
    return condition ? "active" : "inactive";
  };
  const pFeedbackIcon = (condition) => {
    return condition ? "✔ " : <small>❌ </small>;
  };

  const handleChange = (e) => {
    const input = e.target;
    setPassword(input.value);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <div className="password-input">
        <input
          type={isShowPassword ? "text" : "password"}
          onChange={handleChange}
          id="password"
          placeholder="Enter your password"
        />
        <button
          className="password-toggle"
          onClick={handleShowPassword}
          name="password-toggle"
        >
          <img
            src={isShowPassword ? hide : show}
            alt={isShowPassword ? "hide password" : "show password"}
          />
        </button>
      </div>
      <Bar percentage={(pStrength.score / 6) * 100} />
      <div className="password-feedback" id="password-feedback">
        <p
          className={pFeedbackClass(pStrength.is8Char || pStrength.isOver8Char)}
        >
          {pFeedbackIcon(pStrength.is8Char || pStrength.isOver8Char)}
          Password must be at least 8 characters long.
        </p>
        <p className={pFeedbackClass(pStrength.hasLowerCase)}>
          {pFeedbackIcon(pStrength.hasLowerCase)}
          Password should include lowercase letters.
        </p>
        <p className={pFeedbackClass(pStrength.hasUpperCase)}>
          {pFeedbackIcon(pStrength.hasUpperCase)}
          Password should include uppercase letters.
        </p>
        <p className={pFeedbackClass(pStrength.hasNumber)}>
          {pFeedbackIcon(pStrength.hasNumber)}
          Password should contain at least one number.
        </p>
        <p className={pFeedbackClass(pStrength.hasNonAlphaNumeric)}>
          {pFeedbackIcon(pStrength.hasNonAlphaNumeric)}
          Password should contain at least one special character.
        </p>
      </div>
    </>
  );
};

export default PasswordChecker;
