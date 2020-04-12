import { ILoginCredential, IRegisterProps } from "./Entity/authEntity";

export enum AuthActionTypes {
  LOGIN_USER = "LOGIN_USER",
  SIGN_OUT_USER = "SIGN_OUT_USER",
  REGISTER_USER = "REGISTER_USER",
  SOCIAL_LOGIN = "SCOIAL_LOGIN",
  UPDATE_PASSWORD ='UPDATE_PASSWPRD'
}
export enum SocialProviderEnum {
    FaceBook,
    Google
}
export interface IAuthLoginAction {
  type: AuthActionTypes.LOGIN_USER;
  payload: ILoginCredential;
}
export interface IAuthSignoutAction {
  type: AuthActionTypes.SIGN_OUT_USER;
}
export interface IAuthRegisterAction {
  type: AuthActionTypes.REGISTER_USER;
  payload: IRegisterProps;
}
export interface IAuthUpdatePasswordAction {
   type:AuthActionTypes.UPDATE_PASSWORD,
   payload:string
}
export interface IAuthSocialLoginAction {
  type: AuthActionTypes.SOCIAL_LOGIN;
  payload: { selectedProvider: SocialProviderEnum };
}
export type AuthAction =
  | IAuthLoginAction
  | IAuthSignoutAction
  | IAuthRegisterAction
  | IAuthSocialLoginAction
  | IAuthUpdatePasswordAction;
