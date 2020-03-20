import React, { FC } from 'react'
import { EventListAttendeFromProps } from './Entity/EventList';
import { List, Image } from 'semantic-ui-react';


const EventListAttending:FC<EventListAttendeFromProps> = props => {
   const {attendee} =props;
    return (
       <List.Item>
         <Image as ='a' size='mini' circular src ={attendee.photoURL}/>
       </List.Item>
    );
}


export default EventListAttending