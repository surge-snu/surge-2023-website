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
  );
}

export default Sponsors;
