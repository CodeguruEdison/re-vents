import React, { FC } from "react";
import { Segment, Item, List, Button, Icon } from "semantic-ui-react";
import EventListAttending from "./EventListAttending";

import { IEventListItemFromProp } from "./Entity/EventList";
import { Link } from "react-router-dom";

import {format} from 'date-fns';

const EventListItem: FC<IEventListItemFromProp> = props => {
  const { event,  deleteEvent } = props;
  console.log(event.attendees);
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> 
          {format(event.date.toDate(),'EEEE do LLL')} at {' '} 
          {format(event.date.toDate(),'h:mm:a')}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees &&
            Object.values(event.attendees).map((attendee,index) => (
              <EventListAttending key={index} attendee={attendee} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          as="a"
          onClick={() => deleteEvent(event.id!)}
          color="red"
          floated="right"
          content="Delete"
        ></Button>
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
        
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
