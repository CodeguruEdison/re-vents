import { RouteComponentProps } from 'react-router-dom';
import {Event} from '../../EventList/Entity/EventList';
interface MatchParams {
    id: string;
}


export interface IEventFormFromProp extends RouteComponentProps<MatchParams> {
   // cancelFormOpen:()=>void; 
    createEvent:(newEvent:Event)=>void; 
    selectedEvent:Event ;
    updateEvent:(updatedEvent:Event)=>void;
}

export interface EventFormFromState {
    event:Event 
}
export interface FormControlEventTarget extends EventTarget{
    value: string;
    name:string
}