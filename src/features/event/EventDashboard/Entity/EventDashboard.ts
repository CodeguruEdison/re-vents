import { IModal } from './../../../modals/Entity/modal';

import {Event} from '../../EventList/Entity/EventList';
import {  RouteComponentProps } from "react-router-dom";
export interface EventDashboardFromProps extends RouteComponentProps {
    //Events:Event[]
   events:Event[],
   createEventAction:(event:Event)=>void,
   deleteEvent:(eventId:string)=>void,
   updateEvent:(event:Event)=>void,
   createEvent:(event:Event)=>void,
   openModal:(modal:IModal)=>void,
   selectedmodal:IModal
}

export interface EventDashboardFromState {
    //events:Event[]
    isOpen:boolean;
    selectedEvent?:Event |null
}

/*export interface Event {
    id:           string;
    title:        string;
    date:         string;
    category:     string;
    description:  string;
    city:         string;
    venue:        string;
    hostedBy:     string;
    hostPhotoURL: string;
    attendees:    Attendee[];
}

export interface Attendee {
    id:       string;
    name:     string;
    photoURL: string;
}*/

