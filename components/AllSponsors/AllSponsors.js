import "./AllSponsors.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function AllSponsors() {
  const sponsors = [
    {
      name: "Stag",
      image: "/Images/Sponsors/stag.png",
      alt: "Stag",
    },
    {
      name: "Wai Wai",
      image: "/Images/Sponsors/waiwai.png",
      alt: "Wai Wai",
    },
    {
      name: "Dassault Systems",
      image: "/Images/Sponsors/dassaultSystems.png",
      alt: "Dassault Systems",
    },
    {
      name: "Career Launcher",
      image: "/Images/Sponsors/careerLauncher.png",
      alt: "Career Launcher",
    },
    {
      name: "Levo",
      image: "/Images/Sponsors/levo.png",
      alt: "Levo",
    },
    {
      name: "Turtle Pic",
      image: "/Images/Sponsors/turtlePic.png",
      alt: "Turtle Pic",
    },
    {
      name: "Spawn Point",
      image: "/Images/Sponsors/spawnPoint.png",
      alt: "Spawn Point",
    },
    {
      name: "Winsome Bioceuticals",
      image: "/Images/Sponsors/winsomeBioceuticals.png",
      alt: "Winsome Bioceuticals",
    },
    {
      name: "Fujifilm",
      image: "/Images/Sponsors/fujifilm.png",
      alt: "Fujifilm",
    },
    {
      name: "HCL Healthcare",
      image: "/Images/Sponsors/hclHealthCare.png",
      alt: "HCL Healthcare",
    },
    {
      name: "Fisto",
      image: "/Images/Sponsors/fisto.png",
      alt: "Fisto",
    },
    {
      name: "InHouse Digital",
      image: "/Images/Sponsors/inhouseDigital.png",
      alt: "InHouse Digital",
    },
    {
      name: "SNU Xplore",
      image: "/Images/Sponsors/snuxplore.png",
      alt: "SNU Xplore",
    },
    {
      name: "Atium Sports",
      image: "/Images/Sponsors/atiumSports.png",
      alt: "Atium Sports",
    },
    {
      name: "BOAT",
      image: "/Images/Sponsors/boat.png",
      alt: "BOAT",
    },
    {
      name: "Red Bull",
      image: "/Images/Sponsors/redbull.png",
      alt: "Red Bull",
    },
  ];

  return (
    <section className="AllSponsors">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0 * 0.1 }}
        className="AllSponsors__tiles"
      >
        {sponsors.map((sponsor) => (
          <Image
            key={sponsor.name}
            src={sponsor.image}
            alt={sponsor.alt}
            width={200}
            height={90}
            className="AllSponsors__tiles--card"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default AllSponsors;
