import React from "react";
import "./SponsorTitleScroll.scss";

type ScrollItemsProps = {
  heading: string;
};

const SponsorTitleScroll: React.FC<ScrollItemsProps> = ({ heading }) => {
  const list = [heading, heading, heading, heading, heading, heading];

  return (
    <div className="slider">
      <div className="slider__track">
        {list.concat(list).map((item, index) => (
          <div
            className={`slider__track--item ${
              index % 2 === 0
                ? "slider__track--item--outlined"
                : "slider__track--item--filled"
            }`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorTitleScroll;
