import React, { FC } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Form, Label } from "semantic-ui-react";

export interface ITextInputProps {
  input: any;
  width: string;
  type: string;
  placeholder: string;
  meta: IMeta;
}
export interface IMeta {
  touched: boolean;
  error: string;
}
export const TextInput: FC<InjectedFormProps & ITextInputProps> = props => {
  const {
    input,
    width,
    type,
    placeholder,
    meta: { touched, error }
  } = props;

  return (
    <Form.Field error={touched && !!error}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default TextInput;
