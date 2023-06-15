import AllSponsors from "../components/AllSponsors/AllSponsors";
import AllSponsorsAfterMovie from "../components/AllSponsorsAfterMovie/AllSponsorsAfterMovie";
import SponsorTitles from "../components/SponsorTitles/SponsorTitles";
import "../styles/routes/Sponsors.scss"
function Sponsors() {
  return (
    <section className="AllSponsorsSection">
      <div className="AllSponsorsTiles">
        <AllSponsors />
      </div>
      <div className="AllSponsorsAfterMovie">
        <AllSponsorsAfterMovie />
      </div>
      <div className="AllSponsorsTitleList">
        <SponsorTitles />
      </div>
    </section>
  );
}

export default Sponsors;
