
import {  IEventCreateAction,EventActionTypes, IEventUpdateAction, IEventDeleteAction } from './eventConstants';
import {Event} from './EventList/Entity/EventList'
import { ActionCreator } from 'redux';
// Action Creators
export const createEventAction:ActionCreator<IEventCreateAction>=(event:Event)=>{
  return {
       type: EventActionTypes.CREATE_EVENT ,
       payload:{
           event
       }
  }
}

export const updateEventAction:ActionCreator<IEventUpdateAction> =(event:Event) =>{
    return {
        type: EventActionTypes.UPDATE_EVENT ,
        payload:{
            event
        }
   }
}


export const deleteEventAction:ActionCreator<IEventDeleteAction> =(eventId:string) =>{
    return {
        type: EventActionTypes.DELETE_EVENT ,
        payload:{
            eventId
        }
   }
}

