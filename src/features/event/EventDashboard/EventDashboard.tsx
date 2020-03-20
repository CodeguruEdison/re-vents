import React, { FC, useState } from "react";
import {
  EventDashboardFromProps,
  EventDashboardFromState
} from "./Entity/EventDashboard";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { Event } from "../EventList/Entity/EventList";
import cuid from "cuid";
const EventDashboard: FC<EventDashboardFromProps> = () => {
  const initialevents: Event[] = [
    {
      id: "1",
      title: "Trip to Tower of London",
      date: "2018-03-27T11:00:00+00:00",
      category: "culture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: "Bob",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      attendees: [
        {
          id: "a",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        }
      ]
    },
    {
      id: "2",
      title: "Trip to Punch and Judy Pub",
      date: "2018-03-28T14:00:00+00:00",
      category: "drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Punch & Judy, Henrietta Street, London, UK",
      hostedBy: "Tom",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      attendees: [
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          id: "a",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        }
      ]
    }
  ];
  const [state, setState] = useState<EventDashboardFromState>({
    events: initialevents,
    isOpen: false
  });
  const { events, isOpen } = state;

  const handleIsOpenToggle = () => {
    setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };
  const handleCreateEvent = (newEvent: Event) => {
    newEvent.id = cuid();
    console.log(newEvent.id);
    newEvent.hostPhotoURL = "/assets/user.png";
    setState(prevState => ({
      ...prevState,
      events: [...prevState.events, newEvent],
      isOpen:!prevState.isOpen
    }));
    
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button positive content="Create Event" onClick={handleIsOpenToggle} />
        {isOpen && (
          <EventForm
            createEvent={handleCreateEvent}
            cancelFormOpen={handleIsOpenToggle}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
