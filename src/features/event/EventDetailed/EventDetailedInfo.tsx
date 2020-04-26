import React, { FC } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import { IEventDetailedInfoProp } from "./Entity/EventDetailedEntity";
import {format} from 'date-fns';
export const EventDetailedInfo:FC<IEventDetailedInfoProp> = (props) => {
    const {event} =props;
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Row>
            <Grid.Column with={1}>
              <Icon color="teal" name="info" size="large" className="circle" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column with={1}>
              <Icon color="teal" name="calendar" size="large"  />
            </Grid.Column>
            <Grid.Column width={15}>
            { event.date && 
              <span>{format(event.date.toDate(),'EEEE do LLL')} at {' '} {format(event.date.toDate(),'h:mm:a')}</span>
            }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="marker" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={11}>
                <span>{event.venue}</span>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button color="teal" size="tiny" content="Show Map" />
              </Grid.Column>
            </Grid>
          </Segment>
    </Segment.Group>
  );
};

export default EventDetailedInfo;

