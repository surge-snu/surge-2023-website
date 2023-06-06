import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__logoSocials">
        <Image
          src="/Images/surgeLogoWhite.svg"
          alt="Surge Logo"
          width={200}
          height={100}
          className="Footer__logoSocials--logo"
        />
        <div className="Footer__logoSocials--socials">
          <Link href="www.instagram.com">
            <Image
              src="Images/Icons/Facebook.svg"
              alt="Instagram Link"
              width={40}
              height={40}
              className="Footer__logoSocials--socials--icon"
            />
          </Link>
          <Link href="www.instagram.com">
            <Image
              src="Images/Icons/Linkedin.svg"
              alt="Instagram Link"
              width={40}
              height={40}
              className="Footer__logoSocials--socials--icon"
            />
          </Link>
          <Link href="www.instagram.com">
            <Image
              src="Images/Icons/Instagram.svg"
              alt="Instagram Link"
              width={40}
              height={40}
              className="Footer__logoSocials--socials--icon"
            />
          </Link>
        </div>
      </div>
      <div className="Footer__links">
        <div className="Footer__links--category">
          <h2 className="Footer__links--category--heading">Pages</h2>
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <Link href="/gallery">
            <h2>Gallery</h2>
          </Link>
          <Link href="/events">
            <h2>Events</h2>
          </Link>
          <Link href="/team">
            <h2>Team</h2>
          </Link>
        </div>
        <div className="Footer__links--category">
          <h2 className="Footer__links--category--heading">Contact</h2>
          <Link href="mailto:surge@snu.edu.in">
            <h2>surge@snu.edu.in</h2>
          </Link>
          <h2>SNIOE, Delhi, Noida</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
