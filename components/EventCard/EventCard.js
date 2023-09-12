import Link from "next/link";
import "./EventCard.scss";

export default function EventCard({ event }) {
    const date = new Date(event.dateFrom).toString().split(" ");

    return (
        <div className="EventCard">
            <div className="EventCard__name">
                {event.eventName.toUpperCase()} ({event.category})
            </div>
            <div className="EventCard__desc">
                {event?.description ? `${event.description}` : ""}
            </div>
            <div className="EventCard__detail">
                <div className="EventCard__detail--price">
                    <img src="/Images/eye.png" />
                    <p className='GlobalF'>₹{event.pricePerPlayer} / person</p>
                </div>
                <div className="EventCard__detail--date">
                    <img src="/Images/calender.png" />
                    <p className='GlobalF'>{event.dateTo} to {event.dateFrom}</p>
                </div>
            </div>
            <Link className="EventCard__reg" href={`/event/${event.eventId}/overview`}>
                <p>Register Now</p>
                <img src="/Images/arrow-right.png" />
            </Link>
        </div>
    );
}
