import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import "./Navbar.scss";


function Navbar({ isSmall = false }) {
  const [navState, setNavState] = useState(false);
  const pathName = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hash, setHash] = useState("");
  const { user } = useAuth();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    console.log("Logged out ", user);
    window.location.reload();
  };

  useEffect(() => {
    setNavState(false);
  }, [pathName]);
  useEffect(() => {
    if (window.innerWidth <= 960) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }

    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
    });
    return () => {
      window.removeEventListener("hashchange", () => { });
    };
  });

  return (
    <nav
      className={`NavbarWrapper ${isSmallScreen ? "NavbarWrapper--small" : ""}`}
    >
      <div className="NavbarContainer">
        <div className="NavbarContainer__AlwaysOnTop">
          <div className="NavbarContainer__Logo">
            <Link href="/" aria-label="Go to Home Page">
              <Image
                src={
                  isSmall
                    ? "/Images/SurgeLogoMobile.svg"
                    : "/Images/surgeLogoPC.svg"
                }
                alt="Surge Logo in Primary Color"
                width={isSmall ? 50 : 200}
                height={isSmall ? 40 : 25}
                priority
              />
            </Link>
          </div>
          {isSmallScreen && (
            <button
              className="NavbarContainer__Hamburger"
              aria-controls="Primary Navigation Menu"
              aria-expanded={navState}
              onClick={() => setNavState(!navState)}
            >
              <svg
                stroke="#90FA08"
                fill="none"
                className="NavbarContainer__Hamburger--svg"
                viewBox="-10 -10 120 120"
                width="40"
              >
                <path
                  className="NavbarContainer__Hamburger--line"
                  style={{
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                  d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <div className="NavbarContainer__Menu">
          <ul
            className={`NavbarContainer__Menu--list ${navState ? "NavbarContainer__Menu--list-open" : ""
              }`}
          >
            <li
              className={`${pathName === "/"
                ? "NavbarContainer__Menu--list-activeItem"
                : "NavbarContainer__menu--list-item"
                }`}
            >
              <Link href="/">Home</Link>
            </li>
            {/* <li
              className={`${pathName === "/about"
                ? "NavbarContainer__Menu--list-activeItem"
                : "NavbarContainer__Menu--list-item"
                }`}
            >
              <Link href="/about">About us</Link>
            </li> */}
            <li
              className={`${pathName === "/gallery"
                ? "NavbarContainer__Menu--list-activeItem"
                : "NavbarContainer__Menu--list-item"
                }`}
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <li
              className={`${pathName === "/events"
                ? "NavbarContainer__Menu--list-activeItem"
                : "NavbarContainer__Menu--list-item"
                }`}
            >
              <Link href="/events">Events</Link>
            </li>

            <li
              className={`${pathName === "/blogs"
                  ? "NavbarContainer__Menu--list-activeItem"
                  : "NavbarContainer__Menu--list-item"
                }`}
            >
              <Link href="/blogs">Blogs</Link>
            </li>

            <li
              className={`${pathName === "/gallery"
                ? "NavbarContainer__Menu--list-activeItem"
                : "NavbarContainer__Menu--list-item"
                }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
            {/* <li className="NavbarContainer__Menu--list-account">
              {!user ? (
                <a href="#login">
                  <Image
                    src="/Images/Navbar/Account.png"
                    alt="Account Navigation Link"
                    width={40}
                    height={40}
                  />
                </a>
              ) : (
                <Link href='/my'>
                  <Image
                    src="/Images/Navbar/Account.png"
                    alt="Account Navigation Link"
                    width={40}
                    height={40}
                  />
                </Link>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
