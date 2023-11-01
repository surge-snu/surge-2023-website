import EventCard from "../components/EventCard/EventCard";
import { fetchAllEvents } from "../services/eventServer";
import "../styles/routes/Events.scss";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import { useState , useEffect} from "react";
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
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredEvents, setFilteredEvents] = useState(allEvents);

    // Update the filteredEvents whenever the searchQuery changes
    useEffect(() => {
        const filtered = allEvents.filter((event) =>
            event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredEvents(filtered);
    }, [searchQuery, allEvents]);
    return (
        <div className="EventsPage__container">
            <div className="EventsPage__container--scrollItems">
                <EventScroll heading='EVENTS' />
                <img src="/Images/comingSoon.webp" />
            </div>
            <div className="EventsPage__container--upcoming">
                <ScrollItems heading='UPCOMING EVENTS' />
            </div>
            {/* <div className="EventsPage__container--search">
                <input
                    type="text"
                    placeholder="Search Events By Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <p className="EventsPage__container--search__down">Download <a target="_blank" href="/Images/surge_rulebook.pdf">RuleBook</a> & <a target="_blank" href="/Images/surge_event.pdf">Event Brochure</a></p>
            </div>
            <div className="EventsPage__container--popular">
                {filteredEvents.map((event, index) => {
                    return (
                        <EventCard event={event} key={index} />
                    )
                })}
            </div> */}
            <p className="EventsPage__container--closed">Registerations are closed. For enquiry<br/> contact Nandini - 9911596623</p>
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
