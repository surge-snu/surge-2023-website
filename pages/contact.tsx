import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/routes/Home.scss";
import ContactCardList from "../components/ContactInfo/ContactCard";
import details from "../public/json/Surge_team_details.json";

function Contact() {
  var core = details.filter((member) => member["team"] === "Core");
  const [showCore, setShowCore] = useState(true);
  const [display, setDisplay] = useState("core");
  const [displayArray , setDisplayArray] = useState(core);
  useEffect(() => {
    if (display === "core") {
      core = details.filter((member) => member["team"] === "Core");
      setDisplayArray(core);
    } else {
      core = details.filter((member) => member["team"] === "POC");
      setDisplayArray(core);
    }
  },[display]);
  return (
    <section className="ContactPage">
      <div className="ContactPage__container">
        <div className="ContactPage__container--top">
          <h1 className="ContactPage__container--top__title">
            GET IN <span>TOUCH</span> WITH US
            <br /> FOR <span>MORE</span> INFORMATION
          </h1>
        </div>
        <div className="ContactPage__container--tabs">
          <button
            className={`ContactPage__container--tabs__tab ${
              showCore ? "ContactPage__container--tabs__tab--active" : ""
            }`}
            onClick={() => {
              setShowCore(true);
              setDisplay("core");
            }}
          >
            CORE
          </button>
          <button
            className={`ContactPage__container--tabs__tab ContactPage__container--tabs__tab--inactive ${
              showCore ? "" : "ContactPage__container--tabs__tab--active"
            }`}
            onClick={() => {
              setShowCore(false);
              setDisplay("poc");
            }}
          >
            POC
          </button>
          {/* <Link href="/">
            <p
              className={`ContactPage__container--tabs__tab ContactPage__container--tabs__tab--link`}
              onClick={() => setShowCore(false)}
            >
              Team
            </p>
          </Link> */}
        </div>
      </div>
      <div className="ContactPage__cards">
        {displayArray.map((item, index) => (
          <div className="ContactPage__cards--card">
            <img className="ContactPage__cards--card__image" src={item.photo} />
            <div className="ContactPage__cards--card__title">
              <div className="ContactPage__cards--card__title--name">
                {item.name}
              </div>
              <div className="ContactPage__cards--card__title--designation">
                {item.designation}
              </div>
            </div>
            <div className="ContactPage__cards--card__phone">
              <p>Place a call</p>
            </div>
            <div className="ContactPage__cards--card__email">
              <p>Mail</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
