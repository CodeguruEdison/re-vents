import React, {
  FC,
  useState,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  useEffect,
  Fragment,
} from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { Event } from "../EventList/Entity/EventList";
import { reduxForm, Field, InjectedFormProps, initialize } from "redux-form";
import {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

import {
  IEventFormFromProp,
  // EventFormFromState,
  //FormControlEventTarget
} from "./Entity/EventFormEntity";
import { IApplicationState } from "../../../app/store/configureStore";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  deleteEventAction,
  updateEventAction,
  createEventAction,
  cancelToggleEventAction,
} from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
} from "revalidate";
import DateInput from "../../../app/common/form/DateInput";
import { PlaceInput } from "../../../app/common/form/PlaceInput";
import { withFirestore, WithFirestoreProps } from "react-redux-firebase";
import { useAsync } from "react-use";
import { toastr } from "react-redux-toastr";
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];
const EventForm: FC<(IEventFormFromProp & WithFirestoreProps) &
  InjectedFormProps<{}, IEventFormFromProp & WithFirestoreProps>> = (props) => {
  const {
    createEvent,
    updateEvent,
    handleSubmit,
    initialValues,
    history,
    invalid,
    submitting,
    pristine,
    match,
    firestore,
    cancelToggle
    
  } = props;

  const initialState: any = {
    // event: selectedEvent
    cityLatLng: {},
    venueLatLng: {},
  } as any;

  const [state, setState] = useState(initialState);
  
  console.log(cancelToggle);

  useEffect(() => {
    firestore
      .get(`events/${match.params.id}`)
      .then((event: any) => {
        if (!event.exists) {
          history.push("/events");
          toastr.error("Sorry", "Event Not Found");
        }
        else{
           setState({
            ...state,
            venueLatLng:event.data().venueLatLng
           });
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);
  const event = initialValues as Event;
  console.log('insidecomponenet ' + event.cancelled);
  const onFormSubmit = async (
    values: any
    //  values:any
  ) => {
    values.venueLatLng = state.venueLatLng;
    try {
      if (event.id) {
        updateEvent(values);
        history.push(`/events/${event.id}`);
      } else {
        console.log(values);
        const newEvent = await createEvent(values);
        console.log(newEvent);
        history.push(`/events/${newEvent.id}`);
      }
    } catch (error) {
      console.log(error);
    }
    //console.log(error)
  };
  const handleCitySelect = (
    selectedCity:
      | Readonly<InputHTMLAttributes<HTMLInputElement>>
      | Readonly<SelectHTMLAttributes<HTMLSelectElement>>
  ) => {
    const address: any = selectedCity.value!;
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      //.then(latLng => console.log('Success', latLng))
      .then((LatLng) => {
        //setState(...state,{city})
        setState((prevState: any) => ({
          ...prevState,
          cityLatLng: LatLng,
        }));
      })
      .then(() => {
        props.change("city", address);
      })
      .catch((error) => console.error("Error", error));
  };
  const handleVenueSelect = (
    selectedVenue:
      | Readonly<InputHTMLAttributes<HTMLInputElement>>
      | Readonly<SelectHTMLAttributes<HTMLSelectElement>>
  ) => {
    const address: string = selectedVenue.value!.toString();
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      //.then(latLng => console.log('Success', latLng))
      .then((LatLng) => {
        //setState(...state,{city})
        setState((prevState: any) => ({
          ...prevState,
          cityLatLng: LatLng,
        }));
      })
      .then(() => {
        props.change("city", address);
      })
      .catch((error) => console.error("Error", error));
  };
  const cancelToggles= async (eventId:string,cancelled:boolean)=>{
     cancelToggle(eventId,cancelled);
    
    firestore.get(`events/${match.params.id}`).then((event:any)=> {
      
      // props.reset();
     //props.dispatch(initialize('eventForm', event.data))
      console.log('cancelltoggels' + event)
    });
    
  }
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
              options={{ types: ["(cities)"] }}
              onSelect={handleCitySelect}
            />
            <Field
              name="venue"
              component={PlaceInput}
              placeholder="Event Venue"
              option={{
                location: new google.maps.LatLng(state.cityLatLng),
                radius: 1000,
                types: ["establishment"],
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
            <Button type='button' floated='right' content={event.cancelled? 'Reacctivate event':'Cancel event'} 
              color={event.cancelled?'green':'red'}
              onClick ={()=>cancelToggles(event.id!.toString(),!event.cancelled)} >
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
  //console.log('mapStateToProps');
  if (
    eventId &&
    state.firestore.ordered.events &&
    state.firestore.ordered.events.length > 0
  ) {
    event = state.firestore.ordered.events.filter(
      (event: Event) => event.id === eventId
    )[0] ||{};

   
  }
  console.log('initialValues'+ event.cancelled);
  return {
    initialValues: event,
  };
};
const mapDispatchToProps = {
  deleteEvent: deleteEventAction,
  updateEvent: updateEventAction,
  createEvent: createEventAction,
  cancelToggle: cancelToggleEventAction
};
const validate = combineValidators({
  title: isRequired({ message: "The Event title is required" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: " Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters",
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date"),
});
const form = reduxForm<{}, IEventFormFromProp & WithFirestoreProps>({
  form: "eventForm", // a unique identifier for this form
  validate: validate,
  enableReinitialize:true
})(EventForm);

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
export default withRouter(
  withFirestore(connect(mapStateToProps, mapDispatchToProps)(form))
);

//export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({form:'eventForm'})(EventForm))
