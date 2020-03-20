import {Event} from '../../EventDashboard/Entity/EventDashboard'
export interface EventFormFromProp {
    cancelFormOpen:()=>void; 
    createEvent:(newEvent:Event)=>void;  
}

export interface EventFormFromState {
    event:Event
}
export interface FormControlEventTarget extends EventTarget{
    value: string;
    name:string
}