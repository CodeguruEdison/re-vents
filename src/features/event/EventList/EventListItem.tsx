import React, { FC } from 'react'
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttending from './EventListAttending';

import { EventListItemFromProp } from './Entity/EventList';


const EventListItem:FC<EventListItemFromProp> = props => {
    const {event} = props;
    return (
        <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header >{event.title}</Item.Header>
                <Item.Description>
                  Hosted by {event.hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
           {event.attendees && event.attendees.map(attendee =>(
              <EventListAttending key={attendee.id} attendee={attendee} />
           ))} 
          </List>
        </Segment>
        <Segment clearing>
        <span>{event.description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
}


export default EventListItem