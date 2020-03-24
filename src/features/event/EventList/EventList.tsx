import React, { FC, Fragment } from "react";
import EventListItem from "./EventListItem";
import { IEventListFromProps } from "./Entity/EventList";

const EventList: FC<IEventListFromProps> = props => {
  const { events,deleteEvent } = props;
  return (
    <Fragment>
      {events && events.map((event) => (
        <EventListItem key={event.id} event={event}  deleteEvent={deleteEvent}></EventListItem>
      ))}
    </Fragment>
  );
};

export default EventList;
