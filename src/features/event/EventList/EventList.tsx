import React, { FC, Fragment } from "react";
import EventListItem from "./EventListItem";
import { EventListFromProps } from "./Entity/EventList";

const EventList: FC<EventListFromProps> = props => {
  const { events } = props;
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event}></EventListItem>
      ))}
    </Fragment>
  );
};

export default EventList;
