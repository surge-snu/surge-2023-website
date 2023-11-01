import "../styles/routes/Home.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "../components/Stats/Stats";
import Sponsors from "../components/Sponsors/Sponsors";
import AfterMovie from "../components/AfterMovie/AfterMovie";
import PastSponsors from "../components/PastSponsors/PastSponsors";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  const router = useRouter();
  return (
    <main>
      <section className="HeroSection">
        <div className="HeroSection__overlay"></div>
        <div className="HeroSection__content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="HeroSection__content--heading"
          >
            We are the home of <span>Champions</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="HeroSection__content--paragraph"
          >
            Whole-heartedly focused on the growing sports ambition on campus,
            everyone from athletes to fans will be a part of this 3-day fiesta
            of fulfilled dreams in the form of tournaments, one-on-one battles,
            and exertion both physical and mental, as records are formed and
            broken.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="CTA"
            onClick={() => router.push('/events')}
          >
            Register Now
          </motion.button>
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="HeroSection__dates"
        >
          <p className="HeroSection__dates--date">3 4 5 November'23</p>
          <p className="HeroSection__dates--scroll">Scroll for more</p>
          <Image
            src="/Images/Icons/chevronsDown.svg"
            alt="Scroll Down"
            width={30}
            height={30}
          />
        </motion.div>
      </section>
      <section className="AftermovieSection">
        <AfterMovie />
      </section>
      <section className="StatsSection">
        <Stats />
      </section>
      <section className="SponsorsSection">
        <Sponsors />
      </section>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return (
      <div className="MyLayout">
          <Navbar />
          {page}
      </div>
  );
};

export default Home;
