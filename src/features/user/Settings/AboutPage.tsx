import React, { FC } from 'react'
import { IAboutPageFromProp } from './Entity/SettingsEntity'
import { Segment, Header, Form, Divider, TextArea, Button } from 'semantic-ui-react';
import RadioInput from '../../../app/common/form/RadioInput';
import SelectInput from '../../../app/common/form/SelectInput';
import TextInput from '../../../app/common/form/TextInput';
import { PlaceInput } from '../../../app/common/form/PlaceInput';
import { Field, reduxForm, InjectedFormProps } from "redux-form";

/*export const AboutPage:FC<IAboutPageFromProp> = () => {
    return (
        <div>
            
        </div>
    )
}
export default AboutPage;
*/
const interests = [
    { key: 'drinks', text: 'Drinks', value: 'drinks' },
    { key: 'culture', text: 'Culture', value: 'culture' },
    { key: 'film', text: 'Film', value: 'film' },
    { key: 'food', text: 'Food', value: 'food' },
    { key: 'music', text: 'Music', value: 'music' },
    { key: 'travel', text: 'Travel', value: 'travel' }
  ];
  
export const AboutComponent:FC<IAboutPageFromProp & InjectedFormProps<{}, IAboutPageFromProp>> = (props) => {
   const  { pristine, submitting,handleSubmit,updateProfile} =props
    return (
      <Segment>
        <Header dividing size="large" content="About Me" />
        <p>Complete your profile to get the most out of this site</p>
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Form.Group inline>
            <label>Tell us your status: </label>
            <Field name="status" component={RadioInput} type="radio" value="single" label="Single" />
            <Field
              name="status"
              component={RadioInput}
              type="radio"
              value="relationship"
              label="Relationship"
            />
            <Field
              name="status"
              component={RadioInput}
              type="radio"
              value="married"
              label="Married"
            />
          </Form.Group>
          <Divider />
          <label>Tell us about yourself</label>
          <Field name="about" component={TextArea} placeholder="About Me" />
          <Field
            name="interests"
            component={SelectInput}
            options={interests}
            value="interests"
            multiple={true}
            placeholder="Select your interests"
          />
          <Field
            width={8}
            name="occupation"
            type="text"
            component={TextInput}
            placeholder="Occupation"
          />
          <Field
            width={8}
            name="origin"
            options={{ types: ['(regions)'] }}
            component={PlaceInput}
            placeholder="Country of Origin"
          />
          <Divider />
          <Button disabled={pristine || submitting} size="large" positive content="Update Profile" />
        </Form>
      </Segment>
    );
  };

const AboutPage = reduxForm<{}, IAboutPageFromProp>({
  form: "userProfile", // a unique identifier for this form
  //enableReinitialize: true
  // validate: validate
  destroyOnUnmount:false
})(AboutComponent);
export default AboutPage;