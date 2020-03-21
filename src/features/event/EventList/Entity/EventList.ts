export interface  EventListAttendeFromProps {
 attendee :Attendee
}
export interface EventListAttendeFromState {
    
}
export interface EventListFromProps {
    events:Event[];
    selectEvent:(event:Event) => void;
    deleteEvent:(id:string) => void;
}
export interface EventListItemFromProp {
    event:Event
    selectEvent:(event:Event)=>void;
    deleteEvent:(id:string) => void;
}
export interface Event {
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
}

