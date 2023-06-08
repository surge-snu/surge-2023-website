import { useState } from "react";
import "./Login.scss";

function Login() {
  return (
    <>

      <form method="POST" className="LogIn" onSubmit={() => {}}>
        <div className="LogIn__row">
          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            type="email"
            required
          />
          {/* {errors.email && (
            <span className="LogIn__row--error">{errors.email}</span>
          )} */}
        </div>
        <div className="LogIn__row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
          />
          {/* {errors.password && (
            <span className="LogIn__row--error">{errors.password}</span>
          )}
          {authError.message && (
            <span className="LogIn__row--error">{authError.message}</span>
          )} */}
        </div>
        {/* <div className="LogIn__forgotPassword">
            <a href="#">Forgot Password?</a>
          </div> */}
        <div className="LogIn__button">
          <button type="submit">Log In</button>
        </div>
        <div className="LogIn__signup">
          <div className="LogIn__signup--text">Don't have an account?</div>
          <a href="#signup">SignUp</a>
        </div>
      </form>
    </>
  );
}

export default Login;
