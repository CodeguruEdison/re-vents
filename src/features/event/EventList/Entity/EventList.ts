export interface  EventListAttendeFromProps {
 attendee :Attendee
}
export interface EventListAttendeFromState {
    
}
export interface EventListFromProps {
    events:Event[];
}
export interface EventListItemFromProp {
    event:Event
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
