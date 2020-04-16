
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import firebase from "../../app/config/firebase";
import { toastr } from "react-redux-toastr";
import { getFirebase } from "react-redux-firebase";

export const updateProfileAction: ActionCreator<ThunkAction<
  Promise<void>,
  any,
  void,
  AnyAction
>> = (user: any) => {
  return async (
    dispatch: ThunkDispatch<any, void, AnyAction>
  ): Promise<void> => {
      try{
       const firebase = getFirebase()
        const {isLoaded,isEmpty,...updatedUser}=user;
         await firebase.updateProfile(updatedUser);
       toastr.success('Success','Your profile has been updated');
      
    }
    catch(error){
        console.log(error);
    }
      
  };
};
