import { IModal } from './../../../modals/Entity/modal';
import {  RouteComponentProps } from "react-router";

export interface INavBarFromProps extends RouteComponentProps {
    openModal:(modal:IModal)=>void;
}
export interface NavBarFromState {
    authenticated :boolean
}
