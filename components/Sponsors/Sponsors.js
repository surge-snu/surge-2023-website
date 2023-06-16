import Image from "next/image";
import { motion } from "framer-motion";
import ScrollItems from "../ScrollItems/ScrollItems";
import Link from "next/link";
import "./Sponsors.scss";

function Sponsors() {
  return (
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
            src="/Images/Sponsors/stag.png"
            alt="Stag"
            width={200}
            height={90}
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
            src="/Images/Sponsors/waiwai.png"
            alt="Wai Wai"
            width={200}
            height={90}
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
            src="/Images/Sponsors/dassaultSystems.png"
            alt="Daddault Systems"
            width={200}
            height={90}
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
            src="/Images/Sponsors/careerLauncher.png"
            alt="Career Launcher"
            width={200}
            height={90}
            className="Sponsors__content--card--image"
          />
        </motion.div>
      </div>
      <Link href="/sponsors">
        <button className="CTA">View All Sponsors</button>
      </Link>
    </section>
  );
}

export default Sponsors;
