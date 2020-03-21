import React, { FC, Fragment } from "react";
import EventListItem from "./EventListItem";
import { EventListFromProps } from "./Entity/EventList";

const EventList: FC<EventListFromProps> = props => {
  const { events,selectEvent,deleteEvent } = props;
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} selectEvent={selectEvent} deleteEvent={deleteEvent}></EventListItem>
      ))}
    </Fragment>
  );
};

export default EventList;
