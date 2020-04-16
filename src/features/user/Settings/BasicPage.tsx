import React, { FC } from "react";
import { IBasicPageFromProp } from "./Entity/SettingsEntity";
import { Segment, Header, Form, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import DateInput from "../../../app/common/form/DateInput";
import { PlaceInput } from "../../../app/common/form/PlaceInput";
import RadioInput from "../../../app/common/form/RadioInput";
import moment from 'moment';
import { addYears } from "date-fns";
export const BasicComponent: FC<IBasicPageFromProp &
  InjectedFormProps<{}, IBasicPageFromProp>> = props => {
  const { pristine, submitting, updateProfile,handleSubmit } = props;
  //console.log(JSON.stringify(user))
   const onFormsubmit=(value:any)=>{
      updateProfile(value)
   }
  return (
    <Segment>
      <Header dividing size="large" content="Basics" />
      <Form onSubmit={handleSubmit(onFormsubmit)}>
        <Field
          width={8}
          name="displayName"
          type="text"
          component={TextInput}
          placeholder="Known As"
        />
        <Form.Group inline>
         <label>Gender:</label>
          <Field
            name="gender"
            type="radio"
            value="male"
            label="Male"
            component={RadioInput}
          />

          <Field
            name="gender"
            type="radio"
            value="female"
            label="FeMale"
            component={RadioInput}
          />
        </Form.Group>
        <Field
          width={8}
          name="dateOfBirth"
          component={DateInput}
          placeholder="Date of Birth"
          dateFormat='MM-dd-yyyy'
          showYearDropdown ={true}
          showMonthDropdown ={true}
          dropdownMode='select'
          
          maxDate={addYears(new Date(), -18)}
               />
        <Field
          name="city"
          placeholder="Home Town"
          options={{ types: ["(cities)"] }}
          label="Female"
          component={PlaceInput}
          width={8}
        />
        <Divider />
        <Button
          disabled={pristine || submitting}
          size="large"
          positive
          content="Update Profile"
        />
      </Form>
    </Segment>
  );
};
const BasicPage = reduxForm<{}, IBasicPageFromProp>({
  form: "userProfile", // a unique identifier for this form
  enableReinitialize: true,
  destroyOnUnmount:false
  // validate: validate
})(BasicComponent);

export default BasicPage;

//export default reduxForm({form: 'userProfile'})(BasicPage);
