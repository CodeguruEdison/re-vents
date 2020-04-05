
import { ActionCreator } from "redux";
import {
  IAsyncActionStart,
  AsyncActionTypes,
  IAsyncActionFinish,
  IAsyncActionError,
} from "./asyncConstants";
import { IAsyncPayload } from './Entity/asyncEntity';

export const asyncActionStart: ActionCreator<IAsyncActionStart> = (payload:IAsyncPayload) => {
  return {
    type: AsyncActionTypes.ASYNC_ACTION_START,
    payload
  };
};
export const asyncActionFinish: ActionCreator<IAsyncActionFinish> = (payload:IAsyncPayload) => {
  return {
    type: AsyncActionTypes.ASYNC_ACTION_FINISH,
    payload
  };
};
export const asyncActionError: ActionCreator<IAsyncActionError> =  (payload:IAsyncPayload) => {
  return {
    type: AsyncActionTypes.ASYNC_ACTION_ERROR,
     payload
  };
};
/*

export const createEventAction:ActionCreator<IEventCreateAction>=(event:Event)=>{
  return {
       type: EventActionTypes.CREATE_EVENT ,
       payload:{
           event
       }
  }
}
*/
