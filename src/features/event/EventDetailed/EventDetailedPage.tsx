import React, { FC, useEffect } from "react";
import { IEventDetailedFromProp } from "./Entity/EventDetailedEntity";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChart from "./EventDetailedChart";
import EventDetailedSideBar from "./EventDetailedSideBar";
import { Event, Attendee } from "../EventList/Entity/EventList";
import { IApplicationState } from "../../../app/store/configureStore";
import { connect } from "react-redux";
import { withFirestore,useFirestore, WithFirestoreProps } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import { ObjectToArray } from "../../../app/common/util/helper";


export const EventDetailedPage: FC<IEventDetailedFromProp & WithFirestoreProps> = props => {
  const { event,match ,firestore,history} = props;
  //const firestore = useFirestore();

  useEffect(  () => {

    firestore.get(`events/${match.params.id}`).then ((event:any)=>{
       if(!event.exists){
         history.push('/events');
         toastr.error('Sorry','Event Not Found');
       } 
      console.log(event);
      
    })
    .catch((error)=>{
       console.log(error);
    })
     /*firestore.collection('events').doc(match.params.id).get().then((data)=>{
      console.log(data);
    }).catch((error)=>{
       console.log(error);
    })*/
     /* const fetchEvent = async ()=>{
         const fetchedevent= await firestore.get(`events/${match.params.id}`);
         console.log(fetchEvent);
      }*/
    // fetchEvent();
    //console.log(fetchedevent);
    //await firestore.get(`events/${match.params.id}`);
   // effect
    return () => {
     // cleanup
    }
    
  }, [match.params.id])
  const attendees :Attendee[]|undefined =  event && event.attendees && ObjectToArray(event.attendees) as Attendee[];
  // console.log(JSON.stringify(event.attendees));
   console.log(JSON.stringify(attendees));
  //console.log(props.match.params.id);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChart />
      </Grid.Column>
      {
        <Grid.Column width={6}>
          {event.attendees && (
            <EventDetailedSideBar attendees={attendees} />
          )}
        </Grid.Column>
      }
    </Grid>
  );
};
const mapStateToProps = (
  store: IApplicationState,
  ownProps: IEventDetailedFromProp
) => {
   const eventId =ownProps.match.params.id;
   let event:Event = {} as any;
    if( eventId &&  store.firestore.ordered.events && store.firestore.ordered.events.length>0){
      event= store.firestore.ordered.events.filter((event:any) =>event.id ===eventId)[0] || {}
    }
  return {
    event
  };
};
export default  withFirestore(connect(mapStateToProps)(EventDetailedPage));
