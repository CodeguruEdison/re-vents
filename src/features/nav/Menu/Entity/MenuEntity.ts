import { IUser } from './../../../auth/Entity/authEntity';

export interface  SignedInMenuFromProp {
    signout:()=>void 
    currentUser: string
}

export interface SignedOutMenusFromProp {
    signIn:()=>void;
    register:()=>void;
}