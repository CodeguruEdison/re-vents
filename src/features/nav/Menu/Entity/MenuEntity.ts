import { IUser } from './../../../auth/Entity/authEntity';

export interface  ISignedInMenuFromProp {
    signout:()=>void 
   // currentUser: string,
    auth:any
}

export interface SignedOutMenusFromProp {
    signIn:()=>void;
    register:()=>void;
}