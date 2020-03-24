import React, { Fragment, FC } from "react";
import { Segment, List, Item,Image,Label } from "semantic-ui-react";
import { IEventDetailedSideBarProp } from "./Entity/EventDetailedEntity";

export const EventDetailedSideBar:FC<IEventDetailedSideBarProp> = (props) => {

  const {attendees} =props;
  const isHost = false;

  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length} {attendees && attendees.length ===1?'Person':'People'}  Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
         {attendees && attendees.map((attendee)=>(
            <List.Item style={{ position: "relative" }} key={attendee.id}>
          {isHost &&  <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>}
            <Image size="tiny" src= {attendee.photoURL} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                {attendee.name}
              </Item.Header>
            </Item.Content>
          </List.Item>
         ))} 
        
        </List>
      </Segment>
    </Fragment>
  );
};

export default EventDetailedSideBar;
