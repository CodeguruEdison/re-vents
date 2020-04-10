import { SocialProviderEnum } from './../authConstant';
import { IAuthSocialLoginAction } from "../authConstant";

export interface ILoginProps {

  login:(cred:ILoginCredential)=>Promise<void>; 
  sociallogin:(socialLoginPayload:ISocialLoginPayload)=>Promise<void>;
  //email:string,
  //password:string
}

export interface IRegisterProps{
  register:(cred:IAuthRegisterProps)=>Promise<void>;
  sociallogin:(socialLoginPayload:ISocialLoginPayload)=>Promise<void>;
}

export interface ILoginCredential {
    authenticated:boolean,
    currentUser:string
    email:string,
    password:string
}

export interface IAuthState {
     authenticated:boolean,
     currentUser:string
}
export interface IUser {
  email:string ;
}
export interface IAuthRegisterProps {
   displayName:string,
   email:string,
   password:string
}
export interface ISocialLogin{
  sociallogin:(socialLoginPayload:ISocialLoginPayload)=>Promise<void>;
}
export interface ISocialLoginPayload{
  selectedProvider:SocialProviderEnum
}