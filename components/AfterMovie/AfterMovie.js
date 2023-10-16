import { motion } from "framer-motion";
import Link from "next/link";
import "./AfterMovie.scss";

function AfterMovie() {
  return (
    <section className="Aftermovie">
      <div className="Aftermovie__video">
        <video autoPlay muted loop>
          <source src="/Videos/LoopedAftermovie.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="Aftermovie__content">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="Aftermovie__heading"
        >
          About Sports Fest <br />
          of <span>Shiv Nadar IOE</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Aftermovie__paragraph"
        >
          Surge brings to all a platform to promote visibility, interaction, and
          dedication to sports. Our sports clubs get to not only increase their
          audience, but also nurture in everyone the spirit of competition,
          teamwork and sportsmanship. We endeavor to boost the zest for sports
          by bringing about a new era for sports, showcasing legendary clashes
          between the best and the brightest.
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
  );
}

export default AfterMovie;
