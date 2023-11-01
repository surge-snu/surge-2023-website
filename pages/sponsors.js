import AllSponsors from "../components/AllSponsors/AllSponsors";
import AllSponsorsAfterMovie from "../components/AllSponsorsAfterMovie/AllSponsorsAfterMovie";
import Navbar from "../components/Navbar/Navbar";
import PastSponsors from "../components/PastSponsors/PastSponsors";
import SponsorTitles from "../components/SponsorTitles/SponsorTitles";
import "../styles/routes/Sponsors.scss"
function Sponsors() {
  return (
    <section className="AllSponsorsSection">
      <div className="AllSponsorsHero">
        <PastSponsors />
      </div>
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
Sponsors.getLayout = function getLayout(page) {
  return (
      <div className="MyLayout">
          <Navbar />
          {page}
      </div>
  );
};
export default Sponsors;
