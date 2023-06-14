import { motion } from "framer-motion";
import Link from "next/link";
import "./AllSponsors.scss";

function AllSponsors() {
  return (
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
          Surge brings to all a platform to promote visibility, interaction, and
          dedication to sports. Our sports clubs get to not only increase their
          audience, but also nurture in everyone the spirit of competition,
          teamwork and sportsmanship. We endeavor to boost the zest for sports
          by bringing about a new era for sports, showcasing legendary clashes
          between the best and the brightest.
        </motion.p>
        <div className="Buttons">
        <Link
          href="https://www.youtube.com/watch?v=FvefgmkZbdQ"
          target="_blank"
        >
          <p style={{color: "#90FA08"}}>Watch Aftermovie</p>
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=FvefgmkZbdQ"
          target="_blank"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="Talk"
          >
            <p style={{color: "#90FA08"}}>Let's Talk</p>
          </motion.button>
        </Link>
        </div>
      </div>
    </section>
  );
}

export default AllSponsors;
