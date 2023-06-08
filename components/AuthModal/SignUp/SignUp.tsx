import "./SignUp.scss";
import { useEffect, useState } from "react";
import PinInput from "react-pin-input";

function SignUp() {
  const [showOtp, setShowOtp] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <>
      {showOtp && (
        <div className="Otp">
          <div className="Otp__container">
            <span
              className="Otp__close"
              onClick={() => {
                setShowOtp(false);
              }}
            >
              &#10799;
            </span>
            <div className="Otp__title">
              <p>Verification Code</p>
            </div>
            <div className="Otp__desc">
              <p>Please type the verification code sent to email</p>
              <em>(Also check your spam folder)</em>
            </div>
            <div className="Otp__pin">
              <PinInput
                length={5}
                type="custom"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "7px",
                }}
                inputStyle={{
                  margin: "0",
                  color: "black",
                  border: "1px solid",
                  width: isMobile ? "30px" : "50px",
                  height: isMobile ? "30px" : "50px",
                  fontSize: isMobile ? "15px" : "20px",
                  borderRadius: isMobile ? "4px" : "7px",
                }}
                inputFocusStyle={{
                  border: "2px solid",
                }}
                onComplete={() => {}}
                autoSelect={true}
                validate={(value) => (/^[a-z0-9]*$/.test(value) ? value : "")}
              />
            </div>
            {/* {otpError !== "" && <span className="Otp__error">{otpError}</span>} */}
            <div className="Otp__again">
              <div className="Otp__again--text">
                <p>Didn't get the code? &nbsp;</p>
              </div>
              <span
                onClick={() => {}}
              >
                Send Again
              </span>
            </div>
          </div>
        </div>
      )}
      <form method="POST" className="SignUp" onSubmit={() => {}}>
        <div className="SignUp__row">
          <label htmlFor="friendlyName">Name</label>
          <input
            id="friendlyName"
            type="text"
            required
            // onChange={(e) => onChange("friendlyName", e)}
          />
          {/* {errors.friendlyName && (
            <span className="SignUp__row--error">{errors.friendlyName}</span>
          )}
          {duplicateError.name && (
            <span className="SignUp__row--error">{duplicateError.name}</span>
          )} */}
        </div>
        <div className="SignUp__row">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            required
            // onChange={(e) => onChange("phone", e)}
          />
          {/* {errors.phone && (
            <span className="SignUp__row--error">{errors.phone}</span>
          )}
          {duplicateError.phone && (
            <span className="SignUp__row--error">{duplicateError.phone}</span>
          )} */}
        </div>
        <div className="SignUp__row">
          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            type="email"
            required
            // onChange={(e) => onChange("email", e)}
          />
          {/* {errors.email && (
            <span className="SignUp__row--error">{errors.email}</span>
          )}
          {duplicateError.email && (
            <span className="SignUp__row--error">{duplicateError.email}</span>
          )} */}
        </div>
        <div className="SignUp__col">
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
            //   onChange={(e) => onChange("password", e)}
            />
          </div>
          <div className="SignUp__col--confirm">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
            //   onChange={(e) => onChange("confirmPassword", e)}
            />
          </div>
        </div>
        {/* {errors.password && (
          <span className="SignUp__row--error">{errors.password}</span>
        )}
        {errors.confirmPassword && (
          <span className="SignUp__row--error">{errors.confirmPassword}</span>
        )}
        {duplicateError.password && (
          <span className="SignUp__row--error">{duplicateError.password}</span>
        )} */}
        <div className="SignUp__bottom">
          <div className="SignUp__bottom--signedIn">
            <input
              type="checkbox"
              id="tandc"
              name="tandc"
              value="tandc"
              required
            />
            <label htmlFor="tandc">
              I agree to the{" "}
              <a href="/terms" target="_blank" referrerPolicy="no-referrer">
                Terms and Privacy Policy
              </a>
            </label>
          </div>
        </div>
        <div className="SignUp__buttonRow">
          <button type="submit">Sign Up</button>
        </div>
        <div className="SignUp__login">
          <div className="SignUp__login--text">Already have an account?</div>
          <a href="#login">LogIn</a>
        </div>
      </form>
    </>
  );
}

export default SignUp;
