import React, { FC, useState } from "react";
import {
  EventDashboardFromProps,
  EventDashboardFromState
} from "./Entity/EventDashboard";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { Event } from "../EventList/Entity/EventList";
import {connect} from 'react-redux';
import cuid from "cuid";

import {createEventAction,updateEventAction,deleteEventAction} from '../eventActions'
import { IApplicationState } from "../../../app/store/configureStore";


const EventDashboard: FC<EventDashboardFromProps> = (props) => {
  const {events} =props;
   console.log(events);
  const [state, setState] = useState<EventDashboardFromState>({
    events,
    isOpen: false,
    selectedEvent:null
  });
  const {  isOpen,selectedEvent } = state;
   
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
        events:events.filter(e => e.id !== id),
        selectedEvent: prevState.selectedEvent && prevState.selectedEvent.id ===id? null: prevState.selectedEvent,
        isOpen : prevState.selectedEvent && prevState.selectedEvent.id ===id? false: prevState.isOpen
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
    <Grid >
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
const mapDispatchToProps  ={
  createEventAction,updateEventAction,deleteEventAction
}
const mapStateToProps = (store:IApplicationState) => {
  return {
    events: store.event.events
  }
}

export default connect(mapStateToProps,mapDispatchToProps ) (EventDashboard)
