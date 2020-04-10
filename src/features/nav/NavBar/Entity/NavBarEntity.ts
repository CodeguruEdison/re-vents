import { IAuthState } from './../../../auth/Entity/authEntity';
import { IModal } from './../../../modals/Entity/modal';
import {  RouteComponentProps } from "react-router";
import { WithFirebaseProps, ExtendedAuthInstance } from 'react-redux-firebase';

export interface INavBarFromProps extends RouteComponentProps<{}>{
    openModal:(modal:IModal)=>void;
  // auth:ExtendedAuthInstance
     auth:any;
    logout:()=>void;
    profile:any
    
}
export interface NavBarFromState {
    authenticated :boolean
}

