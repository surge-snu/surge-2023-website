import "../styles/routes/Home.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SportsScroll from "../components/SportsScroll/SportsScroll";
import ScrollItems from "../components/ScrollItems/ScrollItems";

function Home() {
  return (
    <main>
      <section className="HeroSection">
        <div className="HeroSection__overlay"></div>
        <div className="HeroSection__content">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="HeroSection__content--heading"
          >
            We are the home of <span>Champions</span>
          </motion.h1>
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
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="HeroSection__dates"
        >
          <p className="HeroSection__dates--date">3 4 5 November&apos;23</p>
          <p className="HeroSection__dates--scroll">Scroll for more</p>
          <Image
            src="/Images/Icons/chevronsDown.svg"
            alt="Scroll Down"
            width={30}
            height={30}
          />
        </motion.div>
      </section>
      <section className="Aftermovie">
        <div className="Aftermovie__video">
          <video autoPlay muted loop>
            <source src="/Videos/LoopedAftermovie.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="Aftermovie__content">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="Aftermovie__heading"
          >
            About Sports Fest <br />
            of <span>Shiv Nadar IOE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="Aftermovie__paragraph"
          >
            Surge brings to all a platform to promote visibility, interaction,
            and dedication to sports. Our sports clubs get to not only increase
            their audience, but also nurture in everyone the spirit of
            competition, teamwork and sportsmanship. We endeavor to boost the
            zest for sports by bringing about a new era for sports, showcasing
            legendary clashes between the best and the brightest.
          </motion.p>
          <Link
            href="https://www.youtube.com/watch?v=FvefgmkZbdQ"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="CTA"
            >
              Watch Aftermovie
            </motion.button>
          </Link>
        </div>
      </section>
      <section className="GameStats">
        <ScrollItems heading="Scene in the game" />
        <div className="GameStats__statistics">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0 * 0.15 }}
            className="GameStats__statistics--card"
          >
            <h1>109+</h1>
            <h2>Teams</h2>
            <h2>Teams</h2>
            <h2>Teams</h2>
            <h2>Teams</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 * 0.15 }}
            className="GameStats__statistics--card"
          >
            <h1>17</h1>
            <h2>Events</h2>
            <h2>Events</h2>
            <h2>Events</h2>
            <h2>Events</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 2 * 0.15 }}
            className="GameStats__statistics--card"
          >
            <h1>1500+</h1>
            <h2>Players</h2>
            <h2>Players</h2>
            <h2>Players</h2>
            <h2>Players</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 3 * 0.15 }}
            className="GameStats__statistics--card"
          >
            <h1>15k+</h1>
            <h2>Footfall</h2>
            <h2>Footfall</h2>
            <h2>Footfall</h2>
            <h2>Footfall</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 4 * 0.15 }}
            className="GameStats__statistics--card"
          >
            <h1>∞</h1>
            <h2>Sweat</h2>
            <h2>Sweat</h2>
            <h2>Sweat</h2>
            <h2>Sweat</h2>
          </motion.div>
        </div>
        <div className="GameStats__sports">
          <SportsScroll />
        </div>
      </section>
      <section className="Sponsors">
        <ScrollItems heading="Sponsors" />
        <div className="Sponsors__content">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/Stag.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/Wai Wai.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 2 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/Dassault Systems.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 3 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/HCL.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 4 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/HCL.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 5 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/Stag.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 6 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/Wai Wai.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 7 * 0.1 }}
            className="Sponsors__content--card"
          >
            <Image
              src="/Images/Homepage/Sponsors/Dassault Systems.png"
              alt="Stag"
              width={200}
              height={100}
              className="Sponsors__content--card--image"
            />
          </motion.div>
        </div>
        <Link href="/sponsors">
          <button className="CTA">View All Sponsors</button>
        </Link>
      </section>
    </main>
  );
}

export default Home;
