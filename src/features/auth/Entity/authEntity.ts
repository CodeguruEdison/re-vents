
export interface ILoginProps {

  login:(cred:ILoginCredential)=>Promise<void>; 
  //email:string,
  //password:string
}

export interface IRegisterProps{
  register:(cred:IAuthRegisterProps)=>Promise<void>;
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
  
}