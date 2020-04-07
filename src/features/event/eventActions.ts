import { asyncActionFinish } from "./../async/asyncActions";
import { fetchSampleData } from "./../../app/data/mockAPI";

import {
  IEventCreateAction,
  EventActionTypes,
  //IEventUpdateAction,
  IEventDeleteAction,
  IEventGetAllAction,
  //EventAction,
} from "./eventConstants";
import { Event } from "./EventList/Entity/EventList";
import { ActionCreator, Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IEventState } from "./IEventState";
import { asyncActionStart } from "../async/asyncActions";
import { toastr } from "react-redux-toastr";
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
  any,
  void,
  IEventCreateAction
>> = (event: Event) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: EventActionTypes.CREATE_EVENT,
        payload: {
          event,
        },
      });
      return toastr.success("Success!",'Event has been created');
    } catch (error) {
      return toastr.error("Error", error);
    }
  };
};




export const updateEventAction: ActionCreator<ThunkAction<
  void,
  any,
  void,
  IEventCreateAction
>> = (event: Event) => {
  return async (dispatch: Dispatch):Promise<void>=> {
    try {
     dispatch({
        type: EventActionTypes.UPDATE_EVENT,
        payload: {
          event
        },
      });
       toastr.success("Success!",'Event has been created');
    } catch (error) {
       toastr.error("Error", error);
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
