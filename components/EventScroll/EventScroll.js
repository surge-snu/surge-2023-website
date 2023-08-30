import React from "react";
import "./EventScroll.scss";

const EventScroll = ({ heading }) => {
    const list = [heading, heading, heading, heading, heading, heading];

    return (
        <div className="slider2">
            <div className="slider2__track">
                {list.concat(list).map((item, index) => (
                    <div
                        className={`slider2__track--item2 ${index % 2 === 0
                                ? "slider2__track--item2--outlined"
                                : "slider2__track--item2--filled"
                            }`}
                        key={index}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="slider2__track2">
                {list.concat(list).map((item, index) => (
                    <div
                        className={`slider2__track--item2 ${index % 2 === 0
                                ? "slider2__track--item2--outlined"
                                : "slider2__track--item2--filled"
                            }`}
                        key={index}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="slider2__track">
                {list.concat(list).map((item, index) => (
                    <div
                        className={`slider2__track--item2 ${index % 2 === 0
                                ? "slider2__track--item2--outlined"
                                : "slider2__track--item2--filled"
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

export default EventScroll;
