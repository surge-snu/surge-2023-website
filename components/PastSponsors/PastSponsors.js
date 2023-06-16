import Link from "next/link";
import React from "react";
import "./PastSponsors.scss";

function PastSponsors() {
  return (
    <div className="PastSponsors">
    <div className="PastSponsors__overlaybg"></div>
    <div className="PastSponsors__overlaybg2"></div>
    <div className="PastSposnors__content">
          <div className="PastSponsors__content--heading">
            <span>Past</span> Sponsors</div>
          <div  className="PastSponsors__content--paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec cursus tellus, dapibus varius leo. Nam mattis aliquet feugiat. In tempus sed leo et imperdiet. Vivamus sollicitudin placerat vehicula. 
        </div>
        </div>
        <div>
      <Link href="/PastSponsors">
        <button className="ctabutton">Let's Talk</button>
      </Link>
      </div></div>
  );
}

export default PastSponsors;
