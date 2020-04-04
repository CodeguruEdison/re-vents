import { IAuthState } from './../../../auth/Entity/authEntity';
import { IModal } from './../../../modals/Entity/modal';
import {  RouteComponentProps } from "react-router";

export interface INavBarFromProps extends RouteComponentProps<{}> {
    openModal:(modal:IModal)=>void;
    auth:IAuthState;
    logout:()=>void;
}
export interface NavBarFromState {
    authenticated :boolean
}
