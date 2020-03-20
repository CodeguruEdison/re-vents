import React, { FC, FormEvent, useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import {
  EventFormFromProp,
  EventFormFromState,
  FormControlEventTarget
} from "./Entity/EventFormEntity";

const EventForm: FC<EventFormFromProp> = props => {
  const { cancelFormOpen,createEvent } = props;
  const initialState: EventFormFromState = {
    event: {
      id: 0,
      title: "",
      date: "",
      category: "",
      description: "",
      city: "",
      venue: "",
      hostedBy: "",
      hostPhotoURL: "",
      attendees: []
    }
  } as any;
  const [state, setState] = useState<EventFormFromState>(initialState);
  const { title, date, city, venue, hostedBy } = state.event;
  const handleFormSubmit = async (
    evt: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    evt.preventDefault();
    createEvent(state.event);
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

  return (
    <Segment>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Event Title</label>
          <input
            value={title}
            name="title"
            placeholder="First Title"
            onChange={handleInputChange}
          />
        </Form.Field>
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
        <Button type="button" onClick={cancelFormOpen}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
export default EventForm;
