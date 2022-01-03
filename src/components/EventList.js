import React from "react";
import EventTile from "./EventTile";
import EventTile2 from "./EventTile2"
const EventList = props => {

    const events = props.events.map((event) => {

        const key = `${event.title} + ${event.timePeriod}`
        return(
            <EventTile2 key={key} event={event} />
        )
    })

    return(
        <ul>
            {events}
        </ul>
    )
}

export default EventList
