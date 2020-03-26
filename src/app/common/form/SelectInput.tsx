import React, { FC } from "react";
import { InjectedFormProps } from "redux-form";
import { Form, Label, Select } from "semantic-ui-react";

export interface ISelectInputProps {
  input: any; //SelectHTMLAttributes<WrappedFieldInputProps> ;
  width: string;
  type: string;
  placeholder: string;
  multiple: boolean;
  options: any[];
  meta: IMeta;
  value: any;
}
export interface IMeta {
  touched: boolean;
  error: string;
}
export const SelectInput: FC<InjectedFormProps & ISelectInputProps> = props => {
  const {
    input,
    options,
    placeholder,
    meta: { touched, error },
    multiple
  } = props;

  return (
    <Form.Field error={touched && !!error}>
      <Select
        value={input.value || null as any}
        onChange={(e,data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default SelectInput;
