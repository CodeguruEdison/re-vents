import React, { FC, useState } from "react";
import { ILoginProps } from "../Entity/authEntity";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { LoginAction } from "../authActions";
import { connect } from "react-redux";

export interface ILoginState {
  Loginerror: string | null;
}
export const Login: FC<ILoginProps & InjectedFormProps<{}, ILoginProps>> = (
  props
) => {
  const { login, handleSubmit } = props;
  const [state, setState] = useState<ILoginState>({ Loginerror: null });
    const onFormSubmit = (value: any) => {
    login({
      currentUser: value.email,
      authenticated: true,
      email: value.email,
      password: value.password,
    }).catch((error) => {
      if (error && Object.prototype.hasOwnProperty.call(error, "errors")) {
        // error = (props.error! as any).errors!._error;
        setState({ Loginerror: error.errors._error });
      }
      console.log(Loginerror);
    });
  };
  const { Loginerror } = state;
  return (
    <Form size="large" onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
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
        {Loginerror && (
          <Label basic color="red">
            {Loginerror}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};
/*const mapStateToProps = (state:IApplicationState, ownProps:ILoginProps) => {
  return {
    prop: state.prop
  }
}*/

const mapDispatchToProps = {
  login: LoginAction,
};

const LoginForm = reduxForm<{}, ILoginProps>({
  form: "loginForm", // a unique identifier for this form
  //validate: validate
})(Login);

//export default wit
export default connect(null, mapDispatchToProps)(LoginForm);
