import { ILoginCredential } from './Entity/authEntity';
import { ActionCreator } from 'redux';
import { IAuthLoginAction, AuthActionTypes, IAuthSignoutAction } from './authConstant';


export const LoginAction:ActionCreator<IAuthLoginAction>=(payload:ILoginCredential)=>{
    return {
        type:AuthActionTypes.LOGIN_USER,
        payload:payload
    }
}

export const LogoutAction :ActionCreator<IAuthSignoutAction>=()=>{
    return {type:AuthActionTypes.SIGN_OUT_USER}
}