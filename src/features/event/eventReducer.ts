


//import { createReducer } from "./../../app/common/util/reducerUtil";
import { Event } from "./EventList/Entity/EventList";
import { IEventState } from "./IEventState";
import {
  IEventCreateAction,
  IEventUpdateAction,
  IEventDeleteAction,
  EventActionTypes
} from "./eventConstants";
import { createReducer } from 'typesafe-actions'
import { createEventAction, updateEventAction, deleteEventAction } from "./eventActions";

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

const handlecreateEventAction = (state: IEventState, action: IEventCreateAction) => {
  return [...state.events, action.payload.event];
  
}
const handleUpdateEventAction = (state: IEventState, action: IEventUpdateAction) => {
    return [...state.events.filter(event=>event.id !==action.payload.event.id),action.payload.event];
    
  }

  const handleDeleteEventAction = (state: IEventState, action: IEventDeleteAction) => {
    return [...state.events.filter(event=>event.id !==action.payload.eventId)];
    
  }
const initialEventState: IEventState = {
  //currentProduct: null,
  events: initialevents
  //productsLoading: false
};
/*type CreateEventAction = ReturnType<typeof createEvent>;
type UpdateEventAction = ReturnType<typeof updateEvent>;
type DeleteEventAction = ReturnType<typeof deleteEvent>;
export type Action = CreateEventAction | UpdateEventAction | DeleteEventAction;
export type Types = typeof EventActionTypes;*/
export const  eventReducer = createReducer(initialEventState)
    .handleAction(EventActionTypes.CREATE_EVENT,handlecreateEventAction)
    .handleAction(EventActionTypes.UPDATE_EVENT,handleUpdateEventAction)
    .handleAction(EventActionTypes.DELETE_EVENT,handleDeleteEventAction)


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
