import React, { FC, useState } from "react";
import { ILoginProps } from "../Entity/authEntity";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { LoginAction,SocialLoginAction } from "../authActions";
import { connect } from "react-redux";
import { SocialLogin } from "../Socialogin/SocialLogin";

export interface IErrorState {
  formerror: string | null;
}
export const Login: FC<ILoginProps & InjectedFormProps<{}, ILoginProps>> = (
  props
) => {
  const { login, handleSubmit,sociallogin } = props;
  console.log(login);
  const [state, setState] = useState<IErrorState>({ formerror: null });
  const onFormSubmit = (value: any) => {
    login({
      currentUser: value.email,
      authenticated: true,
      email: value.email,
      password: value.password,
    }).catch((error) => {
      if (error && Object.prototype.hasOwnProperty.call(error, "errors")) {
        // error = (props.error! as any).errors!._error;
        setState({ formerror: error.errors._error });
      }
      console.log(formerror);
    });
  };
  const { formerror } = state;
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
        {formerror && (
          <Label basic color="red">
            {formerror}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal> Or</Divider>
        <SocialLogin sociallogin={sociallogin} />
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
  sociallogin:SocialLoginAction
};

const LoginForm = reduxForm<{}, ILoginProps>({
  form: "loginForm", // a unique identifier for this form
  //validate: validate
})(Login);

//export default wit
export default connect(null, mapDispatchToProps)(LoginForm);
