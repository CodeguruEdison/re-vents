import React, { FC, InputHTMLAttributes } from "react";
import { InjectedFormProps,WrappedFieldMetaProps } from "redux-form";
import { Form, Label } from "semantic-ui-react";

export interface ITextInputProps {
  input: InputHTMLAttributes<HTMLInputElement>;
  width: string;
  type: string;
  placeholder: string;
  meta: IMeta;
}
export interface IMeta extends WrappedFieldMetaProps {
  
}
export const TextInput: FC<InjectedFormProps<{}> & ITextInputProps> = props => {
  const {
    input,
    type,
    placeholder,
    meta: { touched, error }
  } = props;
  //console.log(props);
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
