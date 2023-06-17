import Link from "next/link";
import React from "react";
import "./PastSponsors.scss";
import { motion } from "framer-motion";

function PastSponsors() {
  return (
    <div className="PastSponsors">
      <div className="PastSponsors__overlaybg"></div>
      <div className="PastSponsors__overlaybg2"></div>
      <div className="PastSponsors__content">
        <div className="PastSponsors__content--heading">
          <span>Past</span> Sponsors
        </div>
        <div className="PastSponsors__content--paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec cursus tellus, dapibus varius leo. Nam mattis aliquet feugiat. In tempus sed leo et imperdiet. Vivamus sollicitudin placerat vehicula.
        </div>
        <div>
        <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="ctabutton"
            >
              <a style={{textDecoration : "none"}} href="mailto:surge@snu.edu.in">Let's Talk</a>
            </motion.button>
        </div>
      </div>
    </div>
  );
}

export default PastSponsors;
