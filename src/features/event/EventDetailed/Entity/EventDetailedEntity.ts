import { Event, Attendee } from './../../EventList/Entity/EventList';
import { RouteComponentProps } from 'react-router-dom';
interface MatchParams {
    id: string;
}
export interface IEventDetailedFromProp extends RouteComponentProps<MatchParams> {
    event:Event
}

export interface IEventDetailedHeaderProp {
    event:Event
}

export interface IEventDetailedInfoProp {
    event:Event
}
export interface IEventDetailedSideBarProp {
    attendees:Attendee[]
}