export interface  EventListAttendeFromProps {
 attendee :Attendee
}
export interface EventListAttendeFromState {
    
}
export interface IEventListFromProps {
    events:Event[];
    //selectEvent:(event:Event) => void;
    deleteEvent:(id:string) => void;
}
export interface IEventListItemFromProp {
    event:Event
    //selectEvent:(event:Event)=>void;
    deleteEvent:(id:string) => void;
}
export interface Event {
    id?:           string;
    title:        string;
    date:         any;
    category:     string;
    description:  string;
    city:         string;
    venue:        string;
    hostedBy:     string;
    hostPhotoURL: string;
    attendees:    Attendee[];
    cancelled:    boolean
}

export interface Attendee {
    id:       string;
    name:     string;
    photoURL: string;
    host?:boolean;
    going?:true;
    joinDate?:Date
    displayName?:string;
}

export interface IEventCancel {
    cancelled:boolean,
    eventId:string
}