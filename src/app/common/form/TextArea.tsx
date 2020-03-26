import React, { FC } from "react";
import { InjectedFormProps } from "redux-form";
import { Form, Label } from "semantic-ui-react";

export interface ITextTextAreaProps {
  input: any;
  width: string;
  type: string;
  placeholder: string;
  meta: IMeta;
  rows: number;
}
export interface IMeta {
  touched: boolean;
  error: string;
}
export const TextArea: FC<InjectedFormProps & ITextTextAreaProps> = props => {
  const {
    input,
    type,
    rows,
    placeholder,
    meta: { touched, error }
  } = props;

  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default TextArea;
