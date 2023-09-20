import "./AllSponsors.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function AllSponsors() {
  const sponsors = [
    {
      name: "Stag",
      image: "/Images/Sponsors/stag.webp",
      alt: "Stag",
    },
    {
      name: "Wai Wai",
      image: "/Images/Sponsors/waiwai.webp",
      alt: "Wai Wai",
    },
    {
      name: "Dassault Systems",
      image: "/Images/Sponsors/dassaultSystems.webp",
      alt: "Dassault Systems",
    },
    {
      name: "Career Launcher",
      image: "/Images/Sponsors/careerLauncher.webp",
      alt: "Career Launcher",
    },
    {
      name: "Levo",
      image: "/Images/Sponsors/levo.webp",
      alt: "Levo",
    },
    {
      name: "Turtle Pic",
      image: "/Images/Sponsors/turtlePic.webp",
      alt: "Turtle Pic",
    },
    {
      name: "Spawn Point",
      image: "/Images/Sponsors/spawnPoint.webp",
      alt: "Spawn Point",
    },
    {
      name: "Winsome Bioceuticals",
      image: "/Images/Sponsors/winsomeBioceuticals.webp",
      alt: "Winsome Bioceuticals",
    },
    {
      name: "Fujifilm",
      image: "/Images/Sponsors/fujifilm.webp",
      alt: "Fujifilm",
    },
    {
      name: "HCL Healthcare",
      image: "/Images/Sponsors/hclHealthCare.webp",
      alt: "HCL Healthcare",
    },
    {
      name: "Fisto",
      image: "/Images/Sponsors/fisto.webp",
      alt: "Fisto",
    },
    {
      name: "InHouse Digital",
      image: "/Images/Sponsors/inhouseDigital.webp",
      alt: "InHouse Digital",
    },
    {
      name: "SNU Xplore",
      image: "/Images/Sponsors/snuxplore.webp",
      alt: "SNU Xplore",
    },
    {
      name: "Atium Sports",
      image: "/Images/Sponsors/atiumSports.webp",
      alt: "Atium Sports",
    },
    {
      name: "BOAT",
      image: "/Images/Sponsors/boat.webp",
      alt: "BOAT",
    },
    {
      name: "Red Bull",
      image: "/Images/Sponsors/redbull.webp",
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
