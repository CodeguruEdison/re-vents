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
      date: "2018-03-27",
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
      date: "2018-03-28",
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
    isOpen: false,
    selectedEvent:null
  });
  const { events, isOpen,selectedEvent } = state;

/*  const handleIsOpenToggle = () => {
    setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };
*/
  const handleCreateFormOpen =() =>{
     setState(prevState =>({
       ...prevState,
        isOpen:true,
        selectedEvent:null
     }))
  }


const handleFormCancel = () => {
  setState(prevState =>({
    ...prevState,
     isOpen:false
    
  }))
}


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
  const handleUpdateEvent =(updatedevent:Event) =>{
   setState(prevState =>({
      ...prevState,
       events: events.map(event =>{
          if(event.id ===updatedevent.id){
             return {...updatedevent}
          }
          else{
             return event;
          }
       }),
       isOpen:false,
       selectedEvent:null

    }));
    
  }
  const handleDeleteEvent =(id:string) =>{
     setState(prevState =>({
       ...prevState,
        events:events.filter(e => e.id != id),
        selectedEvent: prevState.selectedEvent && prevState.selectedEvent.id ===id? null: prevState.selectedEvent,
        isOpen : selectedEvent === null ? false: true 
     }));

  }
  const handleSelectEvent = (event:Event) => {
    setState(prevState=>({
        ...prevState,
        selectedEvent:event,
        isOpen:true
    }));

  }
  
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}  selectEvent={handleSelectEvent} deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <Button positive content="Create Event" onClick={handleCreateFormOpen} />
        {isOpen && (
          <EventForm key={selectedEvent?selectedEvent.id:0}
            createEvent={handleCreateEvent}
            cancelFormOpen={handleFormCancel}
            selectedEvent = {selectedEvent}
            updateEvent = {handleUpdateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
