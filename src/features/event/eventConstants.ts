import { Event } from "./EventList/Entity/EventList";

export enum EventActionTypes {
  CREATE_EVENT = "EVENTS/CREATE_EVENT",
  UPDATE_EVENT = "EVENTS/UPDATE_EVENT",
  DELETE_EVENT = "EVENTS/DELETE_EVENT",
  GETALLEVENTS = "EVENTS/GET_ALL",
  GETSINGLE_EVENT = "EVENTS/GETSINGLE",
  EVENT_LOADING ="EVENTS/LOADING"
}
export interface IEventLoadingAction {
  type:EventActionTypes.EVENT_LOADING;
   payload :{
      loading:boolean;
   }
}

export interface IEventGetAllAction {
  type: EventActionTypes.GETALLEVENTS;
  payload: {
    events: Event[];
  };
  
}
export interface IEventCreateAction {
  type: EventActionTypes.CREATE_EVENT;
  payload: {
    event: Event;
  };
}

export interface IEventUpdateAction {
  type: EventActionTypes.UPDATE_EVENT;
  payload: {
    event: Event;
  };
}

export interface IEventDeleteAction {
    type: EventActionTypes.DELETE_EVENT;
    payload: {
      eventId: string;
    };
  }
  export type EventAction =
  | IEventCreateAction
  | IEventUpdateAction
  | IEventDeleteAction
  | IEventGetAllAction
  
//export type EventActionTypes = typeof CREATE_EVENT | typeof UPDATE_EVENT | typeof DELETE_EVENT
