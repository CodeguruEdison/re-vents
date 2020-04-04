import React, { FC, useState, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { Event } from "../EventList/Entity/EventList";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

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
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import DateInput from "../../../app/common/form/DateInput";
import moment from "moment";
import { PlaceInput } from "../../../app/common/form/PlaceInput";
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
    initialValues,
    history,
    invalid,
    submitting,
    pristine
  } = props;

  const initialState: any = {
    // event: selectedEvent
    cityLatLng: {},
    venueLatLng: {}
  } as any;

  const [state, setState] = useState(initialState);

  const event = initialValues as Event;
  const onFormSubmit = (
    values: any
    //  values:any
  ) => {
     values.venueLatLng = state.venueLatLng;
    //console.log(values)
    if (event.id) {
      updateEvent(values);
      history.push(`/events/${event.id}`);
    } else {
      const newEvent: Event = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        date: moment(values.date).format("MM/DD/YYYY HH:mm a"),
        hostedBy: "BOB"
      };
      // newEvent.hostedBy = "/assets/user.png";
      console.log(values);
      createEvent(newEvent);
      history.push(`/events/${newEvent.id}`);
    }
  };
  const handleCitySelect = (selectedCity: Readonly<InputHTMLAttributes<HTMLInputElement>> | Readonly<SelectHTMLAttributes<HTMLSelectElement>>) => {
    const address:string =selectedCity.value!.toString();
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      //.then(latLng => console.log('Success', latLng))
      .then(LatLng => {
        //setState(...state,{city})
        setState((prevState: any) => ({
          ...prevState,
          cityLatLng: LatLng
        }));
      })
      .then( ()=>{
         props.change('city',address)
      })
      .catch(error => console.error("Error", error));
  };
  const handleVenueSelect = (selectedVenue: Readonly<InputHTMLAttributes<HTMLInputElement>> | Readonly<SelectHTMLAttributes<HTMLSelectElement>>) => {
    const address:string =selectedVenue.value!.toString();
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      //.then(latLng => console.log('Success', latLng))
      .then(LatLng => {
        //setState(...state,{city})
        setState((prevState: any) => ({
          ...prevState,
          cityLatLng: LatLng
        }));
      })
      .then( ()=>{
         props.change('city',address)
      })
      .catch(error => console.error("Error", error));
  };
  //const handleCitySelect = selectedCity =

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
            <Field
              name="city"
              component={PlaceInput}
              placeholder="Event city"
              options={{types:['(cities)']}}
              onSelect={handleCitySelect}
            />
            <Field
              name="venue"
              component={PlaceInput}
              placeholder="Event Venue"
              option={{
                location: new google.maps.LatLng(state.cityLatLng),
                radius:1000,
                types:['establishment']
              }}
              onSelect={handleVenueSelect}
            />
            <Field name="date" component={DateInput} placeholder="Event Date" />

            <Button
              positive
              type="submit"
              disabled={invalid || submitting || pristine}
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={
                event.id
                  ? () => history.push(`/events/${event.id}`)
                  : () => history.push("/events")
              }
            >
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
const validate = combineValidators({
  title: isRequired({ message: "The Event title is required" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: " Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});
const form = reduxForm<{}, IEventFormFromProp>({
  form: "eventForm", // a unique identifier for this form
  validate: validate
})(EventForm);

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(form));

//export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({form:'eventForm'})(EventForm))
