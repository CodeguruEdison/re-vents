
import { AsyncAction, AsyncActionTypes } from "./asyncConstants";
import { IAsyncState } from "./Entity/asyncEntity";
import { Reducer } from "redux";

const initialAsyncState: IAsyncState = {
  loading: false,
  elementName: null,
};

export const asyncReducer: Reducer<IAsyncState, AsyncAction> = (
  state = initialAsyncState,
  action
): IAsyncState => {
  switch (action.type) {
    case AsyncActionTypes.ASYNC_ACTION_START: {
      return {
        ...state,
         loading:true
      };
    }
    case AsyncActionTypes.ASYNC_ACTION_FINISH:{
        return {
            ...state,
            loading:false
        }
    }
    case AsyncActionTypes.ASYNC_ACTION_ERROR:{
        return {
            ...state,
            loading:false
        }
    }

    default:
      return state;
  }
};

export default asyncReducer;
