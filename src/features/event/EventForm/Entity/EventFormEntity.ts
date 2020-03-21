import {Event} from '../../EventList/Entity/EventList';
export interface EventFormFromProp {
    cancelFormOpen:()=>void; 
    createEvent:(newEvent:Event)=>void; 
    selectedEvent:Event|null|undefined ;
    updateEvent:(updatedEvent:Event)=>void;
}

export interface EventFormFromState {
    event:Event
}
export interface FormControlEventTarget extends EventTarget{
    value: string;
    name:string
}