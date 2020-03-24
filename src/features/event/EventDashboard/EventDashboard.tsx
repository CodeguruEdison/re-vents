import React, { FC } from "react";
import {
  EventDashboardFromProps
  //EventDashboardFromState
} from "./Entity/EventDashboard";
import { Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
//import EventForm from "../EventForm/EventForm";
//import { Event } from "../EventList/Entity/EventList";
import { connect } from "react-redux";
//import cuid from "cuid";

import {
  createEventAction,
  updateEventAction,
  deleteEventAction
} from "../eventActions";
import { IApplicationState } from "../../../app/store/configureStore";
//import { IEventState } from "../IEventState";

const EventDashboard: FC<EventDashboardFromProps> = props => {
  const { events, deleteEvent } = props;
  console.log(events);

  /*const handleCreateEvent = (newEvent: Event) => {
    newEvent.id = cuid();
    console.log(newEvent.id);
    newEvent.hostPhotoURL = "/assets/user.png";
    createEvent(newEvent);
  };
  const handleUpdateEvent = (updatedevent: Event) => {
    updateEvent(updatedevent);
  };
  */
  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>Activities</h1>
      </Grid.Column>
    </Grid>
  );
};
const mapDispatchToProps = {
  createEventAction,
  updateEventAction,
  deleteEvent: deleteEventAction,
  updateEvent: updateEventAction,
  createEvent: createEventAction
};
const mapStateToProps = (store: IApplicationState) => {
  return {
    events: store.event.events
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
