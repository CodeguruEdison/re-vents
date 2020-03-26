import React, {FC} from "react";
import {
  Segment,
  Form,
  Button,
  Grid,
  Header
  
} from "semantic-ui-react";
import { Event } from "../EventList/Entity/EventList";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import cuid from "cuid";
import {
  IEventFormFromProp
 // EventFormFromState,
  //FormControlEventTarget
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
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];
const EventForm: FC<IEventFormFromProp &
  InjectedFormProps<{}, IEventFormFromProp>> = props => {
  const {
    createEvent,
    updateEvent,
    handleSubmit,
    initialValues,history
  } = props;

  /*const initialState: EventFormFromState = {
    event: selectedEvent
  } as any;

  const [state, setState] = useState<EventFormFromState>(initialState);
  */
  const event = initialValues as Event;
  const onFormSubmit = (
    values: any
    //  values:any
  ) => {
    //console.log(values)
    if (event.id) {
      updateEvent(values);
      history.push(`/events/${event.id}`);
    } else {
      const newEvent: Event = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy:"BOB"
      };
      // newEvent.hostedBy = "/assets/user.png";
      console.log(values)
      createEvent(newEvent);
      history.push(`/events/${newEvent.id}`);
    }
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Header sub color="teal" content="Event Details"></Header>

          <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
            <Field
              name="title"
              component={TextInput}
              placeholder="Give your event a name"
            />
            <Field
              name="category"
              component={SelectInput}
              options={category}
              placeholder="What is your event about?"
            />
            <Field
              name="description"
              component={TextArea}
              placeholder="Tell us about your event?"
              rows={3}
            />
            <Header sub color="teal" content="Event Location Details"></Header>
            <Field name="city" component={TextInput} placeholder="Event city" />
            <Field
              name="venue"
              component={TextInput}
              placeholder="Event Venue"
            />
            <Field name="date" component={TextInput} placeholder="Event Date" />

            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={event.id 
                ? ()=> history.push(`/events/${event.id}`)
                : ()=> history.push('/events')
              }>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
const mapStateToProps = (
  state: IApplicationState,
  ownProps: IEventFormFromProp
) => {
  const eventId = ownProps.match.params.id;
  let event: Event = {} as any;
  if (eventId && state.event.events.length > 0) {
    event = state.event.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};
const mapDispatchToProps = {
  deleteEvent: deleteEventAction,
  updateEvent: updateEventAction,
  createEvent: createEventAction
};

const form = reduxForm<{}, IEventFormFromProp>({
  form: "eventForm" // a unique identifier for this form
})(EventForm);

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(form));

//export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({form:'eventForm'})(EventForm))
