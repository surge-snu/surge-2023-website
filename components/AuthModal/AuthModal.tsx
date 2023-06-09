import { useEffect, useState } from "react";
import "./AuthModal.scss";
import { useRouter } from "next/router";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import ResetPassword from "./ResetPassword/ResetPassword";

function AuthModal() {
  const [hash, setHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHash(window.location.hash);

    if (
      window.location.hash === "#login" ||
      window.location.hash === "#signup" ||
      window.location.hash === "#reset-password"
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);

      if (
        window.location.hash === "#login" ||
        window.location.hash === "#signup" ||
        window.location.hash === "#reset-password"
      ) {
        console.log("here");
        setIsOpen(true);
      } else {
        console.log("hello");
        setIsOpen(false);
      }
    });
  });

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="AuthModal">
          <div className="AuthModal__container">
            <span
              className="AuthModal__container--close"
              onClick={() => {
                setIsOpen(false);
                setHash("");
                window.location.hash = "";
                router.replace(window.location.pathname);
              }}
            >
              &#10799;
            </span>
            {/* <h2>SURGE</h2> */}
            <img
              className="AuthModal__logo"
              src="/Images/surgeLogoPC.svg"
              alt="surge logo"
            />
            <div className="AuthModal__tabs">
              <a
                href="#login"
                className={hash === "#login" ? "route--active" : ""}
                onClick={() => {
                  setHash("#login");
                }}
              >
                <p>Login</p>
              </a>
              <a
                href="#signup"
                className={hash === "#signup" ? "route--active" : ""}
                onClick={() => {
                  setHash("#signup");
                }}
              >
                <p>Sign Up</p>
              </a>
              <a
                href="#reset-password"
                className={hash === "#reset-password" ? "route--active" : ""}
                onClick={() => {
                  setHash("#reset-password");
                }}
              >
                <p>Reset password</p>
              </a>
            </div>
            {hash === "#login" && <Login />}
            {hash === "#signup" && (
              <SignUp
                onSignUp={() => {
                  setIsOpen(false);
                  setHash("");
                  window.location.hash = "";
                  router.replace(window.location.pathname);
                  router.reload();
                }}
              />
            )}
            {hash === "#reset-password" && <ResetPassword />}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthModal;
