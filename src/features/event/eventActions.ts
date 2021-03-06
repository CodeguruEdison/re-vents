import { getFirestore } from 'redux-firestore';
import { IApplicationState } from './../../app/store/configureStore';
import { asyncActionFinish } from "./../async/asyncActions";
import { fetchSampleData } from "./../../app/data/mockAPI";

import {
  IEventCreateAction,
  EventActionTypes,
  //IEventUpdateAction,
  IEventDeleteAction,
  IEventGetAllAction,
  IEventCancelAction,
  //EventAction,
} from "./eventConstants";
import { Event } from "./EventList/Entity/EventList";
import { ActionCreator, Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IEventState } from "./IEventState";
import { asyncActionStart } from "../async/asyncActions";
import { toastr } from "react-redux-toastr";
import { getFirebase,useFirestore } from "react-redux-firebase";
import { createNewEvent } from '../../app/common/util/helper';
import { reset } from 'redux-form';
// Action Creators
/*export const createEventAction: ActionCreator<IEventCreateAction> = (
  event: Event
) => {
  return {
    type: EventActionTypes.CREATE_EVENT,
    payload: {
      event,
    },
  };
};*/
export const createEventAction: ActionCreator<ThunkAction<
  Promise<any>,
  IApplicationState,
  void,
  IEventCreateAction
>> = (event: Event) => {
  return async (dispatch: Dispatch,getState) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const newEvent = createNewEvent(user,photoURL,event);
    try {
     /* dispatch({
        type: EventActionTypes.CREATE_EVENT,
        payload: {
          event,
        },
      });*/

     /* await firestore.add({
        collection: "users",
        doc: user?.uid,
        subcollections: [{ collection: "photos" }],
      },{
        name:fileName,
        url:downloadURL
      });
      */
      let createdEvent = await firestore.collection('events').add(newEvent);
      //await firestore.add('events',newEvent);
      //Creating one to many Mapping
      await firestore.doc(`event_attendee/${createdEvent.id}_${user?.uid}`).set(
        {
          eventId:createdEvent.id,
          userUid:user?.uid,
          eventDate:event.date,
          host:true
        }
      );
     /* await firestore.set(`event_attendee/${createdEvent.id}_${user?.uid}`,
      {
        eventId:createdEvent.id,
        userUid:user?.uid,
        eventDate:event.date,
        host:true
      })*/
       toastr.success("Success!",'Event has been created');
       return createdEvent;
    } catch (error) {
       console.log(error);
       toastr.error("Error", error);
    }
  };
};




export const updateEventAction: ActionCreator<ThunkAction<
  void,
  IApplicationState,
  void,
  IEventCreateAction
>> = (event: Event) => {
  return async (dispatch: Dispatch,state):Promise<void>=> {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    try {
      await firestore.doc(`events/${event.id}`).update(event);
      //await firestore.update(`events/${event.id}`,event);
     /*dispatch({
        type: EventActionTypes.UPDATE_EVENT,
        payload: {
          event
        },
      });*/
       toastr.success("Success!",'Event has been created');
    } catch (error) {
       toastr.error("Error", error);
       console.log(error);
    }
  };
};

export const cancelToggleEventAction: ActionCreator<ThunkAction<
  void,
  IApplicationState,
  void,
  IEventCancelAction
>> = (
  eventId: string,
  cancelled:boolean) => {
  return async (dispatch: Dispatch,state):Promise<void>=> {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
     const message = cancelled
       ? "Are you sure you want to cancel event?"
       : "This will reactive the event, are you sure?";
    try {
      
      await firestore.doc(`events/${eventId}`).update({
        cancelled:cancelled
      });
      //await usefirestore.get(`events/${eventId}`);
      //await firestore.get(`events/${eventId}`)
     // await firestore.doc(`events/${eventId}`).get();
      //console.log(cancelled)
     // cancelled
      //await firestore.doc(`events/${event.id}`).update(event);
      //await firestore.update(`events/${event.id}`,event);
     /*dispatch({
        type: EventActionTypes.UPDATE_EVENT,
        payload: {
          event
        },
      });*/
     // dispatch(reset('eventForm'));
       toastr.success("Success!",'Event has been created');
    } catch (error) {
       toastr.error("Error", error);
       console.log(error);
    }
  };
};


/*export const updateEventAction: ActionCreator<IEventUpdateAction> = (
  event: Event
) => {
  return {
    type: EventActionTypes.UPDATE_EVENT,
    payload: {
      event,
    },
  };
};*/

export const deleteEventAction: ActionCreator<IEventDeleteAction> = (
  eventId: string
) => {
  return {
    type: EventActionTypes.DELETE_EVENT,
    payload: {
      eventId,
    },
  };
};

export const getAllEvents: ActionCreator<ThunkAction<
  Promise<Action>,
  IEventState,
  void,
  IEventGetAllAction
>> = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      dispatch(asyncActionStart({ loading: true }));
      const events = await fetchSampleData();
      dispatch({ type: EventActionTypes.GETALLEVENTS, payload: { events } });
       return dispatch(asyncActionFinish({ loading: false }));
    } catch (err) {
      console.log(err);
       return dispatch(asyncActionFinish({ loading: false }));
    }
  };
};
