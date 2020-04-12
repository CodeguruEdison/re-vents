import React, { FC, useState } from "react";
import { IAccountPageFromProp } from "./Entity/SettingsEntity";
import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon
} from "semantic-ui-react";
import { Field, reduxForm, InjectedFormProps, SubmissionError } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  isAlphabetic,
  isNumeric,
  matchesField
} from "revalidate";
export interface IErrorState {
  formerror: string | null;
}
const validate = combineValidators({
  newPassword1: isRequired({ message: "Please enter a password" }),
  newPassword2: composeValidators(
    isRequired({ message: "Please confirm your new password" }),
    matchesField(
      "newPassword1",
      "newPassword2"
    )({ message: "Password do not match" })
  )()
});
const Account: FC<IAccountPageFromProp &
  InjectedFormProps<{}, IAccountPageFromProp, any>> = props => {
  const { error, invalid, submitting, updatePassword, handleSubmit ,providerId} = props;
  const [state, setState] = useState<IErrorState>({ formerror: null });
 
  //console.log('AccountPage'+ JSON.stringify(props));
  //console.log('error',props);
  const onFormSubmit = (values: any) => {
    updatePassword(values.newPassword1)
    .catch(err=>{
     setState({ formerror: err.errors._error });
    // throw new SubmissionError({ _error: error.message });
    })
  };
  const { formerror } = state;
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      <div>
        <Header color="teal" sub content="Change password" />
        <p>Use this form to update your account settings</p>
        {providerId && providerId==='password' && 
        (<Form onSubmit={handleSubmit(onFormSubmit)}>
          <Field
            width={8}
            name="newPassword1"
            type="password"
            pointing="left"
            inline={true}
            component={TextInput}
            basic={true}
            placeholder="New Password"
          />
          <Field
            width={8}
            name="newPassword2"
            type="password"
            inline={true}
            basic={true}
            pointing="left"
            component={TextInput}
            placeholder="Confirm Password"
          />
          {formerror && (
            <Label basic color="red">
              {formerror}
            </Label>
          )}
          <Divider />
         <Button
            size="large"
            disabled={invalid || submitting}
            positive
            content="Update Password"
          />
        
        </Form>)
      }
      </div>
      {providerId && providerId==='facebook.com' && 
      (<div>
        <Header color="teal" sub content="Facebook Account" />
        <p>Please visit Facebook to update your account settings</p>
        <Button type="button" color="facebook">
          <Icon name="facebook" />
          Go to Facebook
        </Button>
      </div>)
    }
    {providerId && providerId==='google.com' && (
      <div>
        <Header color="teal" sub content="Google Account" />
        <p>Please visit Google to update your account settings</p>
        <Button type="button" color="google plus">
          <Icon name="google plus" />
          Go to Google
        </Button>
      </div>
    )
  }
    </Segment>
  );
};

const AccountPage = reduxForm<{}, IAccountPageFromProp>({
  form: "account", // a unique identifier for this form
  validate: validate
})(Account);

//export default reduxForm({ form: "account", validate })(AccountPage);
export default AccountPage;
