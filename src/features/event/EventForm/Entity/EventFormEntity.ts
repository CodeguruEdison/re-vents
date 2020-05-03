import { ConfiguredCombinedValidator } from 'revalidate';
import { RouteComponentProps } from 'react-router-dom';
import {Event} from '../../EventList/Entity/EventList';
interface MatchParams {
    id: string;
}


export interface IEventFormFromProp extends RouteComponentProps<MatchParams> {
   // cancelFormOpen:()=>void; 
    createEvent:(newEvent:Event)=> Promise<any>; 
    selectedEvent:Event ;
    updateEvent:(updatedEvent:Event)=>void;
    cancelToggle:(eventId: string,cancelled:boolean)=>void;
   
}

export interface EventFormFromState {
    event:Event 
}
export interface FormControlEventTarget extends EventTarget{
    value: string;
    name:string
}