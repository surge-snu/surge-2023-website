import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="split-screen">
        <div className="left-panel">
          <div className="Footer__logoSocials">
            <Image
              src="/Images/Surge_Logo.png"
              alt="Surge Logo"
              width={200}
              height={100}
              className="Footer__logoSocials--logo"
            />
            <div className="Footer__logoSocials--socials">
              <Link href="https://www.instagram.com/surge.snu/">
                <Image
                  src="Images/Facebook.svg"
                  alt="Instagram Link"
                  width={30}
                  height={30}
                  className="Footer__logoSocials--socials--icon"
                />
              </Link>
              <Link href="https://www.instagram.com/surge.snu/">
                <Image
                  src="Images/LinkedIn.svg"
                  alt="Instagram Link"
                  width={30}
                  height={30}
                  className="Footer__logoSocials--socials--icon"
                />
              </Link>
              <Link href="https://www.instagram.com/surge.snu/">
                <Image
                  src="Images/Instagram.svg"
                  alt="Instagram Link"
                  width={30}
                  height={30}
                  className="Footer__logoSocials--socials--icon"
                />
              </Link>
              <Link href="https://www.instagram.com/surge.snu/">
                <Image
                  src="Images/Youtube.svg"
                  alt="Instagram Link"
                  width={30}
                  height={30}
                  className="Footer__logoSocials--socials--icon"
                />
              </Link>
            </div>
          </div>
        </div>
      
        <div className="right-panel">
          <div className="Footer__links">
            <div className="Footer__links--category">
              <h2 className="Footer__links--category--heading">Pages</h2>
              <div className="Footer__links--category--links">
                <div className="Footer__links--category--links__content">
                  <Link href="/">
                    <h2>Home</h2>
                  </Link>
                  <Link href="/gallery">
                    <h2>Gallery</h2>
                  </Link>
                </div>
                <div className="Footer__links--category--links__content">
                  <Link href="/events">
                    <h2>Events</h2>
                  </Link>
                  <Link href="/team">
                    <h2>Team</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="Footer__links--category">
              <h2 className="Footer__links--category--heading">Contact</h2>
              <Link href="mailto:surge@snu.edu.in">
                <h2>surge@snu.edu.in</h2>
              </Link>
              <h2>SNIoE, Delhi, Noida</h2>
            </div>
          </div>
        </div>  
      </div>  
    </div>
  );
};

export default Footer;