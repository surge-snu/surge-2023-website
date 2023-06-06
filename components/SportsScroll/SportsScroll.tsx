import React from "react";
import Image from "next/image";
import "./SportsScroll.scss";

const SportsScroll = () => {
  const baseURL = "/Images/Homepage/Sports/";

  const sports = [
    "Volleyball",
    "Football",
    "Cricket",
    "Basketball",
    "Tennis",
    "Badminton",
    "Table Tennis",
    "Squash",
    "Chess",
  ];

  const images = [
    "Volleyball.png",
    "Football.png",
    "Cricket.png",
    "Basketball.png",
    "Tennis.png",
    "Badminton.png",
    "Table Tennis.png",
    "Squash.png",
    "Chess.png",
  ];

  return (
    <div className="SportsSlider">
      <div className="SportsSlider__track">
        {sports.concat(sports).map((sport, index) => (
          <div className="SportsSlider__track--item" key={index}>
            <Image
              src={baseURL + images[index > 8 ? index - 9 : index]}
              alt={sport}
              className="SportsSlider__track--item--image"
              width={300}
              height={300}
            />
            <h1 className="SportsSlider__track--item--heading">{sport}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsScroll;
