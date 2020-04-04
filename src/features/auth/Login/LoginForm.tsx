import React, { FC } from "react";
import { ILoginProps } from "../Entity/authEntity";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field,reduxForm, InjectedFormProps } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";

export const Login: FC<ILoginProps & InjectedFormProps<{},ILoginProps>> = props => {
  return (
    <Form error size="large">
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};
const LoginForm = reduxForm<{}, ILoginProps>({
  form: "loginForm", // a unique identifier for this form
  //validate: validate
})(Login);

//export default wit
export default LoginForm ;
