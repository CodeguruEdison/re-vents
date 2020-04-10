import React, { FC, useState } from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { connect } from "react-redux";
import { IRegisterProps, IAuthRegisterProps } from "../Entity/authEntity";
import { RegisterUserAction } from "../authActions";
import { combineValidators, isRequired } from "revalidate";
import { IErrorState } from "../Login/LoginForm";
import { SocialLogin } from "../Socialogin/SocialLogin";

const validate = combineValidators({
  displayName: isRequired("displayName"),
  email: isRequired("email"),
  password: isRequired("password"),
});
const Register: FC<IRegisterProps & InjectedFormProps<{}, IRegisterProps>> = (
  props
) => {
  const { register, handleSubmit, error, invalid, submitting } = props;
  const [state, setState] = useState<IErrorState>({ formerror: null });
  const { formerror } = state;
  const onFormSubmit = (value: any) => {
    register({
      ...value,
    }).catch((error) => {
      if (error && Object.prototype.hasOwnProperty.call(error, "errors")) {
        // error = (props.error! as any).errors!._error;
        setState({ formerror: error.errors._error });
      }
      console.log(formerror);
    });
  };
  return (
    <div>
      <Form
        size="large"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="teal"
          >
            Register
          </Button>
          <Divider horizontal> Or</Divider>
          <SocialLogin />
        </Segment>
      </Form>
    </div>
  );
};
const mapDispatchToProps = {
  register: RegisterUserAction,
};
const RegisterForm = reduxForm<{}, IRegisterProps>({
  form: "registerForm", // a unique identifier for this form
  validate: validate,
})(Register);
export default connect(null, mapDispatchToProps)(RegisterForm);
