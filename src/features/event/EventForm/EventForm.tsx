import React, { FC, FormEvent, useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { Event } from "../EventList/Entity/EventList";
import {reduxForm,Field,InjectedFormProps} from 'redux-form';
import cuid from "cuid";
import {
  IEventFormFromProp,
  EventFormFromState,
  FormControlEventTarget
} from "./Entity/EventFormEntity";
import { IApplicationState } from "../../../app/store/configureStore";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  deleteEventAction,
  updateEventAction,
  createEventAction
} from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";

const EventForm: FC<IEventFormFromProp & InjectedFormProps<{}, IEventFormFromProp>> = props => {
  const { createEvent, selectedEvent, updateEvent } = props;
  const initialState: EventFormFromState = {
    event: selectedEvent
  } as any;

  const [state, setState] = useState<EventFormFromState >(initialState);
  const { title, date, city, venue, hostedBy } = state.event;
  const handleFormSubmit = async (
    evt: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    evt.preventDefault();
    if (state.event.id) {
      updateEvent(state.event);
      props.history.push(`/events/${state.event.id}`);
    } else {
      const newEvent: Event = {
        ...state.event,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      newEvent.hostedBy = "/assets/user.png";
      createEvent(newEvent);
      props.history.push(`/events`);
    }
  };
  const handleInputChange = (e: FormEvent) => {
    var target = e.target as FormControlEventTarget;
    const { name, value } = target;
    console.log(target.name);
    setState(prevState => ({
      ...prevState,
      event: {
        ...prevState.event,
        [name]: value
      }
    }));
  };
  useEffect(() => {
    if (selectedEvent != null) {
      setState(prevState => ({
        ...prevState,
        event: selectedEvent
      }));
    }
  }, [selectedEvent]);
  return (
    <Segment>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
       {/* <Form.Field>
          <label>Event Title</label>
          <TextInput
            value={title}
            name="title"
            placeholder="First Title"
            onChange={handleInputChange}
          />
        
  </Form.Field>*/}
        <Field name="title" value={title} component={TextInput} placeholder='Event Title'> </Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            type="date"
            value={date}
            name="date"
            placeholder="Event Date"
            onChange={handleInputChange}
          />
        </Form.Field>
        *
        <Form.Field>
          <label>City</label>
          <input
            placeholder="City event is taking place"
            value={city}
            name="city"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            placeholder="Enter the Venue of the event"
            name="venue"
            value={venue}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            placeholder="Enter the name of person hosting"
            name="hostedBy"
            value={hostedBy}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button type="button" onClick={props.history.goBack}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
const mapStateToProps = (
  state: IApplicationState,
  ownProps: IEventFormFromProp
) => {
  const eventId = ownProps.match.params.id;
  let event: Event = {
    title: "",
    date: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    hostedBy: "",
    hostPhotoURL: "",
    attendees: []
  };
  if (eventId && state.event.events.length > 0) {
    event = state.event.events.filter(event => event.id === eventId)[0];
  }
  return {
    selectedEvent: event
  };
};
const mapDispatchToProps = {
  deleteEvent: deleteEventAction,
  updateEvent: updateEventAction,
  createEvent: createEventAction
};


const form = reduxForm<{}, IEventFormFromProp>({
  form: 'eventForm' // a unique identifier for this form
})(EventForm)

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(form));



  //export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({form:'eventForm'})(EventForm))
