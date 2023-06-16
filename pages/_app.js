import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/root/globals.scss";
import Head from "next/head";
import AuthModal from "../components/AuthModal/AuthModal";
import App from "next/app";
import { withIronSessionSsr } from "iron-session/next";
import { AuthProvider, getUserFromSession } from "../context/authContext";
import { ironOptions } from "../lib/ironOptions";

function MyApp({ Component, pageProps, user }) {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 960) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  });
  return (
    <>
      <AuthProvider ssrUser={user}>
        <Head>
          <title>Surge 2023</title>
          <meta
            name="description"
            content="Shiv Nadar IOE's annual Sports Fest"
          />
          <link rel="icon" href="/Images/Favicon.png" />
        </Head>
        <Navbar isSmall={isSmall} />
        <AuthModal />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}
MyApp.getInitialProps = async (appContext) => {
  if (appContext.router.isSsr === undefined) {
    const appProps = await App.getInitialProps(appContext);
    const user = await getUserFromSession(appContext.ctx);
    console.log(user);
    return { ...appProps, user: user };
  } else {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }
};

export default MyApp;
