import ScrollItems from "../ScrollItems/ScrollItems";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css/bundle';
import "./SponsorTitles.scss";

type SponsorTitle = {
    title: string
    name: string
    image: string
    alt: string
}

function SponsorTitles() {

    const sponsorTitles: SponsorTitle[] = [
        {
            title: "Title Sponsor",
            name: "Wai Wai",
            image: "/Images/Sponsors/waiwai.png",
            alt: "Wai Wai"
        },
        {
            title: "Associate Title Sponsor",
            name: "Dassault Systems",
            image: "/Images/Sponsors/dassault.png",
            alt: "Dassault Systems"
        },
        {
            title: "Associate Title Sponsor",
            name: "Stag International",
            image: "/Images/Sponsors/stag.png",
            alt: "Stag"
        },
        {
            title: "Associate Title Sponsor",
            name: "Swiggy",
            image: "/Images/Sponsors/swiggy.png",
            alt: "Swiggy"
        },
        {
            title: "Creative Partner",
            name: "Fujifilm India",
            image: "/Images/Sponsors/fujifilm.png",
            alt: "Fujifilm India"
        },
        {
            title: "Lifestyle Partner",
            name: "boAt",
            image: "/Images/Sponsors/boat.png",
            alt: "boAt"
        },
        {
            title: "Education Partner",
            name: "Career Launcher",
            image: "/Images/Sponsors/career.png",
            alt: "Career Launcher"
        },
        {
            title: "Sports Media Partner",
            name: "Fisto Sports",
            image: "/Images/Sponsors/fisto.png",
            alt: "Fisto Sports"
        },
        {
            title: "Badminton Partner",
            name: "Transform Badminton",
            image: "/Images/Sponsors/transform.png",
            alt: "Transform Badminton"
        },
        {
            title: "Pain Relief Partner",
            name: "Winsome Bioceuticals",
            image: "/Images/Sponsors/winsome.png",
            alt: "Winsome Bioceuticals"
        },
        {
            title: "Digital Media Partner",
            name: "Inhouse Digital",
            image: "/Images/Sponsors/inhouse.png",
            alt: "Inhouse Digital"
        },
        {
            title: "Photo sharing Partner",
            name: "TurtlePic",
            image: "/Images/Sponsors/turtle.png",
            alt: "TurtlePic"
        },
        {
            title: "Healthcare Partner",
            name: "HCL healthcare",
            image: "/Images/Sponsors/hcl.png",
            alt: "HCL healthcare"
        },
        {
            title: "Grooming Partner",
            name: "Levo Spalon",
            image: "/Images/Sponsors/levo.png",
            alt: "Levo Spalon"
        },
        {
            title: "Navigation Partner",
            name: "SNUxplore",
            image: "/Images/Sponsors/snuxplore.png",
            alt: "SNUxplore"
        },
        {
            title: "Energy Partner",
            name: "Red Bull",
            image: "/Images/Sponsors/redbull.png",
            alt: "Red Bull"
        },
        {
            title: "Official Partner",
            name: "Vegam Global Foods",
            image: "/Images/Sponsors/vegam.png",
            alt: "Vegam Global Foods"
        },
        {
            title: "Official Partner",
            name: "Omnipresent Robotech",
            image: "/Images/Sponsors/omnipresent.png",
            alt: "Omnipresent Robotech"
        },
        {
            title: "Official Partner",
            name: "Atium Sports",
            image: "/Images/Sponsors/atium.png",
            alt: "Atium Sports"
        },
        {
            title: "Official Partner",
            name: "Elevate Engineers",
            image: "/Images/Sponsors/elevate.png",
            alt: "Elevate Engineers"
        },
        {
            title: "Official Partner",
            name: "Magnus Enterprise",
            image: "/Images/Sponsors/magnus.png",
            alt: "Magnus Enterprise"
        },
        {
            title: "Official Partner",
            name: "Aeon Design and Development",
            image: "/Images/Sponsors/aeon.png",
            alt: "Aeon Design and Development"
        },
        {
            title: "Official Partner",
            name: "Atal Incubation Centre SNIoE",
            image: "/Images/Sponsors/atal.png",
            alt: "Atal Incubation Centre SNIoE"
        },
        {
            title: "Official Partner",
            name: "Carrier",
            image: "/Images/Sponsors/carrier.png",
            alt: "Carrier"
        },
        {
            title: "Official Partner",
            name: "Ashu Brothers",
            image: "/Images/Sponsors/ashu.png",
            alt: "Ashu Brothers"
        },
        {
            title: "Official Partner",
            name: "Spawn Point Apparel",
            image: "/Images/Sponsors/spawn.png",
            alt: "Spawn Point Apparel"
        },
        {
            title: "Official Partner",
            name: "Chocolate Villa",
            image: "/Images/Sponsors/chocolate.png",
            alt: "Chocolate Villa"
        },
    ]

    return (
        <div>
            <ScrollItems heading="Sponsor Titles" />
            <div className="SponsorTitles">
                <div className="SponsorTitles__container">
                    {
                        <Swiper
                            style={{
                                '--swiper-navigation-size': '24px',
                                '--swiper-theme-color': 'red',
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={4}
                            navigation
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 1000 }}
                        >
                            {sponsorTitles.map((sponsorTitle) => {
                                return (
                                    <SwiperSlide key={sponsorTitle.name}>
                                        <div className="SponsorTitles__container--sponsor">
                                            <Image
                                                src={sponsorTitle.image}
                                                alt={sponsorTitle.alt}
                                                width={150}
                                                height={50}
                                            />
                                            <h3>{sponsorTitle.title}</h3>
                                            <h4>{sponsorTitle.name}</h4>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    }

                </div>
            </div>
        </div>
    )
}

export default SponsorTitles;