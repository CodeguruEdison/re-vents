import {
  IRegisterProps,
  IAuthRegisterProps,
  IUser,
  ISocialLoginPayload,
} from "./Entity/authEntity";
//import { IModalCloseAction } from './../modals/modalConstant';
//import { getFirebase } from 'react-redux-firebase';
import { closeModalAction } from "./../modals/modalActions";
import { ILoginCredential, IAuthState } from "./Entity/authEntity";
import { ActionCreator, Action, /*Dispatch,*/ AnyAction } from "redux";
import {
  IAuthLoginAction,
  AuthActionTypes,
  IAuthSignoutAction,
  IAuthRegisterAction,
  IAuthSocialLoginAction,
  SocialProviderEnum,
} from "./authConstant";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import firebase from "../../app/config/firebase";

import { SubmissionError } from "redux-form";

/*export const getSocialProvider:(firebase.auth.FacebookAuthProvider|
  firebase.auth.GoogleAuthProvider) => (selectedProvider:SocialProviderEnum):
  =>{
    
  const provider = selectedProvider === SocialProviderEnum.FaceBook
    ? new firebase.auth.FacebookAuthProvider()
    : new firebase.auth.GithubAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    }); 
  return  provider;   
}*/
const getSocialLoginProvider = (selectedProvider: SocialProviderEnum) => {
  const provider =
    selectedProvider === SocialProviderEnum.FaceBook
      ? new firebase.auth.FacebookAuthProvider()
      : new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    display: "popup",
  });
  return provider;
};
export const SocialLoginAction: ActionCreator<ThunkAction<
  Promise<void>,
  any,
  void,
  IAuthSocialLoginAction
>> = (payload: ISocialLoginPayload) => {
  return async (
    dispatch: ThunkDispatch<any, void, AnyAction>
  ): Promise<void> => {
    //const firestore = getFirestore();
    try {
      dispatch(closeModalAction(payload));
      const provider = getSocialLoginProvider(payload.selectedProvider);
      const result=await firebase.auth().signInWithPopup(provider);
      var user = result.user;
       console.log(user);
    } catch (error) {
      console.log(error);
     // throw new SubmissionError({ _error: error.message });
    }
  };
};

export const RegisterUserAction: ActionCreator<ThunkAction<
  Promise<void>,
  any,
  void,
  IAuthRegisterAction
>> = (payload: IAuthRegisterProps) => {
  return async (
    dispatch: ThunkDispatch<any, void, AnyAction>
  ): Promise<void> => {
    //const firestore = getFirestore();
    try {
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);
      console.log(createdUser);
      await createdUser.user?.updateProfile({
        displayName: payload.displayName,
      });
      let newUser = {
        displayName: payload.displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await firebase
        .firestore()
        .collection("users")
        .doc(createdUser.user?.uid)
        .set({ ...newUser });
      dispatch(closeModalAction(payload));
    } catch (error) {
      console.log(error);
      throw new SubmissionError({ _error: error.message });
    }
  };
};

export const LoginAction: ActionCreator<ThunkAction<
  Promise<void>,
  //void,
  IAuthState,
  void,
  IAuthLoginAction
>> = (payload: ILoginCredential) => {
  return async (
    dispatch: ThunkDispatch<IAuthState, void, AnyAction>
  ): Promise<void> => {
    // const firebase= getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
    } catch (error) {
      console.log(error);
      throw new SubmissionError({ _error: error.message });
      //SubmissionError(error);
    }
    dispatch(closeModalAction(payload));
  };
};

export const LogoutAction: ActionCreator<IAuthSignoutAction> = () => {
  return { type: AuthActionTypes.SIGN_OUT_USER };
};
