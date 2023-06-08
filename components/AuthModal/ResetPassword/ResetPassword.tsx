import { useEffect, useState } from "react";
import PinInput from "react-pin-input";
import './ResetPassword.scss'
function ResetPassword() {
  const [showOtp, setShowOtp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPassFields, setShowPassFields] = useState(false);
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
                // onComplete={async (value) => {
                //   const isMatch = bcrypt.compareSync(value, cryptOtp);
                //   setShowLoader(true);

                //   if (isMatch) {
                //     setShowPassFields(true);
                //     setShowOtp(false);
                //     setShowLoader(false);
                //   } else {
                //     setShowLoader(false);
                //     setOtpError("Invalid OTP");
                //   }
                // }}
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
                onClick={async () => {
                  //   setShowLoader(true);
                  setShowOtp(false);

                  //   await passwordOtp(formData).then((res) => {
                  //     setCryptOtp(res.otp);
                  //     setShowLoader(false);
                  //     if (res.status === 200) {
                  //       setShowOtp(true);
                  //     } else {
                  //       setDuplicateError(res.message);
                  //     }
                  //   });
                }}
              >
                Send Again
              </span>
            </div>
          </div>
        </div>
      )}
      <form method="POST" className="ResetPasswordWrapper" onSubmit={() => {}}>
        {!showPassFields && (
          <>
            <div className="ResetPasswordWrapper__row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                onChange={() => {}}
                // value={formData.email}
              />
              {/* {errors.email && (
                <span className="ResetPasswordWrapper__row--error">
                  {errors.email}
                </span>
              )}
              {duplicateError.email && (
                <span className="ResetPasswordWrapper__row--error">
                  {duplicateError.email}
                </span>
              )} */}
            </div>
            <div className="ResetPasswordWrapper__button">
              <button type="submit">Send Otp</button>
            </div>
          </>
        )}

        {showPassFields && (
          <>
            <div className="ResetPasswordWrapper__row">
              <label htmlFor="password">New Password</label>
              <input
                id="password"
                type="password"
                required
                // value={formData.password}
                // onChange={(e) => onChange("password", e)}
              />
            </div>
            <div className="ResetPasswordWrapper__row">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                // value={formData.confirmPassword}
                id="confirmPassword"
                type="password"
                required
                // onChange={(e) => onChange("confirmPassword", e)}
              />
            </div>

            {/* {errors.password && (
              <span className="ResetPasswordWrapper__row--error">
                {errors.password}
              </span>
            )} */}
            {/* {errors.confirmPassword && (
              <span className="ResetPasswordWrapper__row--error">
                {errors.confirmPassword}
              </span>
            )} */}
            {/* {duplicateError.password && (
              <span className="ResetPasswordWrapper__row--error">
                {duplicateError.password}
              </span>
            )} */}
            <div className="ResetPasswordWrapper__button">
              <button type="submit">Change Password</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default ResetPassword;
