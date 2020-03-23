import {Event} from '../../EventList/Entity/EventList';
export interface EventDashboardFromProps {
    //Events:Event[]
   events:Event[]
}

export interface EventDashboardFromState {
    events:Event[]
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

