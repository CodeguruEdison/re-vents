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
import { openModalAction } from "../../modals/modalActions";
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect, WithFirestoreProps } from "react-redux-firebase";
//import { IEventState } from "../IEventState";

const EventDashboard: FC<EventDashboardFromProps & WithFirestoreProps> = props => {
  const { events, deleteEvent,/*openModal,*/loading } = props;
  //console.log(events);

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
  /*const handleOpenModal =()=>{
    openModal({
      modalType:'TestModal',
      modalProps:{
        open:true
      }
    })
  }*/
 if(loading){
    return <LoadingComponent inverted={true}/> 
 }
  return (
  
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
      
        <EventActivity></EventActivity>
      </Grid.Column>
    </Grid>
   
  );
};
const mapDispatchToProps = {
  createEventAction,
  updateEventAction,
  deleteEvent: deleteEventAction,
  updateEvent: updateEventAction,
  createEvent: createEventAction,
  openModal:openModalAction
};
const mapStateToProps = (store: IApplicationState) => {
  return {
    events:  store.firestore.ordered.events,
    modals: store.modals?.modal,
    loading: store.async.loading
  };
};

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(firestoreConnect([{collection:'events'}])(EventDashboard));
