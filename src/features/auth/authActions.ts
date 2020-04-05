import { closeModalAction } from "./../modals/modalActions";
import { ILoginCredential, IAuthState } from "./Entity/authEntity";
import { ActionCreator, Action, Dispatch } from "redux";
import {
  IAuthLoginAction,
  AuthActionTypes,
  IAuthSignoutAction,
} from "./authConstant";
import { ThunkAction } from "redux-thunk";

/*export const LoginAction1: ActionCreator<ThunkAction<
  Promise<Action>,
  IAuthState,
  void,
  IAuthLoginAction
>> = (payload: ILoginCredential) => {
  return (dispatch: Dispatch): Action => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER,
      payload: payload,
    });
    return dispatch(closeModalAction(payload));
  };
};
*/


export const LoginAction: ActionCreator<ThunkAction<
  Promise<Action>,
  IAuthState,
  void,
  IAuthLoginAction
>> = (payload: ILoginCredential) => {
  return async (dispatch: Dispatch): Promise<Action>  => {
    try {
        dispatch({
            type: AuthActionTypes.LOGIN_USER,
            payload: payload,
          });
      //const events = await fetchSampleData();
     // dispatch({type: EventActionTypes.GETALLEVENTS, payload: {events}});
     return dispatch(closeModalAction(payload));
    } catch (err) {
      console.log(err);
      return dispatch(closeModalAction(payload));
    }
  };
};




export const LogoutAction: ActionCreator<IAuthSignoutAction> = () => {
  return { type: AuthActionTypes.SIGN_OUT_USER };
};
