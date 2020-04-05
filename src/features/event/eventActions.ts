import { asyncActionFinish } from "./../async/asyncActions";
import { fetchSampleData } from "./../../app/data/mockAPI";

import {
  IEventCreateAction,
  EventActionTypes,
  IEventUpdateAction,
  IEventDeleteAction,
  IEventGetAllAction,
  EventAction,
} from "./eventConstants";
import { Event } from "./EventList/Entity/EventList";
import { ActionCreator, AnyAction, Dispatch,Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IEventState } from "./IEventState";
import { asyncActionStart } from "../async/asyncActions";
// Action Creators
export const createEventAction: ActionCreator<IEventCreateAction> = (
  event: Event
) => {
  return {
    type: EventActionTypes.CREATE_EVENT,
    payload: {
      event,
    },
  };
};

export const updateEventAction: ActionCreator<IEventUpdateAction> = (
  event: Event
) => {
  return {
    type: EventActionTypes.UPDATE_EVENT,
    payload: {
      event,
    },
  };
};

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

/*export const loadEvents = () => {
    return async (dispatch:Dispatch) => {
        try {
            dispatch(asyncActionStart({ loading: true }))
            const events = await fetchSampleData();
            dispatch({type: EventActionTypes.GETALLEVENTS, payload: {events}})
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error)
            dispatch(asyncActionFinish({ loading: false }))
        }
    }
}*/
/*export const getProducts = () => {
  return async dispatch => {
        dispatch(asyncActionStart({ loading: true }));
        const products = await fetchSampleData();
        dispatch({
        products,
        type:EventActionTypes.GETALLEVENTS,
        });
        dispatch(asyncActionFinish({ loading: false }));

  };
};
*/


export const getAllEvents: ActionCreator<ThunkAction<
  Promise<Action>,
  IEventState,
  void,
  IEventGetAllAction
>> = () => {
  return async (dispatch: Dispatch): Promise<Action>  => {
    try {
      dispatch(asyncActionStart({ loading: true }));
      const events = await fetchSampleData();
      dispatch({type: EventActionTypes.GETALLEVENTS, payload: {events}});
     return dispatch(asyncActionFinish({ loading: false }));
    } catch (err) {
      console.log(err);
      return dispatch(asyncActionFinish({ loading: false }));
    }
  };
};

