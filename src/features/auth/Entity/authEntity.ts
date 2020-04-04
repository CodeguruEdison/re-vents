export interface ILoginProps {

  login:(cred:ILoginCredential)=>void; 
  //email:string,
  //password:string
}

export interface IRegisterProps{
    
}

export interface ILoginCredential {
    authenticated:boolean,
    currentUser:string
}

export interface IAuthState {
     authenticated:boolean,
     currentUser:string
}
export interface IUser {
  email:string ;
}