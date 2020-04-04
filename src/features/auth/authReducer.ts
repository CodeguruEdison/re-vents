import { AuthAction, AuthActionTypes } from './authConstant';
import { IAuthState } from './Entity/authEntity';
import { Reducer } from 'redux';

const initialAuthState:IAuthState={
    authenticated:false,
    currentUser:''
} ;

export  const authReducer :Reducer<IAuthState,AuthAction> =(
 state=initialAuthState,
 action:AuthAction
):IAuthState =>{
     switch(action.type){
         case AuthActionTypes.LOGIN_USER:{
             return {
                 ...state,
                 authenticated:action.payload.authenticated,
                 currentUser: action.payload.currentUser
                /* currentUser:{
                     ...state?.currentUser,
                     email:action.payload.currentUser
                 }*/
             }
         }
         case AuthActionTypes.SIGN_OUT_USER:{
            return {
                ...state,
                authenticated:false,
                currentUser:''
            } 
         }
        default:
            return state;
     }
}
export default authReducer;