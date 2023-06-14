import "./AllSponsors.scss";
import Image from "next/image";

type SponsImage = {
    name : string,
    image : string,
    alt : string
}

function AllSponsors(){

    const sponsors: SponsImage[] = [
        {
            name: "Stag",
            image: "/Images/Sponsors/stag.png",
            alt : "Stag"
        },
        {
            name: "Wai Wai",
            image: "/Images/Sponsors/waiwai.png",
            alt : "Wai Wai"
        },
        {
            name: "Dassault Systems",
            image: "/Images/Sponsors/dassault.png",
            alt : "Dassault Systems"
        },
        {
            name: "HCL Tech",
            image: "/Images/Sponsors/hcltech.png",
            alt : "HCL Tech"
        },
        {
            name: "Career Launcher",
            image: "/Images/Sponsors/career.png",
            alt : "Career Launcher"
        },
        {
            name: "Levo",
            image: "/Images/Sponsors/levo.png",
            alt : "Levo"
        },
        {
            name: "Tutle Pic",
            image : "/Images/Sponsors/turtle.png",
            alt : "Turtle Pic"
        },
        {
            name : "Spawn Point",
            image : "/Images/Sponsors/spawn.png",
            alt : "Spawn Point"
        },
        {
            name: "Winsome Bioceuticals",
            image : "/Images/Sponsors/winsome.png",
            alt : "Winsome Bioceuticals"
        },
        {
            name: "Fujifilm",
            image : "/Images/Sponsors/fujifilm.png",
            alt : "Fujifilm"
        },
        {
            name: "HCL Healthcare",
            image : "/Images/Sponsors/hclhealth.png",
            alt : "HCL Healthcare"
        },
        {
            name: "Fisto",
            image : "/Images/Sponsors/fisto.png",
            alt : "Fisto"
        },
        {
            name: "InHouse Digital",
            image : "/Images/Sponsors/inhouse.png",
            alt : "InHouse Digital"
        },
        {
            name: "SNU Xplore",
            image : "/Images/Sponsors/snuxplore.png",
            alt : "SNU Xplore"
        },
        {
            name: "Atium Sports",
            image : "/Images/Sponsors/atium.png",
            alt : "Atium Sports"
        },
        {
            name: "BOAT",
            image : "/Images/Sponsors/boat.png",
            alt : "BOAT"
        },
        {
            name: "Red Bull",
            image : "/Images/Sponsors/redbull.png",
            alt : "Red Bull"
        }
    ]


    return(
        <div>
            <section className="AllSponsors">
                <div className="AllSponsors__content">
                    {sponsors.map((sponsor : SponsImage) => (
                        <div className="AllSponsors__content--card">
                        <Image
                            key={sponsor.name}
                            src={sponsor.image}
                            alt={sponsor.alt}
                            width={180}
                            height={90}
                            className="AllSponsors__content--card--image"
                        />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AllSponsors;