import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/root/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSmall , setIsSmall] = useState(false);
  useEffect(() => {
    if(window.innerWidth <= 960) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  })
  return (
    <>
      <Head>
        <title>Surge 2023</title>
        <meta
          name="description"
          content="Shiv Nadar IOE's annual Sports Fest"
        />
        <link rel="icon" href="/Images/Favicon.png" />
      </Head>
      <Navbar isSmall={isSmall} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
