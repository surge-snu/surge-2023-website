import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import "./SponsorTitles.scss";
import SponsorTitleScroll from "../SponsorTitleScroll/SponsorTitleScroll";


function SponsorTitles() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const sponsorTitles = [
    {
      title: "Title Sponsor",
      name: "Wai Wai",
      image: "/Images/Sponsors/waiwai.webp",
      alt: "Wai Wai",
    },
    {
      title: "Associate Title Sponsor",
      name: "Dassault Systems",
      image: "/Images/Sponsors/dassaultSystems.webp",
      alt: "Dassault Systems",
    },
    {
      title: "Associate Title Sponsor",
      name: "Stag International",
      image: "/Images/Sponsors/stag.webp",
      alt: "Stag",
    },
    // {
    //     title: "Associate Title Sponsor",
    //     name: "Swiggy",
    //     image: "/Images/Sponsors/swiggy.webp",
    //     alt: "Swiggy"
    // },
    {
      title: "Creative Partner",
      name: "Fujifilm India",
      image: "/Images/Sponsors/fujifilm.webp",
      alt: "Fujifilm India",
    },
    {
      title: "Lifestyle Partner",
      name: "boAt",
      image: "/Images/Sponsors/boat.webp",
      alt: "boAt",
    },
    {
      title: "Education Partner",
      name: "Career Launcher",
      image: "/Images/Sponsors/careerLauncher.webp",
      alt: "Career Launcher",
    },
    {
      title: "Sports Media Partner",
      name: "Fisto Sports",
      image: "/Images/Sponsors/fisto.webp",
      alt: "Fisto Sports",
    },
    // {
    //     title: "Badminton Partner",
    //     name: "Transform Badminton",
    //     image: "/Images/Sponsors/transform.webp",
    //     alt: "Transform Badminton"
    // },
    {
      title: "Pain Relief Partner",
      name: "Winsome Bioceuticals",
      image: "/Images/Sponsors/winsomeBioceuticals.webp",
      alt: "Winsome Bioceuticals",
    },
    {
      title: "Digital Media Partner",
      name: "Inhouse Digital",
      image: "/Images/Sponsors/inhouseDigital.webp",
      alt: "Inhouse Digital",
    },
    {
      title: "Photo sharing Partner",
      name: "TurtlePic",
      image: "/Images/Sponsors/turtlePic.webp",
      alt: "TurtlePic",
    },
    {
      title: "Healthcare Partner",
      name: "HCL healthcare",
      image: "/Images/Sponsors/hclHealthCare.webp",
      alt: "HCL healthcare",
    },
    {
      title: "Grooming Partner",
      name: "Levo Spalon",
      image: "/Images/Sponsors/levo.webp",
      alt: "Levo Spalon",
    },
    {
      title: "Navigation Partner",
      name: "SNUxplore",
      image: "/Images/Sponsors/snuxplore.webp",
      alt: "SNUxplore",
    },
    {
      title: "Energy Partner",
      name: "Red Bull",
      image: "/Images/Sponsors/redbull.webp",
      alt: "Red Bull",
    },
    // {
    //     title: "Official Partner",
    //     name: "Vegam Global Foods",
    //     image: "/Images/Sponsors/vegam.webp",
    //     alt: "Vegam Global Foods"
    // },
    // {
    //     title: "Official Partner",
    //     name: "Omnipresent Robotech",
    //     image: "/Images/Sponsors/omnipresent.webp",
    //     alt: "Omnipresent Robotech"
    // },
    {
      title: "Official Partner",
      name: "Atium Sports",
      image: "/Images/Sponsors/atiumSports.webp",
      alt: "Atium Sports",
    },
    // {
    //     title: "Official Partner",
    //     name: "Elevate Engineers",
    //     image: "/Images/Sponsors/elevate.webp",
    //     alt: "Elevate Engineers"
    // },
    // {
    //     title: "Official Partner",
    //     name: "Magnus Enterprise",
    //     image: "/Images/Sponsors/magnus.webp",
    //     alt: "Magnus Enterprise"
    // },
    // {
    //     title: "Official Partner",
    //     name: "Aeon Design and Development",
    //     image: "/Images/Sponsors/aeon.webp",
    //     alt: "Aeon Design and Development"
    // },
    // {
    //     title: "Official Partner",
    //     name: "Atal Incubation Centre SNIoE",
    //     image: "/Images/Sponsors/atal.webp",
    //     alt: "Atal Incubation Centre SNIoE"
    // },
    // {
    //     title: "Official Partner",
    //     name: "Carrier",
    //     image: "/Images/Sponsors/carrier.webp",
    //     alt: "Carrier"
    // },
    // {
    //     title: "Official Partner",
    //     name: "Ashu Brothers",
    //     image: "/Images/Sponsors/ashu.webp",
    //     alt: "Ashu Brothers"
    // },
    {
      title: "Official Partner",
      name: "Spawn Point Apparel",
      image: "/Images/Sponsors/spawnPoint.webp",
      alt: "Spawn Point Apparel",
    },
    // {
    //     title: "Official Partner",
    //     name: "Chocolate Villa",
    //     image: "/Images/Sponsors/chocolate.webp",
    //     alt: "Chocolate Villa"
    // },
  ];

  return (
    <div>
      <SponsorTitleScroll heading="Sponsor Titles" />
      <div className="SponsorTitles">
        <div className="SponsorTitles__container">
          {
            <Swiper
              style={{
                "--swiper-navigation-size": "24px",
                "--swiper-theme-color": "red",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                950: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={4}
              navigation
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 2000 }}
              centeredSlides
              loop
            >
                {sponsorTitles.map((sponsorTitle) => {
                  return (
                    <SwiperSlide key={sponsorTitle.name}>
                      <div className="SponsorTitles__container--sponsor">
                        <div className="SponsorTitles__container--sponsor--card">
                          <Image
                            src={sponsorTitle.image}
                            alt={sponsorTitle.alt}
                            width={200}
                            height={90}
                            className="SponsorTitles__container--sponso--card__image"
                          />
                          <h3 className="SponsorTitles__container--sponsor--card__title">
                            {sponsorTitle.title}
                          </h3>
                          <h4 className="SponsorTitles__container--sponsor--card__name">
                            {sponsorTitle.name}
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          }
        </div>
      </div>
    </div>
  );
}

export default SponsorTitles;
