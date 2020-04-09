
import { ILoginCredential, IRegisterProps } from "./Entity/authEntity";

export enum AuthActionTypes {
    LOGIN_USER ='LOGIN_USER',
    SIGN_OUT_USER ='SIGN_OUT_USER',
    REGISTER_USER ='REGISTER_USER'
}

export interface IAuthLoginAction {
    type:AuthActionTypes.LOGIN_USER,
    payload:ILoginCredential
}
export interface IAuthSignoutAction {
    type:AuthActionTypes.SIGN_OUT_USER
}
export interface IAuthRegisterAction {
    type: AuthActionTypes.REGISTER_USER
    payload:IRegisterProps
}
export type AuthAction = IAuthLoginAction |IAuthSignoutAction |IAuthRegisterAction;