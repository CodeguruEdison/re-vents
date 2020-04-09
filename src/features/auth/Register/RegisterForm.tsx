import React, { FC } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { connect } from "react-redux";
import { IRegisterProps, IAuthRegisterProps } from "../Entity/authEntity";
import { RegisterUserAction } from "../authActions";
const Register: FC<IRegisterProps & InjectedFormProps<{}, IRegisterProps>> = props => {
  const { register, handleSubmit } = props;
  const onFormSubmit =(value:any)=>{
     register({
      ...value
     })
  }
  return (
    <div>
      <Form size="large" autoComplete="off" onSubmit={handleSubmit(onFormSubmit)} >
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
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};
const mapDispatchToProps = {
 register:RegisterUserAction
}
const RegisterForm = reduxForm<{}, IRegisterProps>({
  form: "registerForm" // a unique identifier for this form
  //validate: validate
})(Register);
export default  connect(null,mapDispatchToProps)(RegisterForm);
