import EventCard from "../components/EventCard/EventCard";
import { fetchAllEvents } from "../services/eventServer";
import "../styles/routes/Events.scss";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import { useState } from "react";
import ScrollItems from "../components/ScrollItems/ScrollItems";
import EventScroll from "../components/EventScroll/EventScroll";

export async function getServerSideProps(context) {
    let allEvents = await fetchAllEvents();

    if (context.req.session.user === undefined) {
        return {
            props: {
                user: null,
                allEvents,
            },
        };
    }

    return {
        props: {
            user: context.req.session.user,
            allEvents: allEvents.sort((a, b) => (a.eventName > b.eventName ? 1 : -1)),
        },
    };
}

export default function Events({ allEvents }) {
    const [allFilteredEvents, setAllFilteredEvents] = useState(allEvents);
    console.log(allEvents);
    return (
        <div className="EventsPage__container">
            <div className="EventsPage__container--scrollItems">
                <EventScroll heading='EVENTS' />
                <img src="/Images/comingSoon.png" />
            </div>
            <div className="EventsPage__container--upcoming">
                <ScrollItems heading='UPCOMING EVENTS' />
            </div>
            <div className="EventsPage__container--popular">
                {allFilteredEvents.map((event, index) => {
                    return (
                        <EventCard event={event} key={index} />
                    )
                })}
                {allFilteredEvents.map((event, index) => {
                    return (
                        <EventCard event={event} key={index} />
                    )
                })}
                {allFilteredEvents.map((event, index) => {
                    return (
                        <EventCard event={event} key={index} />
                    )
                })}
            </div>
        </div>
    )
    // return (
    //     <div className="EventsPage__container">
    //         <div className="EventsPage__top">
    //             <h1 className="EventsPage__top--title">
    //                 The Surge Championship
    //             </h1>
    //             <p className="EventsPage__top--desc">
    //                 This title is awarded to the Champion of Champions. The university with the maximum points accumulated across all sports will be crowned the Champions of Surge.
    //             </p>
    //         </div>
    //         <div className="EventsPage__bottom">
    //             <div className="EventsPage__bottom--title">
    //                 <h3>Upcoming Events</h3>
    //                 <ButtonGroup
    //                     onFilterChange={(filter) => {
    //                         if (filter === "all") {
    //                             setAllFilteredEvents(allEvents);
    //                         }
    //                         if (filter === "male") {
    //                             setAllFilteredEvents(
    //                                 allEvents.filter((item) => item.category === "MALE")
    //                             );
    //                         }
    //                         if (filter === "female") {
    //                             setAllFilteredEvents(
    //                                 allEvents.filter((item) => item.category === "FEMALE")
    //                             );
    //                         }
    //                         if (filter === "mixed") {
    //                             setAllFilteredEvents(
    //                                 allEvents.filter((item) => item.category === "MIXED")
    //                             );
    //                         }
    //                     }}
    //                 />
    //             </div>
    //             <div className="EventsPage__bottom--cards">
    //                 {allFilteredEvents.map((event, index) => (
    //                     <EventCard event={event} key={index} />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );
}

Events.getLayout = function getLayout(page) {
    return (
        <div className="EventsPage">
            {/* <Header currentPath="events" /> */}
            {page}
            {/* <Footer /> */}
        </div>
    );
};
