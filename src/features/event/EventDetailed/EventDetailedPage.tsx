import React, { FC } from "react";
import { IEventDetailedFromProp } from "./Entity/EventDetailedEntity";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChart from "./EventDetailedChart";
import EventDetailedSideBar from "./EventDetailedSideBar";
import { Event } from "../EventList/Entity/EventList";
import { IApplicationState } from "../../../app/store/configureStore";
import { connect } from "react-redux";


export const EventDetailedPage: FC<IEventDetailedFromProp> = props => {
  const { event } = props;
  //console.log(props.match.params.id);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChart />
      </Grid.Column>
      {
        <Grid.Column width={6}>
          {event.attendees && (
            <EventDetailedSideBar attendees={event.attendees} />
          )}
        </Grid.Column>
      }
    </Grid>
  );
};
const mapStateToProps = (
  store: IApplicationState,
  ownProps: IEventDetailedFromProp
) => {
    const eventId =ownProps.match.params.id;
   let event:Event = {} as any;
    if( eventId && store.event.events.length>0){
      event= store.event.events.filter(event =>event.id ===eventId)[0]
    }
  return {
    event
  };
};
export default connect(mapStateToProps)(EventDetailedPage);
