import { EventAction } from "./eventConstants";
//import { createReducer } from "./../../app/common/util/reducerUtil";
import { Event } from "./EventList/Entity/EventList";
import { IEventState } from "./IEventState";
import {
  
  EventActionTypes
} from "./eventConstants";

import { Reducer } from "redux";

const initialevents: Event[] = [];

/*const handlecreateEventAction = (
  state: IEventState,
  action: IEventCreateAction
) => {
  return [...state.events, action.payload.event];
};
const handleUpdateEventAction = (
  state: IEventState,
  action: IEventUpdateAction
) => {
  return [
    ...state.events.filter(event => event.id !== action.payload.event.id),
    action.payload.event
  ];
};

const handleDeleteEventAction = (
  state: IEventState,
  action: IEventDeleteAction
) => {
  return {
      event:[...state.events.filter(event => event.id !== action.payload.eventId)]
  }
};
*/
const initialEventState: IEventState = {
  //currentProduct: null,
  events: initialevents
  //productsLoading: false
};

/*type CreateEventAction = ReturnType<typeof createEvent>;
type UpdateEventAction = ReturnType<typeof updateEvent>;
type DeleteEventAction = ReturnType<typeof deleteEvent>;
export type Action = CreateEventAction | UpdateEventAction | DeleteEventAction;
export type Types = typeof EventActionTypes;
export const eventReducer = createReducer(initialEventState)
  .handleAction(EventActionTypes.CREATE_EVENT, handlecreateEventAction)
  .handleAction(EventActionTypes.UPDATE_EVENT, handleUpdateEventAction)
  .handleAction(EventActionTypes.DELETE_EVENT, handleDeleteEventAction);
*/
export const eventReducer: Reducer<IEventState, EventAction> = (
  state = initialEventState,
  action: EventAction
) => {
  switch (action.type) {
   case EventActionTypes.GETALLEVENTS:{
      return {
        ...state,
        events:action.payload.events
      }
   }

    case EventActionTypes.DELETE_EVENT: {
      return {
        events: [
          ...state.events.filter(event => event.id !== action.payload.eventId)
        ]
      };
    }
    case EventActionTypes.UPDATE_EVENT: {
      return {
        events: [
          ...state.events.filter(event => event.id !== action.payload.event.id),
          action.payload.event
        ]
      };
    }
    case EventActionTypes.CREATE_EVENT: {
      return {
        events: [...state.events, action.payload.event]
      };
    }
    default:
      return state;
  }
  //return state;
};

/*export default createReducer<IEventState, EventActionTypes, Action>(initialEventState, {
  
    // [...state.events,action.payload.event]
      
    
  })
  */

/*export const eventReducer = createReducer<IEventState, EventActionTypes, Action>(initialEventState,
     [EventActionTypes.CREATE_EVENT]:(state:IEventState,action:IEventCreateAction) => createEvent()
    );
*/
/*  export default createReducer(initialEventState, {
  [EventActionTypes.CREATE_EVENT]: (
    state: IEventState,
    action: CreateEventAction
  ) => createEvent
});
*/
